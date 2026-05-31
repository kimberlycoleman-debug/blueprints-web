import BlueprintsLayout from "@/components/blueprints/Layout";
import { getCohortDetail } from "@/app/blueprints/actions/cohorts";
import Link from "next/link";

const TYPE_LABELS: Record<string, string> = {
  church: "Church", nonprofit: "Nonprofit", business: "Business",
};

export default async function CohortDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { cohort, members } = await getCohortDetail(id);

  if (!cohort) {
    return (
      <BlueprintsLayout>
        <div className="text-center py-20">
          <h1 className="bp-h1 mb-4">Cohort Not Found</h1>
          <Link href="/blueprints/cohorts" className="text-[var(--bp-accent)] hover:underline">
            ← Back to Cohorts
          </Link>
        </div>
      </BlueprintsLayout>
    );
  }

  const avgProgress = members.length
    ? Math.round(members.reduce((a, m) => a + m.progressPct, 0) / members.length)
    : 0;

  return (
    <BlueprintsLayout>
      <div className="max-w-4xl mx-auto">
        <Link href="/blueprints/cohorts" className="text-[var(--bp-text-muted)] hover:text-white text-sm mb-8 inline-block">
          ← Back to Cohorts
        </Link>

        <h1 className="bp-h1 mb-2">{cohort.name}</h1>
        {cohort.facilitator_email && (
          <p className="bp-muted mb-10">
            Facilitator: <span className="text-[var(--bp-text)]">{cohort.facilitator_email}</span>
          </p>
        )}

        {/* Cohort Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bp-card text-center">
            <p className="text-4xl font-bold text-[var(--bp-accent)]">{members.length}</p>
            <p className="bp-muted mt-1">Members</p>
          </div>
          <div className="bp-card text-center">
            <p className="text-4xl font-bold text-[var(--bp-accent)]">{avgProgress}%</p>
            <p className="bp-muted mt-1">Avg. Progress</p>
          </div>
          <div className="bp-card text-center">
            <p className="text-4xl font-bold text-[var(--bp-accent)]">
              {members.filter((m) => m.progressPct === 100).length}
            </p>
            <p className="bp-muted mt-1">Complete</p>
          </div>
        </div>

        {/* Members */}
        <h2 className="text-lg font-semibold mb-4">Member Institutions</h2>
        {members.length === 0 ? (
          <p className="bp-muted">No institutions in this cohort yet.</p>
        ) : (
          <div className="space-y-4">
            {members.map((m) => (
              <div key={m.institution_id} className="bp-card flex items-center gap-6">
                <div className="flex-1">
                  <p className="font-semibold">{m.name ?? "Unnamed"}</p>
                  <p className="text-xs text-[var(--bp-text-muted)] mt-0.5">
                    {TYPE_LABELS[m.type ?? ""] ?? m.type} · {m.role}
                  </p>
                </div>
                <div className="flex items-center gap-3 w-48">
                  <div className="flex-1 bg-[var(--bp-border)] rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-[var(--bp-accent)]"
                      style={{ width: `${m.progressPct}%` }}
                    />
                  </div>
                  <span className="text-xs text-[var(--bp-text-muted)] w-8 text-right">{m.progressPct}%</span>
                </div>
                <Link
                  href={`/blueprints/admin/institution/${m.institution_id}`}
                  className="text-[var(--bp-accent)] text-xs hover:underline"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </BlueprintsLayout>
  );
}
