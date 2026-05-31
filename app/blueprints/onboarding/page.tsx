"use client";

import { useRouter } from "next/navigation";
import BlueprintsLayout from "@/components/blueprints/Layout";
import "@/styles/blueprints.css";

export default function OnboardingEntry() {
  const router = useRouter();
  return (
    <BlueprintsLayout>
      <div className="max-w-xl mx-auto text-center">
        <h1 className="bp-h1 mb-4">Institution Onboarding</h1>
        <p className="bp-muted mb-10 max-w-lg mx-auto">
          Begin the guided onboarding process to generate your institution&apos;s Blueprint.
        </p>
        <button
          onClick={() => router.push("/blueprints/onboarding/steps/type")}
          className="bp-btn w-full py-3 text-base font-semibold"
        >
          Begin
        </button>
      </div>
    </BlueprintsLayout>
  );
}
