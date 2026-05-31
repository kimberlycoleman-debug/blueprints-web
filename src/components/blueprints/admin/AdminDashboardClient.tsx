"use client";

import { useEffect, useState } from "react";

type InstitutionStat = {
  id: string;
  name: string | null;
  type: string | null;
  size: string | null;
  role: string | null;
  created_at: string;
  completedPhases: number;
  totalPhases: number;
  progressPct: number;
};

const TYPE_LABELS: Record<string, string> = {
  church: "Church",
  nonprofit: "Nonprofit",
  business: "Business",
};

export default function AdminDashboardClient({ stats }: { stats: InstitutionStat[] }) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? stats : stats.filter((s) => s.type === filter);

  const totalInstitutions = stats.length;
  const avgProgress = stats.length
    ? Math.round(stats.reduce((acc, s) => acc + s.progressPct, 0) / stats.length)
    : 0;
  const fullyComplete = stats.filter((s) => s.progressPct === 100).length;

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bp-card text-center">
          <p className="text-4xl font-bold text-[var(--bp-accent)]">{totalInstitutions}</p>
          <p className="bp-muted mt-1">Total Institutions</p>
        </div>
        <div className="bp-card text-center">
          <p className="text-4xl font-bold text-[var(--bp-accent)]">{avgProgress}%</p>
          <p className="bp-muted mt-1">Avg. Blueprint Progress</p>
        </div>
        <div className="bp-card text-center">
          <p className="text-4xl font-bold text-[var(--bp-accent)]">{fullyComplete}</p>
          <p className="bp-muted mt-1">Fully Complete</p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-3 mb-8">
        {["all", "church", "nonprofit", "business"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition
              ${filter === f
                ? "bg-[var(--bp-accent)] text-[var(--bp-bg)]"
                : "bg-[var(--bp-surface)] text-[var(--bp-text-muted)] hover:text-white"
              }`}
          >
            {f === "all" ? "All" : TYPE_LABELS[f]}
          </button>
        ))}
      </div>

      {/* Institution Table */}
      <div className="overflow-x-auto rounded-lg border border-[var(--bp-border)]">
        <table className="w-full text-sm">
          <thead className="bg-[var(--bp-surface)] text-[var(--bp-text-muted)]">
            <tr>
              <th className="px-4 py-3 text-left">Institution</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Size</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Progress</th>
              <th className="px-4 py-3 text-left">Joined</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-[var(--bp-text-muted)]">
                  No institutions found.
                </td>
              </tr>
            )}
            {filtered.map((s) => (
              <tr key={s.id} className="border-t border-[var(--bp-border)] hover:bg-[var(--bp-surface)] transition">
                <td className="px-4 py-3 font-medium">{s.name ?? "—"}</td>
                <td className="px-4 py-3">{TYPE_LABELS[s.type ?? ""] ?? s.type ?? "—"}</td>
                <td className="px-4 py-3 capitalize">{s.size ?? "—"}</td>
                <td className="px-4 py-3 capitalize">{s.role ?? "—"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[var(--bp-border)] rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-[var(--bp-accent)]"
                        style={{ width: `${s.progressPct}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--bp-text-muted)]">{s.progressPct}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[var(--bp-text-muted)]">
                  {new Date(s.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={`/blueprints/admin/institution/${s.id}`}
                    className="text-[var(--bp-accent)] hover:underline text-xs"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
