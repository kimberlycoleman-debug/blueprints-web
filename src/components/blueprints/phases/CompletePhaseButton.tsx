"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { completePhase } from "@/app/blueprints/actions/completePhase";

const STORAGE_KEY = "bp_completed_phases";

export default function CompletePhaseButton({
  phase,
  institutionId,
}: {
  phase: number;
  institutionId?: string;
}) {
  const [completed, setCompleted] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    try {
      const stored: number[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
      setCompleted(stored.includes(phase));
    } catch {
      // localStorage unavailable
    }
  }, [phase]);

  function handleComplete() {
    startTransition(async () => {
      // Always write to localStorage for instant UI feedback
      try {
        const stored: number[] = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        );
        if (!stored.includes(phase)) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify([...stored, phase]));
        }
      } catch {
        // localStorage unavailable
      }

      // If institution is tracked in DB, persist there too
      if (institutionId) {
        await completePhase(institutionId, phase);
      }

      setCompleted(true);
      router.push("/blueprints/dashboard");
    });
  }

  if (completed) {
    return (
      <p className="w-full py-3 text-center text-sm font-semibold text-[var(--bp-accent)] mt-6">
        ✓ Phase {phase} Complete
      </p>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={pending}
      className="bp-btn w-full py-3 text-base font-semibold mt-6"
    >
      {pending ? "Saving..." : `Mark Phase ${phase} Complete`}
    </button>
  );
}
