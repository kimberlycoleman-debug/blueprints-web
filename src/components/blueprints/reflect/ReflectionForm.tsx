"use client";

import { useTransition, useState, useEffect } from "react";
import { saveReflection } from "@/app/blueprints/actions/reflect";

const PROMPTS = [
  "What did your institution focus on this week?",
  "Where did you experience momentum or breakthrough?",
  "What obstacles surfaced, and how did you respond?",
  "Who showed up or led in a meaningful way?",
  "What do you need to carry into next week?",
];

export default function ReflectionForm() {
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [institutionId, setInstitutionId] = useState<string | null>(null);

  useEffect(() => {
    setInstitutionId(localStorage.getItem("bp_institution_id"));
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    start(async () => {
      const result = await saveReflection(fd);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
      <input type="hidden" name="institutionId" value={institutionId ?? ""} />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {PROMPTS.map((prompt, i) => (
        <div key={i}>
          <label className="block text-sm font-medium mb-2 text-[var(--bp-text)]">
            {i + 1}. {prompt}
          </label>
          <textarea
            name={`response_${i}`}
            rows={3}
            placeholder="Your response..."
            className="w-full bg-[var(--bp-bg)] border border-[var(--bp-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--bp-accent)] resize-none"
          />
        </div>
      ))}

      <button type="submit" disabled={pending || !institutionId} className="bp-btn w-full">
        {pending ? "Saving..." : "Save Weekly Reflection"}
      </button>
    </form>
  );
}
