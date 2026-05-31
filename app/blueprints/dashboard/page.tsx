import BlueprintsLayout from "@/components/blueprints/Layout";
import ProgressRing from "@/components/blueprints/dashboard/ProgressRing";
import { PhaseCard } from "@/components/blueprints/dashboard/PhaseCard";
import { PhaseButton } from "@/components/blueprints/dashboard/PhaseButton";
import "@/styles/blueprints.css";

export default function DashboardPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="bp-h1 mb-4">Blueprints Dashboard</h1>
          <p className="bp-muted max-w-xl mx-auto">
            Track your institution&apos;s Blueprint progress across all phases.
          </p>
        </div>

        <div className="flex flex-col items-center mb-20">
          <ProgressRing value={25} />
          <p className="text-sm text-[var(--bp-text-muted)] mt-4">25% Complete</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PhaseCard
            title="Phase 1 — Identity"
            description="Establish institutional identity, mission, and authority alignment."
          >
            <PhaseButton>Open Phase</PhaseButton>
          </PhaseCard>

          <PhaseCard
            title="Phase 2 — Governance"
            description="Define leadership structure, roles, and decision-making flow."
          >
            <PhaseButton>Open Phase</PhaseButton>
          </PhaseCard>

          <PhaseCard
            title="Phase 3 — Formation"
            description="Develop discipleship, training, and internal development pathways."
          >
            <PhaseButton>Open Phase</PhaseButton>
          </PhaseCard>

          <PhaseCard
            title="Phase 4 — Witness"
            description="Establish outreach, communication, and public presence."
          >
            <PhaseButton>Open Phase</PhaseButton>
          </PhaseCard>
        </div>

      </div>
    </BlueprintsLayout>
  );
}
