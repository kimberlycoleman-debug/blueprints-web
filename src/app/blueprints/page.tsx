import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPButton } from "@/components/blueprints/ui/Button";
import "@/styles/blueprints.css";

export default function BlueprintsHome() {
  return (
    <BlueprintsLayout>
      <div className="mb-8 text-center">
        <img src="/blueprints-banner.png" alt="Blueprints Banner" className="mx-auto mb-6 w-64" />
        <h1 className="bp-h1 mb-3 text-[var(--bp-accent)]">Blueprints Foundation</h1>
        <p className="bp-muted max-w-xl mx-auto">
          A guided transformation system for individuals, families, and institutions—built on the Solavian OS.
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <BPButton>Begin Institution Onboarding</BPButton>
        <BPButton>Go to Dashboard</BPButton>
      </div>
    </BlueprintsLayout>
  );
}
