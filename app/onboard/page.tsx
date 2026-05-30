"use client";

import { useState } from "react";
import { osPost } from "@/src/api/client";

export default function OnboardPage() {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      const res = await osPost("/institution/onboard", {
        name,
        contactEmail,
      });

      if (res?.redirect) {
        setStatus("Success! Redirecting...");
        window.location.href = res.redirect;
      } else {
        setStatus("Onboarding submitted. Awaiting next steps.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error submitting onboarding. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold">Institution Onboarding</h1>
        <p className="mt-3 text-gray-600">
          Share a few details about your institution to begin your Blueprints journey.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution Name
            </label>
            <input
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              placeholder="Example: South Holland Community Center"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Primary Contact Email
            </label>
            <input
              type="email"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
              placeholder="you@example.org"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Onboarding"}
          </button>

          {status && (
            <p className="mt-3 text-sm text-gray-600" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
