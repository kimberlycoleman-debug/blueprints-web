import BlueprintsLayout from "@/components/blueprints/Layout";
import { StepCard } from "@/components/blueprints/onboarding/StepCard";
import ProgressBar from "@/components/blueprints/onboarding/ProgressBar";
import { StepButton } from "@/components/blueprints/onboarding/StepButton";
import Link from "next/link";

const SIZES = [
  { label: "1–10 People", value: "1-10" },
  { label: "11–50 People", value: "11-50" },
  { label: "50–250 People", value: "50-250" },
  { label: "250+ People", value: "250+" },
];

export default async function StepSize({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type = "" } = await searchParams;
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto">
        <ProgressBar step={40} />
        <StepCard title="Institution Size">
          <p className="mb-6">Select the approximate size of your organization.</p>
          <div className="grid gap-4">
            {SIZES.map((s) => (
              <Link key={s.value} href={`/blueprints/onboarding/steps/role?type=${type}&size=${s.value}`}>
                <StepButton>{s.label}</StepButton>
              </Link>
            ))}
          </div>
        </StepCard>
      </div>
    </BlueprintsLayout>
  );
}
