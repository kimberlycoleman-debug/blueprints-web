import BlueprintsLayout from "@/components/blueprints/Layout";
import AuthForm from "@/components/blueprints/auth/AuthForm";
import "@/styles/blueprints.css";

export default function LoginPage() {
  return (
    <BlueprintsLayout>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="bp-h1 mb-2">Sign In</h1>
          <p className="bp-muted">Access your Blueprint dashboard.</p>
        </div>
        <div className="bp-card">
          <AuthForm mode="login" />
        </div>
      </div>
    </BlueprintsLayout>
  );
}
