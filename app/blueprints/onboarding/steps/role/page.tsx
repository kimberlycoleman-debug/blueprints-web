"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";

const ROLES = [
  { label: "Founder / Executive", value: "founder" },
  { label: "Administrator", value: "admin" },
  { label: "Team Member", value: "member" },
];

function StepRoleInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "";
  const size = searchParams.get("size") ?? "";

  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={60} />
        <StepCard title="Your Role">
          <p className="mb-6">Tell us your position within the organization.</p>
          <div className="grid gap-4">
            {ROLES.map((r) => (
              <button
                key={r.value}
                onClick={() => router.push(`/blueprints/onboarding/steps/confirm?type=${type}&size=${size}&role=${r.value}`)}
                className="bp-btn w-full text-center py-3 text-base font-semibold"
              >
                {r.label}
              </button>
            ))}
          </div>
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}

export default function StepRole() {
  return (
    <Suspense>
      <StepRoleInner />
    </Suspense>
  );
}
