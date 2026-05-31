import Link from "next/link";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { BPCard } from "@/components/blueprints/ui/Card";
import "@/styles/blueprints.css";

export default function BlueprintsHome() {
  return (
    <BlueprintsLayout>

      <div className="text-center mb-16">
        <h1 className="bp-h1 mb-4">Blueprints Foundation</h1>
        <p className="bp-muted max-w-xl mx-auto">
          A guided transformation system for individuals, families, and institutions—built on the Solavian OS.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Link href="/blueprints/onboarding" className="block">
          <BPCard title="Begin Institution Onboarding">
            <span className="bp-btn inline-block mt-2">Start Blueprint</span>
          </BPCard>
        </Link>

        <Link href="/blueprints/dashboard" className="block">
          <BPCard title="Go to Dashboard">
            <span className="bp-btn inline-block mt-2">Open Dashboard</span>
          </BPCard>
        </Link>
      </div>

    </BlueprintsLayout>
  );
}
