"use client";

import { signOut } from "@/app/blueprints/actions/auth";
import { useTransition } from "react";

export default function SignOutButton() {
  const [pending, start] = useTransition();

  return (
    <button
      onClick={() => start(() => signOut())}
      disabled={pending}
      className="text-sm text-[var(--bp-text-muted)] hover:text-white transition-colors"
    >
      {pending ? "..." : "Sign Out"}
    </button>
  );
}
