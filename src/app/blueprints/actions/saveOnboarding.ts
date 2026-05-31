"use server";

import { createClient } from "@/utils/supabase/server";
import { emitOSEvent } from "@/app/blueprints/actions/os-sync";

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

  const phases = Array.from({ length: 20 }, (_, i) => ({
    institution_id: institution.id,
    phase: i + 1,
    completed: false,
  }));

  const { error: progressError } = await supabase
    .from("blueprint_progress")
    .insert(phases);

  if (progressError) throw progressError;

  // Emit OS identity event for institution creation
  await emitOSEvent({
    institutionId: institution.id,
    eventType: "institution_created",
    payload: { type: data.type, size: data.size, role: data.role },
  });

  return institution.id as string;
}
