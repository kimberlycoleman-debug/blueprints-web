import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPCard } from "@/components/blueprints/ui/Card";
import { BPButton } from "@/components/blueprints/ui/Button";
import "@/styles/blueprints.css";

export default function BlueprintsOnboarding() {
  return (
    <BlueprintsLayout>
      <div className="text-center mb-10">
        <h1 className="bp-h1 mb-3">Institution Onboarding</h1>
        <p className="bp-muted max-w-xl mx-auto">
          Begin your structured formation pathway. Each step is designed for clarity, identity, and long-horizon governance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <BPCard title="Step 1 — Identity">
          <p className="bp-muted text-sm mb-4">Define your institution's name, mission, and founding vision.</p>
          <BPButton>Begin</BPButton>
        </BPCard>

        <BPCard title="Step 2 — Structure">
          <p className="bp-muted text-sm mb-4">Establish governance roles, reporting lines, and decision protocols.</p>
          <BPButton>Begin</BPButton>
        </BPCard>

        <BPCard title="Step 3 — Formation">
          <p className="bp-muted text-sm mb-4">Activate your Blueprint formation plan and assign team pathways.</p>
          <BPButton>Begin</BPButton>
        </BPCard>
      </div>

      <div className="mt-12 text-center text-sm text-[var(--bp-text-muted)]">
        <p>Matthew 28:19–20 · Formation · Governance · Witness</p>
      </div>
    </BlueprintsLayout>
  );
}
