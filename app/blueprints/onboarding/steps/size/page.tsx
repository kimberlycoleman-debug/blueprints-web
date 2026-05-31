"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";

const SIZES = [
  { label: "1–10 People", value: "1-10" },
  { label: "11–50 People", value: "11-50" },
  { label: "50–250 People", value: "50-250" },
  { label: "250+ People", value: "250+" },
];

function StepSizeInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "";

  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={40} />
        <StepCard title="Institution Size">
          <p className="mb-6">Select the approximate size of your organization.</p>
          <div className="grid gap-4">
            {SIZES.map((s) => (
              <button
                key={s.value}
                onClick={() => router.push(`/blueprints/onboarding/steps/role?type=${type}&size=${s.value}`)}
                className="bp-btn w-full text-center py-3 text-base font-semibold"
              >
                {s.label}
              </button>
            ))}
          </div>
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}

export default function StepSize() {
  return (
    <Suspense>
      <StepSizeInner />
    </Suspense>
  );
}
