import BlueprintsLayout from "@/components/blueprints/Layout";
import CreateCohortForm from "@/components/blueprints/cohorts/CreateCohortForm";
import { getCohorts } from "@/app/blueprints/actions/cohorts";
import Link from "next/link";

export default async function CohortsPage() {
  const { cohorts, error } = await getCohorts();

  return (
    <BlueprintsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="bp-h1 mb-3">Cohorts</h1>
        <p className="bp-muted mb-12">
          Group institutions into cohorts and assign facilitators for guided Blueprint journeys.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <CreateCohortForm />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-6">Active Cohorts</h2>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {!error && cohorts.length === 0 && (
              <p className="bp-muted">No cohorts yet. Create one to get started.</p>
            )}
            <div className="space-y-4">
              {cohorts.map((c) => (
                <Link
                  key={c.id}
                  href={`/blueprints/cohorts/${c.id}`}
                  className="block bp-card hover:border-[var(--bp-accent)] border border-[var(--bp-border)] transition"
                >
                  <p className="font-semibold">{c.name}</p>
                  {c.facilitator_email && (
                    <p className="text-xs text-[var(--bp-text-muted)] mt-1">
                      Facilitator: {c.facilitator_email}
                    </p>
                  )}
                  <p className="text-xs text-[var(--bp-text-muted)] mt-1">
                    Created {new Date(c.created_at).toLocaleDateString()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BlueprintsLayout>
  );
}
