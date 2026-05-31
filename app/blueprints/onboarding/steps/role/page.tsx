import Link from "next/link";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";

export default function StepRole() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">

        <ProgressBar step={60} />

        <StepCard title="Your Role">
          <p className="mb-6">
            Tell us your position within the organization.
          </p>

          <div className="grid gap-4">
            <Link href="/blueprints/onboarding/steps/confirm">
              <StepButton>Founder / Executive</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/confirm">
              <StepButton>Administrator</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/confirm">
              <StepButton>Team Member</StepButton>
            </Link>
          </div>
        </StepCard>

      </div>
    </BlueprintsLayout>
  );
}
