"use server";

import { createClient } from "@/utils/supabase/server";

/**
 * Solavian OS Integration Layer
 *
 * This module manages the sync bridge between the Blueprints Foundation App
 * and the Solavian OS — writing identity events, formation milestones, and
 * phase completions into the OS identity + formation tables.
 *
 * Architecture:
 *   - `os_identity_events` — logs key identity moments (onboarding, phase completions, reflections)
 *   - `os_formation_snapshots` — periodic formation state captures for longitudinal OS analysis
 *   - `os_sync_log` — audit log of all OS sync operations
 */

export type OSEventType =
  | "institution_created"
  | "phase_completed"
  | "reflection_submitted"
  | "journal_entry_saved"
  | "cohort_joined"
  | "blueprint_complete";

export async function emitOSEvent({
  institutionId,
  eventType,
  payload = {},
}: {
  institutionId: string;
  eventType: OSEventType;
  payload?: Record<string, unknown>;
}) {
  const supabase = await createClient();
  const { error } = await supabase.from("os_identity_events").insert({
    institution_id: institutionId,
    event_type: eventType,
    payload,
    emitted_at: new Date().toISOString(),
  });

  if (error) return { error: error.message };
  return { success: true };
}

export async function captureFormationSnapshot(institutionId: string) {
  const supabase = await createClient();

  const { data: inst } = await supabase
    .from("institutions")
    .select("type, size, role")
    .eq("id", institutionId)
    .single();

  const { data: progress } = await supabase
    .from("blueprint_progress")
    .select("phase, completed")
    .eq("institution_id", institutionId);

  const { data: reflections } = await supabase
    .from("reflections")
    .select("id")
    .eq("institution_id", institutionId);

  const { data: journal } = await supabase
    .from("journal_entries")
    .select("id")
    .eq("institution_id", institutionId);

  const completedPhases = (progress ?? []).filter((p) => p.completed).length;
  const snapshot = {
    institution_id: institutionId,
    institution_type: inst?.type ?? null,
    institution_size: inst?.size ?? null,
    institution_role: inst?.role ?? null,
    completed_phases: completedPhases,
    total_phases: 20,
    formation_pct: Math.round((completedPhases / 20) * 100),
    reflection_count: (reflections ?? []).length,
    journal_count: (journal ?? []).length,
    captured_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("os_formation_snapshots").insert(snapshot);
  if (error) return { error: error.message };
  return { snapshot };
}

export async function getOSIdentityProfile(institutionId: string) {
  const supabase = await createClient();

  const [
    { data: inst },
    { data: events },
    { data: snapshots },
  ] = await Promise.all([
    supabase.from("institutions").select("*").eq("id", institutionId).single(),
    supabase
      .from("os_identity_events")
      .select("event_type, payload, emitted_at")
      .eq("institution_id", institutionId)
      .order("emitted_at", { ascending: false })
      .limit(20),
    supabase
      .from("os_formation_snapshots")
      .select("formation_pct, completed_phases, reflection_count, journal_count, captured_at")
      .eq("institution_id", institutionId)
      .order("captured_at", { ascending: false })
      .limit(10),
  ]);

  return {
    institution: inst ?? null,
    recentEvents: events ?? [],
    formationHistory: snapshots ?? [],
  };
}

export async function syncBlueprintsToOS(institutionId: string) {
  const supabase = await createClient();

  // Capture current formation snapshot
  const snapshotResult = await captureFormationSnapshot(institutionId);
  if (snapshotResult.error) return { error: snapshotResult.error };

  // Log sync operation
  const { error } = await supabase.from("os_sync_log").insert({
    institution_id: institutionId,
    sync_type: "blueprints_to_os",
    status: "success",
    synced_at: new Date().toISOString(),
  });

  if (error) return { error: error.message };
  return { success: true, snapshot: snapshotResult.snapshot };
}
