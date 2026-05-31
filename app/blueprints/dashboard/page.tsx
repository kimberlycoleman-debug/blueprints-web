import BlueprintsLayout from "@/components/blueprints/Layout";
import "@/styles/blueprints.css";

export default function DashboardPage() {
  return (
    <BlueprintsLayout>
      <h1 className="bp-h1 mb-4">Blueprints Dashboard</h1>
      <p className="bp-muted max-w-xl">
        Your institution&apos;s Blueprint progress will appear here.
      </p>
    </BlueprintsLayout>
  );
}
