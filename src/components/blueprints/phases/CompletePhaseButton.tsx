"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "bp_completed_phases";

export default function CompletePhaseButton({ phase }: { phase: number }) {
  const [completed, setCompleted] = useState(false);
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
    try {
      const stored: number[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
      if (!stored.includes(phase)) {
        const updated = [...stored, phase];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setCompleted(true);
      }
    } catch {
      // localStorage unavailable
    }
    router.push("/blueprints/dashboard");
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
      className="bp-btn w-full py-3 text-base font-semibold mt-6"
    >
      Mark Phase {phase} Complete
    </button>
  );
}
