import BlueprintsLayout from "@/components/blueprints/Layout";
import JournalEntryForm from "@/components/blueprints/reflect/JournalEntryForm";
import Link from "next/link";

export default function JournalPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/blueprints/reflect" className="text-[var(--bp-text-muted)] hover:text-white text-sm">
            ← Back to Reflection
          </Link>
          <Link href="/blueprints/reflect/journal/history" className="text-[var(--bp-accent)] text-sm hover:underline">
            View Archive →
          </Link>
        </div>
        <h1 className="bp-h1 mb-3">Journal</h1>
        <p className="bp-muted mb-10">
          Write freely. No prompts, no structure — just space to process, pray, and document.
        </p>
        <JournalEntryForm />
      </div>
    </BlueprintsLayout>
  );
}
