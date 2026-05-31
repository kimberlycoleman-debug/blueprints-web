"use client";

import Link from "next/link";

const PHASES = [
  { id: 1, label: "Identity" }, { id: 2, label: "Governance" },
  { id: 3, label: "Formation" }, { id: 4, label: "Witness" },
  { id: 5, label: "Culture" }, { id: 6, label: "Communication" },
  { id: 7, label: "Finances" }, { id: 8, label: "Operations" },
  { id: 9, label: "People" }, { id: 10, label: "Strategy" },
  { id: 11, label: "Partnerships" }, { id: 12, label: "Discipleship" },
  { id: 13, label: "Prayer" }, { id: 14, label: "Legacy" },
  { id: 15, label: "Justice" }, { id: 16, label: "Health" },
  { id: 17, label: "Innovation" }, { id: 18, label: "Education" },
  { id: 19, label: "Worship" }, { id: 20, label: "Completion" },
];

export default function PhaseNav({ current }: { current: number }) {
  return (
    <div className="flex gap-3 mb-10 overflow-x-auto pb-2 flex-wrap">
      {PHASES.map((p) => (
        <Link
          key={p.id}
          href={`/blueprints/phases/${p.id}`}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition
            ${
              current === p.id
                ? "bg-[var(--bp-accent)] text-[var(--bp-bg)]"
                : "bg-[var(--bp-surface)] text-[var(--bp-text-muted)] hover:text-white"
            }`}
        >
          {p.id}. {p.label}
        </Link>
      ))}
    </div>
  );
}
