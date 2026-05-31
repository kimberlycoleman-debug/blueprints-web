"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/app/blueprints/actions/auth";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = mode === "login"
      ? await signIn(formData)
      : await signUp(formData);

    if (result?.error) {
      setError(result.error);
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-[var(--bp-text-muted)] mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-[var(--bp-surface)] border border-[var(--bp-border)] text-[var(--bp-text)] focus:outline-none focus:border-[var(--bp-accent)]"
        />
      </div>
      <div>
        <label className="block text-sm text-[var(--bp-text-muted)] mb-1">Password</label>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          className="w-full px-4 py-3 rounded-lg bg-[var(--bp-surface)] border border-[var(--bp-border)] text-[var(--bp-text)] focus:outline-none focus:border-[var(--bp-accent)]"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bp-btn w-full py-3 text-base font-semibold"
      >
        {pending
          ? "Please wait..."
          : mode === "login" ? "Sign In" : "Create Account"}
      </button>

      <p className="text-sm text-center text-[var(--bp-text-muted)]">
        {mode === "login" ? (
          <>Don&apos;t have an account?{" "}
            <button type="button" onClick={() => router.push("/blueprints/signup")} className="text-[var(--bp-accent)] hover:underline">Sign up</button>
          </>
        ) : (
          <>Already have an account?{" "}
            <button type="button" onClick={() => router.push("/blueprints/login")} className="text-[var(--bp-accent)] hover:underline">Sign in</button>
          </>
        )}
      </p>
    </form>
  );
}
