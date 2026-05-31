import BlueprintsLayout from "@/components/blueprints/Layout";
import DashboardClient from "@/components/blueprints/dashboard/DashboardClient";
import "@/styles/blueprints.css";

export default function DashboardPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="bp-h1 mb-4">Blueprints Dashboard</h1>
          <p className="bp-muted max-w-xl mx-auto">
            Track your institution&apos;s Blueprint progress across all phases.
          </p>
        </div>
        <DashboardClient />
      </div>
    </BlueprintsLayout>
  );
}
