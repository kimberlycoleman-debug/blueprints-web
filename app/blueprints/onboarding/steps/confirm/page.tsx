"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import ConfirmButton from "@/components/blueprints/onboarding/ConfirmButton";

const LABELS: Record<string, string> = {
  church: "Church / Ministry",
  nonprofit: "Nonprofit / Foundation",
  business: "Business / Enterprise",
  "1-10": "1–10 People",
  "11-50": "11–50 People",
  "50-250": "50–250 People",
  "250+": "250+ People",
  founder: "Founder / Executive",
  admin: "Administrator",
  member: "Team Member",
};

function StepConfirmInner() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "church";
  const size = searchParams.get("size") ?? "11-50";
  const role = searchParams.get("role") ?? "founder";

  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={80} />
        <StepCard title="Confirm & Continue">
          <div className="mb-6 space-y-2 text-sm">
            <p><span className="text-[var(--bp-text-muted)]">Type:</span> {LABELS[type] ?? type}</p>
            <p><span className="text-[var(--bp-text-muted)]">Size:</span> {LABELS[size] ?? size}</p>
            <p><span className="text-[var(--bp-text-muted)]">Role:</span> {LABELS[role] ?? role}</p>
          </div>
          <ConfirmButton type={type} size={size} role={role} />
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}

export default function StepConfirm() {
  return (
    <Suspense>
      <StepConfirmInner />
    </Suspense>
  );
}
