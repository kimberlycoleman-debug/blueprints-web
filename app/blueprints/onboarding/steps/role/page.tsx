import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";
import Link from "next/link";

const ROLES = [
  { label: "Founder / Executive", value: "founder" },
  { label: "Administrator", value: "admin" },
  { label: "Team Member", value: "member" },
];

export default async function StepRole({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; size?: string }>;
}) {
  const { type = "", size = "" } = await searchParams;
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={60} />
        <StepCard title="Your Role">
          <p className="mb-6">Tell us your position within the organization.</p>
          <div className="grid gap-4">
            {ROLES.map((r) => (
              <Link key={r.value} href={`/blueprints/onboarding/steps/confirm?type=${type}&size=${size}&role=${r.value}`}>
                <StepButton>{r.label}</StepButton>
              </Link>
            ))}
          </div>
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}
