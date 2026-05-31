import BlueprintsLayout from "@/components/blueprints/Layout";
import AuthForm from "@/components/blueprints/auth/AuthForm";
import "@/styles/blueprints.css";

export default function SignupPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="bp-h1 mb-2">Create Account</h1>
          <p className="bp-muted">Start your institution&apos;s Blueprint journey.</p>
        </div>
        <div className="bp-card">
          <AuthForm mode="signup" />
        </div>
      </div>
    </BlueprintsLayout>
  );
}
