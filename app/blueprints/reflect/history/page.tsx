import BlueprintsLayout from "@/components/blueprints/Layout";
import ReflectionHistoryClient from "@/components/blueprints/reflect/ReflectionHistoryClient";
import Link from "next/link";

export default function ReflectionHistoryPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/blueprints/reflect" className="text-[var(--bp-text-muted)] hover:text-white text-sm">
            ← Back to Reflection
          </Link>
          <Link href="/blueprints/reflect/checkin" className="bp-btn text-sm py-2 px-4">
            + New Check-In
          </Link>
        </div>
        <h1 className="bp-h1 mb-3">Reflection History</h1>
        <p className="bp-muted mb-10">Your institution&apos;s weekly check-ins — a longitudinal record of growth.</p>
        <ReflectionHistoryClient />
      </div>
    </BlueprintsLayout>
  );
}
