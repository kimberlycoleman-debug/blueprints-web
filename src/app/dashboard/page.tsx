import { getSession } from "@/auth/session";
import { osGet } from "@/api/client";

export default async function DashboardPage() {
  const token = await getSession();

  if (!token) {
    return <div className="p-12">Not authenticated.</div>;
  }

  const profile = (await osGet("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  })) as { name?: string };

  return (
    <main className="p-12">
      <h1 className="text-3xl font-bold">Welcome, {profile.name}</h1>
      <p className="mt-4 text-gray-600">Your Blueprints dashboard is ready.</p>
    </main>
  );
}
