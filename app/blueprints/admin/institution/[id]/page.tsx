import BlueprintsLayout from "@/components/blueprints/Layout";
import { getFacilitatorData } from "@/app/blueprints/actions/admin";
import Link from "next/link";

const PHASE_TITLES: Record<number, string> = {
  1: "Identity", 2: "Governance", 3: "Formation", 4: "Witness",
  5: "Culture", 6: "Communication", 7: "Finances", 8: "Operations",
  9: "People", 10: "Strategy", 11: "Partnerships", 12: "Discipleship",
  13: "Prayer", 14: "Legacy", 15: "Justice", 16: "Health",
  17: "Innovation", 18: "Education", 19: "Worship", 20: "Completion",
};

export default async function InstitutionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { institution, progress } = await getFacilitatorData(id);

  if (!institution) {
    return (
      <BlueprintsLayout>
        <div className="text-center py-20">
          <h1 className="bp-h1 mb-4">Institution Not Found</h1>
          <Link href="/blueprints/admin" className="text-[var(--bp-accent)] hover:underline">
            ← Back to Admin
          </Link>
        </div>
      </BlueprintsLayout>
    );
  }

  const completedCount = progress.filter((p) => p.completed).length;
  const pct = Math.round((completedCount / 20) * 100);

  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <Link href="/blueprints/admin" className="text-[var(--bp-text-muted)] hover:text-white text-sm mb-8 inline-block">
          ← Back to Admin
        </Link>

        <h1 className="bp-h1 mb-2">{institution.name ?? "Unnamed Institution"}</h1>
        <div className="flex gap-4 mb-10 text-sm text-[var(--bp-text-muted)]">
          <span className="capitalize">{institution.type}</span>
          <span>·</span>
          <span className="capitalize">{institution.size}</span>
          <span>·</span>
          <span className="capitalize">{institution.role}</span>
          <span>·</span>
          <span>Joined {new Date(institution.created_at).toLocaleDateString()}</span>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[var(--bp-text-muted)]">Blueprint Progress</span>
            <span className="font-semibold text-[var(--bp-accent)]">{pct}% ({completedCount}/20)</span>
          </div>
          <div className="w-full bg-[var(--bp-border)] rounded-full h-3">
            <div
              className="h-3 rounded-full bg-[var(--bp-accent)] transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Phase breakdown */}
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((phase) => {
            const row = progress.find((p) => p.phase === phase);
            const done = row?.completed ?? false;
            return (
              <div
                key={phase}
                className={`bp-card flex items-center gap-4 border ${
                  done ? "border-[var(--bp-accent)]" : "border-[var(--bp-border)]"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  done ? "bg-[var(--bp-accent)] text-[var(--bp-bg)]" : "bg-[var(--bp-border)] text-[var(--bp-text-muted)]"
                }`}>
                  {done ? "✓" : phase}
                </div>
                <div>
                  <p className="text-sm font-semibold">Phase {phase}: {PHASE_TITLES[phase]}</p>
                  {row?.updated_at && (
                    <p className="text-xs text-[var(--bp-text-muted)] mt-0.5">
                      {done ? "Completed" : "In progress"} · {new Date(row.updated_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BlueprintsLayout>
  );
}
