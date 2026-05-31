"use client";

import { useTransition, useState, useEffect } from "react";
import { saveJournalEntry } from "@/app/blueprints/actions/reflect";

export default function JournalEntryForm() {
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
      const result = await saveJournalEntry(fd);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <input type="hidden" name="institutionId" value={institutionId ?? ""} />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div>
        <label className="block text-sm text-[var(--bp-text-muted)] mb-1">Title (optional)</label>
        <input
          name="title"
          placeholder="Entry title..."
          className="w-full bg-[var(--bp-bg)] border border-[var(--bp-border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--bp-accent)]"
        />
      </div>

      <div>
        <label className="block text-sm text-[var(--bp-text-muted)] mb-1">Journal Entry *</label>
        <textarea
          name="body"
          required
          rows={8}
          placeholder="Write freely..."
          className="w-full bg-[var(--bp-bg)] border border-[var(--bp-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--bp-accent)] resize-none"
        />
      </div>

      <button type="submit" disabled={pending || !institutionId} className="bp-btn w-full">
        {pending ? "Saving..." : "Save Journal Entry"}
      </button>
    </form>
  );
}
