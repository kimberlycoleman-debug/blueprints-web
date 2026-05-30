import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPButton } from "@/components/blueprints/ui/Button";
import { BPCard } from "@/components/blueprints/ui/Card";
import "@/styles/blueprints.css";

export default function BlueprintsHome() {
  return (
    <BlueprintsLayout>
      <div className="text-center mb-10">
        <img src="/blueprints-banner.png" alt="Blueprints Banner" className="mx-auto mb-6 w-72" />
        <h1 className="bp-h1 mb-3">Blueprints Foundation</h1>
        <p className="bp-muted max-w-xl mx-auto">
          A guided transformation system for individuals, families, and institutions—built on the Solavian OS.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <BPCard title="Begin Institution Onboarding">
          <BPButton>Start Blueprint</BPButton>
        </BPCard>

        <BPCard title="Go to Dashboard">
          <BPButton>Open Dashboard</BPButton>
        </BPCard>
      </div>

      <div className="mt-12 text-center text-sm text-[var(--bp-text-muted)]">
        <p>Matthew 28:19–20 · Formation · Governance · Witness</p>
      </div>
    </BlueprintsLayout>
  );
}
