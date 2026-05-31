import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPCard } from "@/components/blueprints/ui/Card";
import { BPButton } from "@/components/blueprints/ui/Button";
import "@/styles/blueprints.css";

export default function BlueprintsDashboard() {
  return (
    <BlueprintsLayout>
      <div className="text-center mb-10">
        <h1 className="bp-h1 mb-3">Dashboard</h1>
        <p className="bp-muted max-w-xl mx-auto">
          Monitor your formation progress, governance activity, and institution milestones.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <BPCard title="Formation Progress">
          <p className="bp-muted text-sm">Track your active Blueprint steps and completion status.</p>
        </BPCard>

        <BPCard title="Governance Activity">
          <p className="bp-muted text-sm">Review decisions, role assignments, and institutional updates.</p>
        </BPCard>

        <BPCard title="Team Pathways">
          <p className="bp-muted text-sm">View assigned formation tracks for each team member.</p>
        </BPCard>

        <BPCard title="Milestones">
          <p className="bp-muted text-sm">Celebrate completed stages and plan next horizon goals.</p>
        </BPCard>
      </div>

      <div className="mt-8 flex justify-center">
        <BPButton>Continue Onboarding</BPButton>
      </div>

      <div className="mt-12 text-center text-sm text-[var(--bp-text-muted)]">
        <p>Matthew 28:19–20 · Formation · Governance · Witness</p>
      </div>
    </BlueprintsLayout>
  );
}
