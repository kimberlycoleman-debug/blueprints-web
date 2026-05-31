"use client";

import Link from "next/link";

export default function PhaseNav({ current }: { current: number }) {
  const phases = [
    { id: 1, label: "Identity" },
    { id: 2, label: "Governance" },
    { id: 3, label: "Formation" },
    { id: 4, label: "Witness" },
  ];

  return (
    <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
      {phases.map((p) => (
        <Link
          key={p.id}
          href={`/blueprints/phases/${p.id}`}
          className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition
            ${
              current === p.id
                ? "bg-[var(--bp-accent)] text-[var(--bp-bg)]"
                : "bg-[var(--bp-surface)] text-[var(--bp-text-muted)] hover:text-white"
            }`}
        >
          Phase {p.id}: {p.label}
        </Link>
      ))}
    </div>
  );
}
