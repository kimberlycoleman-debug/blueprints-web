"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function createCohort(formData: FormData) {
  const name = formData.get("name") as string;
  const facilitatorEmail = formData.get("facilitatorEmail") as string;

  if (!name?.trim()) return { error: "Cohort name is required." };

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("cohorts")
    .insert({ name: name.trim(), facilitator_email: facilitatorEmail?.trim() || null })
    .select("id")
    .single();

  if (error) return { error: error.message };
  redirect(`/blueprints/cohorts/${data.id}`);
}

export async function addInstitutionToCohort(cohortId: string, institutionId: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("cohort_members")
    .insert({ cohort_id: cohortId, institution_id: institutionId });

  if (error) return { error: error.message };
  return { success: true };
}

export async function getCohorts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("cohorts")
    .select("id, name, facilitator_email, created_at")
    .order("created_at", { ascending: false });

  if (error) return { error: error.message };
  return { cohorts: data ?? [] };
}

export async function getCohortDetail(cohortId: string) {
  const supabase = await createClient();

  const { data: cohort } = await supabase
    .from("cohorts")
    .select("*")
    .eq("id", cohortId)
    .single();

  const { data: members } = await supabase
    .from("cohort_members")
    .select("institution_id, institutions(id, name, type, role)")
    .eq("cohort_id", cohortId);

  const institutionIds = (members ?? []).map((m) => m.institution_id);

  let progress: { institution_id: string; phase: number; completed: boolean }[] = [];
  if (institutionIds.length > 0) {
    const { data: prog } = await supabase
      .from("blueprint_progress")
      .select("institution_id, phase, completed")
      .in("institution_id", institutionIds);
    progress = prog ?? [];
  }

  const enrichedMembers = (members ?? []).map((m) => {
    const inst = (m.institutions as unknown) as { id: string; name: string | null; type: string | null; role: string | null } | null;
    const rows = progress.filter((p) => p.institution_id === m.institution_id);
    const completedCount = rows.filter((r) => r.completed).length;
    return {
      institution_id: m.institution_id,
      name: inst?.name ?? null,
      type: inst?.type ?? null,
      role: inst?.role ?? null,
      completedPhases: completedCount,
      progressPct: Math.round((completedCount / 20) * 100),
    };
  });

  return { cohort, members: enrichedMembers };
}
