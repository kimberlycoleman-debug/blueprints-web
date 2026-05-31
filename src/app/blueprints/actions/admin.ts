"use server";

import { createClient } from "@/utils/supabase/server";

export async function getAdminStats() {
  const supabase = await createClient();

  const { data: institutions, error: iErr } = await supabase
    .from("institutions")
    .select("id, name, type, size, role, created_at");

  const { data: progress, error: pErr } = await supabase
    .from("blueprint_progress")
    .select("institution_id, phase, completed");

  if (iErr || pErr) return { error: "Failed to load admin data" };

  const stats = (institutions ?? []).map((inst) => {
    const rows = (progress ?? []).filter((p) => p.institution_id === inst.id);
    const completedCount = rows.filter((p) => p.completed).length;
    return {
      ...inst,
      completedPhases: completedCount,
      totalPhases: 20,
      progressPct: Math.round((completedCount / 20) * 100),
    };
  });

  return { stats };
}

export async function getFacilitatorData(institutionId: string) {
  const supabase = await createClient();

  const { data: inst } = await supabase
    .from("institutions")
    .select("*")
    .eq("id", institutionId)
    .single();

  const { data: progress } = await supabase
    .from("blueprint_progress")
    .select("phase, completed, updated_at")
    .eq("institution_id", institutionId)
    .order("phase");

  return { institution: inst, progress: progress ?? [] };
}
