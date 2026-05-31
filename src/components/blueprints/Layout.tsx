import Link from "next/link";
import type { ReactNode } from "react";
import FallbackImage from "@/components/blueprints/ui/FallbackImage";
import "@/styles/blueprints.css";

export default function BlueprintsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bp-bg)] text-[var(--bp-text)]">

      {/* NAV */}
      <nav className="w-full border-b border-[var(--bp-border)] bg-[var(--bp-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FallbackImage
              src="/blueprints-banner.png"
              className="h-10 w-auto max-w-[180px] object-contain bp-banner-glow"
            />
            <span className="font-semibold tracking-tight text-[var(--bp-text)]">
              Blueprints Foundation App
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[var(--bp-text-muted)] text-sm">
            <Link href="/blueprints" className="hover:text-white transition-colors">Home</Link>
            <Link href="/blueprints/onboarding" className="hover:text-white transition-colors">Onboarding</Link>
            <Link href="/blueprints/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {children}
      </main>

      {/* OUTRO */}
      <section className="w-full border-t border-[var(--bp-border)] bg-[var(--bp-surface)] py-16 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FallbackImage
            src="/blueprints-outro.png"
            className="mx-auto mb-8 w-[420px] bp-outro-glow"
          />
          <p className="text-sm text-[var(--bp-text-muted)]">
            Matthew 28:19–20 · Formation · Governance · Witness
          </p>
          <p className="text-xs text-[var(--bp-text-muted)] mt-2">
            © {new Date().getFullYear()} Solavian — Blueprints Foundation App
          </p>
        </div>
      </section>

    </div>
  );
}
