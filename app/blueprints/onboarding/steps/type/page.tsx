import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";
import Link from "next/link";

const TYPES = [
  { label: "Church / Ministry", value: "church" },
  { label: "Nonprofit / Foundation", value: "nonprofit" },
  { label: "Business / Enterprise", value: "business" },
];

export default function StepType() {
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={20} />
        <StepCard title="Select Institution Type">
          <p className="mb-6">Choose the category that best describes your organization.</p>
          <div className="grid gap-4">
            {TYPES.map((t) => (
              <Link key={t.value} href={`/blueprints/onboarding/steps/size?type=${t.value}`}>
                <StepButton>{t.label}</StepButton>
              </Link>
            ))}
          </div>
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}
