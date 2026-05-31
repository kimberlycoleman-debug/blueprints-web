"use server";

import { createClient } from "@/utils/supabase/server";

export async function saveOnboarding(data: {
  type: string;
  size: string;
  role: string;
}) {
  const supabase = await createClient();

  const { data: institution, error } = await supabase
    .from("institutions")
    .insert({
      type: data.type,
      size: data.size,
      role: data.role,
    })
    .select()
    .single();

  if (error) throw error;

  const phases = [1, 2, 3, 4].map((p) => ({
    institution_id: institution.id,
    phase: p,
    completed: false,
  }));

  const { error: progressError } = await supabase
    .from("blueprint_progress")
    .insert(phases);

  if (progressError) throw progressError;

  return institution.id as string;
}
