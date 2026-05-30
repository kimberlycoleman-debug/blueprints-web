import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPButton } from "@/components/blueprints/ui/Button";
import { BPCard } from "@/components/blueprints/ui/Card";

export default function Page() {
  return (
    <BlueprintsLayout>
      <div className="text-center mb-10">
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
    </BlueprintsLayout>
  );
}
