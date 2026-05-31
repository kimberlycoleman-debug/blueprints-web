"use client";

import { useEffect, useState } from "react";
import { getJournalEntries } from "@/app/blueprints/actions/reflect";

type Entry = {
  id: string;
  title: string | null;
  body: string;
  phase: number | null;
  created_at: string;
};

export default function JournalHistoryClient() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("bp_institution_id");
    if (!id) { setLoading(false); return; }
    getJournalEntries(id).then(({ entries: e }) => {
      setEntries(e ?? []);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="bp-muted">Loading journal...</p>;
  if (entries.length === 0) return <p className="bp-muted">No journal entries yet. Write your first entry.</p>;

  return (
    <div className="space-y-4">
      {entries.map((e) => (
        <div key={e.id} className="bp-card border border-[var(--bp-border)]">
          <button
            onClick={() => setOpen(open === e.id ? null : e.id)}
            className="w-full flex justify-between items-center text-left"
          >
            <div>
              <p className="font-semibold">{e.title ?? "Untitled Entry"}</p>
              <p className="text-xs text-[var(--bp-text-muted)] mt-0.5">
                {new Date(e.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                {e.phase ? ` · Phase ${e.phase}` : ""}
              </p>
            </div>
            <span className="text-[var(--bp-text-muted)] text-sm">{open === e.id ? "▲" : "▼"}</span>
          </button>

          {open === e.id && (
            <div className="mt-5 border-t border-[var(--bp-border)] pt-5">
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{e.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
