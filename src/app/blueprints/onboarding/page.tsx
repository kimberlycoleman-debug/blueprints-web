import BlueprintsLayout from "@/components/blueprints/Layout";
import "@/styles/blueprints.css";

export default function OnboardingPage() {
  return (
    <BlueprintsLayout>
      <h1 className="bp-h1 mb-4">Institution Onboarding</h1>
      <p className="bp-muted max-w-xl">
        This is where institutions begin their Blueprint journey.
      </p>
    </BlueprintsLayout>
  );
}
