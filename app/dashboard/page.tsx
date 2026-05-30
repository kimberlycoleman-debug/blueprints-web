import { getSession } from "@/src/auth/session";
import { osGet } from "@/src/api/client";

export default async function DashboardPage() {
  const token = await getSession();

  if (!token) {
    return (
      <main className="min-h-screen px-6 py-12">
        <div className="mx-auto max-w-xl">
          <h1 className="text-2xl font-bold">Not authenticated</h1>
          <p className="mt-3 text-gray-600">
            You don&apos;t appear to be signed in. Use your institution&apos;s Blueprints link or sign in through the Solavian OS.
          </p>
        </div>
      </main>
    );
  }

  let profile: { name?: string } | null = null;
  try {
    profile = (await osGet("/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })) as { name?: string } | null;
  } catch (err) {
    console.error(err);
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">
          {profile?.name ? `Welcome, ${profile.name}` : "Blueprints Dashboard"}
        </h1>
        <p className="mt-3 text-gray-600">
          This is your starting point for Blueprints cohorts, reflections, and facilitator workspaces.
        </p>
      </div>
    </main>
  );
}
