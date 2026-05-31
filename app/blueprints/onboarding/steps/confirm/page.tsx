import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import ConfirmButton from "@/components/blueprints/onboarding/ConfirmButton";

export default function StepConfirm() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">

        <ProgressBar step={80} />

        <StepCard title="Confirm & Continue">
          <p className="mb-6">
            Review your selections and proceed to your Blueprint Dashboard.
          </p>

          {/* type/size/role defaults here — will be replaced once onboarding state is tracked */}
          <ConfirmButton type="church" size="11-50" role="founder" />
        </StepCard>

      </div>
    </BlueprintsLayout>
  );
}
