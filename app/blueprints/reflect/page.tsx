"use client";

import { useRouter } from "next/navigation";
import BlueprintsLayout from "@/components/blueprints/Layout";

const CARDS = [
  { href: "/blueprints/reflect/checkin", icon: "📋", title: "Weekly Check-In", body: "Answer five guided prompts to document your week and keep momentum." },
  { href: "/blueprints/reflect/journal", icon: "📓", title: "Journal", body: "Write freely — reflections, prayers, decisions, or anything on your heart." },
  { href: "/blueprints/reflect/history", icon: "📈", title: "Reflection History", body: "Review all your weekly check-ins and trace your institution\u2019s longitudinal growth." },
  { href: "/blueprints/reflect/journal/history", icon: "🗂️", title: "Journal Archive", body: "Browse all journal entries and search your institutional narrative." },
];

export default function ReflectHomePage() {
  const router = useRouter();

  return (
    <BlueprintsLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="bp-h1 mb-3">Reflection Engine</h1>
        <p className="bp-muted mb-12">
          A curriculum-free space for your institution to check in, reflect, and track growth over time.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {CARDS.map((c) => (
            <button
              key={c.href}
              onClick={() => router.push(c.href)}
              className="bp-card text-left w-full cursor-pointer hover:border-[var(--bp-accent)] border border-[var(--bp-border)] transition"
            >
              <p className="text-2xl mb-3">{c.icon}</p>
              <h2 className="text-lg font-bold mb-2">{c.title}</h2>
              <p className="bp-muted text-sm">{c.body}</p>
            </button>
          ))}
        </div>
      </div>
    </BlueprintsLayout>
  );
}
