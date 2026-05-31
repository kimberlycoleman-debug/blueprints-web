"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressRing from "@/components/blueprints/dashboard/ProgressRing";
import { PhaseCard } from "@/components/blueprints/dashboard/PhaseCard";
import { PhaseButton } from "@/components/blueprints/dashboard/PhaseButton";
import { createClient } from "@/utils/supabase/client";

const PHASES = [
  { id: 1, title: "Phase 1 \u2014 Identity", description: "Establish institutional identity, mission, and authority alignment." },
  { id: 2, title: "Phase 2 \u2014 Governance", description: "Define leadership structure, roles, and decision-making flow." },
  { id: 3, title: "Phase 3 \u2014 Formation", description: "Develop discipleship, training, and internal development pathways." },
  { id: 4, title: "Phase 4 \u2014 Witness", description: "Establish outreach, communication, and public presence." },
  { id: 5, title: "Phase 5 \u2014 Culture", description: "Define the lived culture, norms, and shared language of your institution." },
  { id: 6, title: "Phase 6 \u2014 Communication", description: "Establish how information flows internally and externally." },
  { id: 7, title: "Phase 7 \u2014 Finances", description: "Build stewardship practices, budgeting, and financial sustainability." },
  { id: 8, title: "Phase 8 \u2014 Operations", description: "Document and optimize core operational systems and tools." },
  { id: 9, title: "Phase 9 \u2014 People", description: "Build processes for attracting, developing, and retaining aligned people." },
  { id: 10, title: "Phase 10 \u2014 Strategy", description: "Define 1, 3, and 5-year goals and the execution framework." },
  { id: 11, title: "Phase 11 \u2014 Partnerships", description: "Build strategic alliances and covenant relationships." },
  { id: 12, title: "Phase 12 \u2014 Discipleship", description: "Design individual and collective formation tracks." },
  { id: 13, title: "Phase 13 \u2014 Prayer", description: "Cultivate a culture and infrastructure of prayer and intercession." },
  { id: 14, title: "Phase 14 \u2014 Legacy", description: "Plan succession and preserve institutional memory." },
  { id: 15, title: "Phase 15 \u2014 Justice", description: "Define your institution's posture and programs for justice." },
  { id: 16, title: "Phase 16 \u2014 Health", description: "Protect the spiritual, emotional, and organizational health of your people." },
  { id: 17, title: "Phase 17 \u2014 Innovation", description: "Build adaptive systems and evaluate emerging opportunities." },
  { id: 18, title: "Phase 18 \u2014 Education", description: "Design learning architecture and curriculum for your institution." },
  { id: 19, title: "Phase 19 \u2014 Worship", description: "Establish worship culture and nurture creative expression." },
  { id: 20, title: "Phase 20 \u2014 Completion", description: "Audit all phases and commission your institution." },
];

const STORAGE_KEY = "bp_completed_phases";

const TYPE_LABELS: Record<string, string> = {
  church: "Church / Ministry",
  nonprofit: "Nonprofit / Foundation",
  business: "Business / Enterprise",
};

export default function DashboardClient() {
  const router = useRouter();
  const [completed, setCompleted] = useState<number[]>([]);
  const [institution, setInstitution] = useState<{ type?: string; role?: string } | null>(null);

  useEffect(() => {
    // Load completed phases from localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompleted(JSON.parse(stored));
    } catch {
      // localStorage unavailable
    }

    // Load institution data from Supabase if we have an ID
    const institutionId = localStorage.getItem("bp_institution_id");
    if (!institutionId) return;

    const supabase = createClient();
    supabase
      .from("institutions")
      .select("type, role")
      .eq("id", institutionId)
      .single()
      .then(({ data }) => {
        if (data) setInstitution(data);
      });
  }, []);

  const progress = Math.round((completed.length / 20) * 100);

  return (
    <>
      {institution && (
        <div className="mb-10 text-center">
          <p className="text-[var(--bp-accent)] font-semibold text-lg">
            {TYPE_LABELS[institution.type ?? ""] ?? institution.type}
          </p>
          <p className="text-sm text-[var(--bp-text-muted)] mt-1 capitalize">
            {institution.role} account
          </p>
        </div>
      )}

      <div className="flex flex-col items-center mb-20">
        <ProgressRing value={progress} />
        <p className="text-sm text-[var(--bp-text-muted)] mt-4">
          {progress}% Complete
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {PHASES.map((p) => (
          <PhaseCard key={p.id} title={p.title} description={p.description}>
            <PhaseButton onClick={() => router.push(`/blueprints/phases/${p.id}`)}>
              {completed.includes(p.id) ? "✓ Completed" : "Open Phase"}
            </PhaseButton>
          </PhaseCard>
        ))}
      </div>
    </>
  );
}
