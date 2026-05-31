import BlueprintsLayout from "@/components/blueprints/Layout";
import JournalHistoryClient from "@/components/blueprints/reflect/JournalHistoryClient";
import Link from "next/link";

export default function JournalHistoryPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/blueprints/reflect" className="text-[var(--bp-text-muted)] hover:text-white text-sm">
            ← Back to Reflection
          </Link>
          <Link href="/blueprints/reflect/journal" className="bp-btn text-sm py-2 px-4">
            + New Entry
          </Link>
        </div>
        <h1 className="bp-h1 mb-3">Journal Archive</h1>
        <p className="bp-muted mb-10">All journal entries from your institution&apos;s journey.</p>
        <JournalHistoryClient />
      </div>
    </BlueprintsLayout>
  );
}
