"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProgressRing from "@/components/blueprints/dashboard/ProgressRing";
import { PhaseCard } from "@/components/blueprints/dashboard/PhaseCard";
import { PhaseButton } from "@/components/blueprints/dashboard/PhaseButton";

const PHASES = [
  {
    id: 1,
    title: "Phase 1 \u2014 Identity",
    description: "Establish institutional identity, mission, and authority alignment.",
  },
  {
    id: 2,
    title: "Phase 2 \u2014 Governance",
    description: "Define leadership structure, roles, and decision-making flow.",
  },
  {
    id: 3,
    title: "Phase 3 \u2014 Formation",
    description: "Develop discipleship, training, and internal development pathways.",
  },
  {
    id: 4,
    title: "Phase 4 \u2014 Witness",
    description: "Establish outreach, communication, and public presence.",
  },
];

const STORAGE_KEY = "bp_completed_phases";

export default function DashboardClient() {
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompleted(JSON.parse(stored));
    } catch {
      // localStorage unavailable — stay empty
    }
  }, []);

  const progress = Math.round((completed.length / 4) * 100);

  return (
    <>
      <div className="flex flex-col items-center mb-20">
        <ProgressRing value={progress} />
        <p className="text-sm text-[var(--bp-text-muted)] mt-4">
          {progress}% Complete
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {PHASES.map((p) => (
          <PhaseCard key={p.id} title={p.title} description={p.description}>
            <Link href={`/blueprints/phases/${p.id}`}>
              <PhaseButton>
                {completed.includes(p.id) ? "✓ Completed" : "Open Phase"}
              </PhaseButton>
            </Link>
          </PhaseCard>
        ))}
      </div>
    </>
  );
}
