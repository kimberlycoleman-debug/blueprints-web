import Link from "next/link";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";

export default function StepSize() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">

        <ProgressBar step={40} />

        <StepCard title="Institution Size">
          <p className="mb-6">
            Select the approximate size of your organization.
          </p>

          <div className="grid gap-4">
            <Link href="/blueprints/onboarding/steps/role">
              <StepButton>1–10 People</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/role">
              <StepButton>11–50 People</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/role">
              <StepButton>50–250 People</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/role">
              <StepButton>250+ People</StepButton>
            </Link>
          </div>
        </StepCard>

      </div>
    </BlueprintsLayout>
  );
}
