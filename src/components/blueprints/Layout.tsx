import Link from "next/link";
import "@/styles/blueprints.css";
import { FallbackImage } from "@/components/blueprints/ui/FallbackImage";

export default function BlueprintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bp-bg)] text-[var(--bp-text)]">

      {/* HERO BANNER — full-width background with nav overlay */}
      <header
        className="relative w-full"
        style={{
          backgroundImage: "url('/blueprints-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          minHeight: "380px",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        {/* Nav links pinned to top of hero */}
        <nav className="relative z-10 w-full border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-end gap-6 text-sm text-white/80">
            <Link href="/blueprints" className="hover:text-white transition-colors">Home</Link>
            <Link href="/blueprints/onboarding" className="hover:text-white transition-colors">Onboarding</Link>
            <Link href="/blueprints/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {children}
      </main>

      {/* OUTRO */}
      <section className="w-full border-t border-[var(--bp-border)] bg-[var(--bp-surface)] py-16 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FallbackImage src="/blueprints-outro.png" alt="" className="mx-auto mb-8 w-[420px] bp-outro-glow" />
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
