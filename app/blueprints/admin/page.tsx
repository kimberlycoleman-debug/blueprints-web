import BlueprintsLayout from "@/components/blueprints/Layout";
import AdminDashboardClient from "@/components/blueprints/admin/AdminDashboardClient";
import { getAdminStats } from "@/app/blueprints/actions/admin";

export default async function AdminPage() {
  const result = await getAdminStats();

  return (
    <BlueprintsLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="bp-h1 mb-3">Admin Dashboard</h1>
        <p className="bp-muted mb-12">
          Institutional analytics and facilitator oversight across the Blueprints network.
        </p>

        {result.error ? (
          <p className="text-red-400">{result.error}</p>
        ) : (
          <AdminDashboardClient stats={result.stats ?? []} />
        )}
      </div>
    </BlueprintsLayout>
  );
}
