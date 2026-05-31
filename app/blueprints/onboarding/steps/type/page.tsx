"use client";

import { useRouter } from "next/navigation";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";

const TYPES = [
  { label: "Church / Ministry", value: "church" },
  { label: "Nonprofit / Foundation", value: "nonprofit" },
  { label: "Business / Enterprise", value: "business" },
];

export default function StepType() {
  const router = useRouter();
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={20} />
        <StepCard title="Select Institution Type">
          <p className="mb-6">Choose the category that best describes your organization.</p>
          <div className="grid gap-4">
            {TYPES.map((t) => (
              <button
                key={t.value}
                onClick={() => router.push(`/blueprints/onboarding/steps/size?type=${t.value}`)}
                className="bp-btn w-full text-center py-3 text-base font-semibold"
              >
                {t.label}
              </button>
            ))}
          </div>
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}
