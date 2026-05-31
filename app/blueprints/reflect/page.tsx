import BlueprintsLayout from "@/components/blueprints/Layout";
import Link from "next/link";

export default function ReflectHomePage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="bp-h1 mb-3">Reflection Engine</h1>
        <p className="bp-muted mb-12">
          A curriculum-free space for your institution to check in, reflect, and track growth over time.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blueprints/reflect/checkin" className="bp-card border border-[var(--bp-border)] hover:border-[var(--bp-accent)] transition block">
            <p className="text-2xl mb-3">📋</p>
            <h2 className="text-lg font-bold mb-2">Weekly Check-In</h2>
            <p className="bp-muted text-sm">Answer five guided prompts to document your week and keep momentum.</p>
          </Link>

          <Link href="/blueprints/reflect/journal" className="bp-card border border-[var(--bp-border)] hover:border-[var(--bp-accent)] transition block">
            <p className="text-2xl mb-3">📓</p>
            <h2 className="text-lg font-bold mb-2">Journal</h2>
            <p className="bp-muted text-sm">Write freely — reflections, prayers, decisions, or anything on your heart.</p>
          </Link>

          <Link href="/blueprints/reflect/history" className="bp-card border border-[var(--bp-border)] hover:border-[var(--bp-accent)] transition block">
            <p className="text-2xl mb-3">📈</p>
            <h2 className="text-lg font-bold mb-2">Reflection History</h2>
            <p className="bp-muted text-sm">Review all your weekly check-ins and trace your institution&apos;s longitudinal growth.</p>
          </Link>

          <Link href="/blueprints/reflect/journal/history" className="bp-card border border-[var(--bp-border)] hover:border-[var(--bp-accent)] transition block">
            <p className="text-2xl mb-3">🗂️</p>
            <h2 className="text-lg font-bold mb-2">Journal Archive</h2>
            <p className="bp-muted text-sm">Browse all journal entries and search your institutional narrative.</p>
          </Link>
        </div>
      </div>
    </BlueprintsLayout>
  );
}
