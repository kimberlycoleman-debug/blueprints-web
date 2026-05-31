import BlueprintsLayout from "@/components/blueprints/Layout";
import ReflectionForm from "@/components/blueprints/reflect/ReflectionForm";
import Link from "next/link";

export default function CheckInPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <Link href="/blueprints/reflect" className="text-[var(--bp-text-muted)] hover:text-white text-sm mb-8 inline-block">
          ← Back to Reflection
        </Link>
        <h1 className="bp-h1 mb-3">Weekly Check-In</h1>
        <p className="bp-muted mb-10">
          Take 5–10 minutes to answer each prompt honestly. These reflections build your institution&apos;s longitudinal story.
        </p>
        <ReflectionForm />
      </div>
    </BlueprintsLayout>
  );
}
