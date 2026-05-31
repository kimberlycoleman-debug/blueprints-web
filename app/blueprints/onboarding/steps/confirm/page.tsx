import Link from "next/link";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";

export default function StepConfirm() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">

        <ProgressBar step={80} />

        <StepCard title="Confirm & Continue">
          <p className="mb-6">
            Review your selections and proceed to your Blueprint Dashboard.
          </p>

          <Link href="/blueprints/dashboard">
            <StepButton>Finish Onboarding</StepButton>
          </Link>
        </StepCard>

      </div>
    </BlueprintsLayout>
  );
}
