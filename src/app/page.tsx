import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPButton } from "@/components/blueprints/ui/Button";
import "@/styles/blueprints.css";

export default function Page() {
  return (
    <BlueprintsLayout>
      <h1 className="bp-h1">Blueprints Foundation</h1>
      <p className="bp-muted">
        A guided transformation system for individuals, families, and institutions—built on the Solavian OS.
      </p>
      <div className="flex gap-3 mt-4">
        <BPButton>Begin Institution Onboarding</BPButton>
        <BPButton>Go to Dashboard</BPButton>
      </div>
    </BlueprintsLayout>
  );
}
