"use client";

import { useEffect, useState } from "react";
import { getReflectionHistory } from "@/app/blueprints/actions/reflect";

const PROMPTS = [
  "What did your institution focus on this week?",
  "Where did you experience momentum or breakthrough?",
  "What obstacles surfaced, and how did you respond?",
  "Who showed up or led in a meaningful way?",
  "What do you need to carry into next week?",
];

type Reflection = {
  id: string;
  phase: number | null;
  responses: string[];
  week_of: string;
  created_at: string;
};

export default function ReflectionHistoryClient() {
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("bp_institution_id");
    if (!id) { setLoading(false); return; }
    getReflectionHistory(id).then(({ reflections: r }) => {
      setReflections(r ?? []);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="bp-muted">Loading reflections...</p>;
  if (reflections.length === 0) return <p className="bp-muted">No reflections yet. Complete your first weekly check-in.</p>;

  return (
    <div className="space-y-4">
      {reflections.map((r) => (
        <div key={r.id} className="bp-card border border-[var(--bp-border)]">
          <button
            onClick={() => setOpen(open === r.id ? null : r.id)}
            className="w-full flex justify-between items-center text-left"
          >
            <div>
              <p className="font-semibold">Week of {new Date(r.week_of + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
              {r.phase && <p className="text-xs text-[var(--bp-text-muted)] mt-0.5">Phase {r.phase}</p>}
            </div>
            <span className="text-[var(--bp-text-muted)] text-sm">{open === r.id ? "▲" : "▼"}</span>
          </button>

          {open === r.id && (
            <div className="mt-5 space-y-4 border-t border-[var(--bp-border)] pt-5">
              {PROMPTS.map((prompt, i) => (
                <div key={i}>
                  <p className="text-xs text-[var(--bp-text-muted)] mb-1">{prompt}</p>
                  <p className="text-sm">{r.responses[i] || <em className="text-[var(--bp-text-muted)]">No response</em>}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
