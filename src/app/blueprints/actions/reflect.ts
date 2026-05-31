"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const WEEKLY_PROMPTS = [
  "What did your institution focus on this week?",
  "Where did you experience momentum or breakthrough?",
  "What obstacles surfaced, and how did you respond?",
  "Who showed up or led in a meaningful way?",
  "What do you need to carry into next week?",
];

export async function getReflectionPrompts() {
  return { prompts: WEEKLY_PROMPTS };
}

export async function saveReflection(formData: FormData) {
  const institutionId = formData.get("institutionId") as string;
  const responses = WEEKLY_PROMPTS.map((_, i) =>
    formData.get(`response_${i}`) as string
  );
  const phase = formData.get("phase") ? Number(formData.get("phase")) : null;

  if (!institutionId) return { error: "Institution not identified." };

  const supabase = await createClient();
  const { error } = await supabase.from("reflections").insert({
    institution_id: institutionId,
    phase,
    responses,
    week_of: new Date().toISOString().split("T")[0],
  });

  if (error) return { error: error.message };
  redirect("/blueprints/reflect/history");
}

export async function getReflectionHistory(institutionId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("reflections")
    .select("id, phase, responses, week_of, created_at")
    .eq("institution_id", institutionId)
    .order("week_of", { ascending: false });

  if (error) return { error: error.message };
  return { reflections: data ?? [] };
}

export async function saveJournalEntry(formData: FormData) {
  const institutionId = formData.get("institutionId") as string;
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const phase = formData.get("phase") ? Number(formData.get("phase")) : null;

  if (!institutionId || !body?.trim()) return { error: "Journal body is required." };

  const supabase = await createClient();
  const { error } = await supabase.from("journal_entries").insert({
    institution_id: institutionId,
    title: title?.trim() || null,
    body: body.trim(),
    phase,
  });

  if (error) return { error: error.message };
  redirect("/blueprints/reflect/journal");
}

export async function getJournalEntries(institutionId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("journal_entries")
    .select("id, title, body, phase, created_at")
    .eq("institution_id", institutionId)
    .order("created_at", { ascending: false });

  if (error) return { error: error.message };
  return { entries: data ?? [] };
}
