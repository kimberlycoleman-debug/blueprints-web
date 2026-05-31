"use client";

import { useTransition, useState } from "react";
import { createCohort } from "@/app/blueprints/actions/cohorts";

export default function CreateCohortForm() {
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    start(async () => {
      const result = await createCohort(fd);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bp-card max-w-lg space-y-5">
      <h2 className="text-xl font-bold">Create New Cohort</h2>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div>
        <label className="block text-sm text-[var(--bp-text-muted)] mb-1">Cohort Name *</label>
        <input
          name="name"
          required
          placeholder="e.g. Spring 2026 Church Cohort"
          className="w-full bg-[var(--bp-bg)] border border-[var(--bp-border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--bp-accent)]"
        />
      </div>

      <div>
        <label className="block text-sm text-[var(--bp-text-muted)] mb-1">Facilitator Email</label>
        <input
          name="facilitatorEmail"
          type="email"
          placeholder="facilitator@example.com"
          className="w-full bg-[var(--bp-bg)] border border-[var(--bp-border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--bp-accent)]"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bp-btn w-full"
      >
        {pending ? "Creating..." : "Create Cohort"}
      </button>
    </form>
  );
}
