"use server";

import { createClient } from "@/utils/supabase/server";

export async function getProgress(institutionId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blueprint_progress")
    .select("phase, completed")
    .eq("institution_id", institutionId)
    .order("phase");

  if (error) throw error;

  return data as { phase: number; completed: boolean }[];
}
