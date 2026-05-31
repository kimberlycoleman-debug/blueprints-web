"use client";

import { useEffect, useState, useTransition } from "react";
import { syncBlueprintsToOS, getOSIdentityProfile } from "@/app/blueprints/actions/os-sync";

type Event = { event_type: string; payload: Record<string, unknown>; emitted_at: string };
type Snapshot = { formation_pct: number; completed_phases: number; reflection_count: number; journal_count: number; captured_at: string };

const EVENT_LABELS: Record<string, string> = {
  institution_created: "Institution Created",
  phase_completed: "Phase Completed",
  reflection_submitted: "Reflection Submitted",
  journal_entry_saved: "Journal Entry Saved",
  cohort_joined: "Joined Cohort",
  blueprint_complete: "Blueprint Complete",
};

export default function OSSyncClient() {
  const [institutionId, setInstitutionId] = useState<string | null>(null);
  const [profile, setProfile] = useState<{ recentEvents: Event[]; formationHistory: Snapshot[] } | null>(null);
  const [syncing, startSync] = useTransition();
  const [syncMsg, setSyncMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("bp_institution_id");
    setInstitutionId(id);
    if (!id) { setLoading(false); return; }
    getOSIdentityProfile(id).then((p) => {
      setProfile(p);
      setLoading(false);
    });
  }, []);

  function handleSync() {
    if (!institutionId) return;
    startSync(async () => {
      setSyncMsg(null);
      const result = await syncBlueprintsToOS(institutionId);
      if (result.error) setSyncMsg(`Error: ${result.error}`);
      else {
        setSyncMsg("Sync complete — formation snapshot captured.");
        // Refresh profile
        getOSIdentityProfile(institutionId).then(setProfile);
      }
    });
  }

  if (loading) return <p className="bp-muted">Loading OS profile...</p>;

  if (!institutionId) {
    return (
      <div className="bp-card border border-[var(--bp-border)]">
        <p className="bp-muted">No institution linked. Complete onboarding first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">

      {/* Sync Button */}
      <div className="bp-card flex items-center justify-between border border-[var(--bp-border)]">
        <div>
          <h2 className="font-semibold text-lg">Solavian OS Sync</h2>
          <p className="text-sm text-[var(--bp-text-muted)] mt-1">
            Push your current formation state into the OS identity and formation engine.
          </p>
          {syncMsg && <p className={`text-sm mt-2 ${syncMsg.startsWith("Error") ? "text-red-400" : "text-[var(--bp-accent)]"}`}>{syncMsg}</p>}
        </div>
        <button onClick={handleSync} disabled={syncing} className="bp-btn shrink-0 ml-6">
          {syncing ? "Syncing..." : "Sync to OS"}
        </button>
      </div>

      {/* Formation History */}
      {profile && profile.formationHistory.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Formation Snapshots</h2>
          <div className="overflow-x-auto rounded-lg border border-[var(--bp-border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--bp-surface)] text-[var(--bp-text-muted)]">
                <tr>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Formation %</th>
                  <th className="px-4 py-3 text-left">Phases</th>
                  <th className="px-4 py-3 text-left">Reflections</th>
                  <th className="px-4 py-3 text-left">Journal</th>
                </tr>
              </thead>
              <tbody>
                {profile.formationHistory.map((s, i) => (
                  <tr key={i} className="border-t border-[var(--bp-border)]">
                    <td className="px-4 py-3 text-[var(--bp-text-muted)]">
                      {new Date(s.captured_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-[var(--bp-border)] rounded-full h-2">
                          <div className="h-2 rounded-full bg-[var(--bp-accent)]" style={{ width: `${s.formation_pct}%` }} />
                        </div>
                        <span className="text-xs">{s.formation_pct}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{s.completed_phases}/20</td>
                    <td className="px-4 py-3">{s.reflection_count}</td>
                    <td className="px-4 py-3">{s.journal_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Recent Events */}
      {profile && profile.recentEvents.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">OS Identity Event Log</h2>
          <div className="space-y-3">
            {profile.recentEvents.map((e, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-[var(--bp-border)]">
                <div className="w-2 h-2 rounded-full bg-[var(--bp-accent)] shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{EVENT_LABELS[e.event_type] ?? e.event_type}</p>
                  {Object.keys(e.payload ?? {}).length > 0 && (
                    <p className="text-xs text-[var(--bp-text-muted)] mt-0.5">
                      {JSON.stringify(e.payload)}
                    </p>
                  )}
                </div>
                <p className="text-xs text-[var(--bp-text-muted)]">
                  {new Date(e.emitted_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {profile && profile.recentEvents.length === 0 && profile.formationHistory.length === 0 && (
        <p className="bp-muted">No OS events yet. Sync to capture your first formation snapshot.</p>
      )}
    </div>
  );
}
