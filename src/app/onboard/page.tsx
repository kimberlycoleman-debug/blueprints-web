"use client";

import { useState } from "react";
import { osPost } from "@/api/client";

export default function OnboardPage() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  async function submit() {
    setStatus("Submitting...");
    try {
      const res = (await osPost("/institution/onboard", { name })) as {
        redirect?: string;
      };
      setStatus("Success! Redirecting...");
      if (res.redirect) {
        window.location.href = res.redirect;
      }
    } catch {
      setStatus("Error submitting.");
    }
  }

  return (
    <main className="p-12 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Institution Onboarding</h1>

      <input
        className="mt-6 w-full border p-3 rounded"
        placeholder="Institution Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={submit}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
      >
        Continue
      </button>

      <p className="mt-4 text-gray-500">{status}</p>
    </main>
  );
}
