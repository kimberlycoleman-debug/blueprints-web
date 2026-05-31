"use server";

import { createClient } from "@/utils/supabase/server";
import { emitOSEvent } from "@/app/blueprints/actions/os-sync";

export async function completePhase(institutionId: string, phase: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("blueprint_progress")
    .update({ completed: true, updated_at: new Date().toISOString() })
    .eq("institution_id", institutionId)
    .eq("phase", phase);

  if (error) throw error;

  await emitOSEvent({
    institutionId,
    eventType: "phase_completed",
    payload: { phase },
  });

  return true;
}
