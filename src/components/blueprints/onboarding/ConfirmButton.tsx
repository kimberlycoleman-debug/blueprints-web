"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveOnboarding } from "@/app/blueprints/actions/saveOnboarding";

export default function ConfirmButton({
  type,
  size,
  role,
}: {
  type: string;
  size: string;
  role: string;
}) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function handleFinish() {
    startTransition(async () => {
      try {
        const institutionId = await saveOnboarding({ type, size, role });
        // Store in localStorage so dashboard/phases can read it
        localStorage.setItem("bp_institution_id", institutionId);
      } catch {
        // If DB unavailable, continue anyway — localStorage tracking still works
      }
      router.push("/blueprints/dashboard");
    });
  }

  return (
    <button
      onClick={handleFinish}
      disabled={pending}
      className="bp-btn w-full py-3 text-base font-semibold mt-6"
    >
      {pending ? "Setting up..." : "Finish Onboarding"}
    </button>
  );
}
