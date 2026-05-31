import Link from "next/link";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";

export default function StepType() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">

        <ProgressBar step={20} />

        <StepCard title="Select Institution Type">
          <p className="mb-6">
            Choose the category that best describes your organization.
          </p>

          <div className="grid gap-4">
            <Link href="/blueprints/onboarding/steps/size">
              <StepButton>Church / Ministry</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/size">
              <StepButton>Nonprofit / Foundation</StepButton>
            </Link>
            <Link href="/blueprints/onboarding/steps/size">
              <StepButton>Business / Enterprise</StepButton>
            </Link>
          </div>
        </StepCard>

      </div>
    </BlueprintsLayout>
  );
}
