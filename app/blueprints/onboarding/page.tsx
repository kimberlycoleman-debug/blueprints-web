import Link from "next/link";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";
import "@/styles/blueprints.css";

export default function OnboardingEntry() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto text-center">

        <h1 className="bp-h1 mb-4">Institution Onboarding</h1>

        <p className="bp-muted mb-10 max-w-lg mx-auto">
          Begin the guided onboarding process to generate your institution&apos;s Blueprint.
        </p>

        <Link href="/blueprints/onboarding/steps/type">
          <StepButton>Begin</StepButton>
        </Link>

      </div>
    </BlueprintsLayout>
  );
}
