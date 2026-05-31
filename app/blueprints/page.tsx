"use client";

import { useRouter } from "next/navigation";
import BlueprintsLayout from "@/components/blueprints/Layout";
import "@/styles/blueprints.css";

export default function BlueprintsHome() {
  const router = useRouter();

  return (
    <BlueprintsLayout>

      <div className="text-center mb-16">
        <h1 className="bp-h1 mb-4">Blueprints Foundation</h1>
        <p className="bp-muted max-w-xl mx-auto">
          A guided transformation system for individuals, families, and institutions—built on the Solavian OS.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <button
          onClick={() => router.push("/blueprints/onboarding")}
          className="bp-card text-left w-full cursor-pointer hover:border-[var(--bp-accent)] border border-[var(--bp-border)] transition"
        >
          <h2 className="text-lg font-semibold text-[var(--bp-text)] mb-2">Begin Institution Onboarding</h2>
          <p className="bp-muted text-sm mb-4">Set your institution type, size, and role to receive a personalized Blueprint.</p>
          <span className="bp-btn inline-block">Start Blueprint</span>
        </button>

        <button
          onClick={() => router.push("/blueprints/dashboard")}
          className="bp-card text-left w-full cursor-pointer hover:border-[var(--bp-accent)] border border-[var(--bp-border)] transition"
        >
          <h2 className="text-lg font-semibold text-[var(--bp-text)] mb-2">Go to Dashboard</h2>
          <p className="bp-muted text-sm mb-4">Track your 20-phase progress and continue your institution’s Blueprint journey.</p>
          <span className="bp-btn inline-block">Open Dashboard</span>
        </button>
      </div>

    </BlueprintsLayout>
  );
}
