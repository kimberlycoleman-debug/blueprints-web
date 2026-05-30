import "@/styles/blueprints.css";

export default function BlueprintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bp-bg)] text-[var(--bp-text)]">
      {/* 🔷 Banner Section */}
      <section className="relative w-full border-b border-[var(--bp-border)] bg-[var(--bp-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/blueprints-banner.png" alt="Blueprints Banner" className="h-10 w-auto" />
            <span className="font-semibold tracking-tight text-[var(--bp-text)]">
              Blueprints Foundation App
            </span>
          </div>
        </div>
      </section>

      {/* 🔷 Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

      {/* 🔷 Outro Screen */}
      <section className="w-full border-t border-[var(--bp-border)] bg-[var(--bp-surface)] py-10 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <img src="/blueprints-outro.png" alt="Blueprints Outro Screen" className="mx-auto mb-6 w-64" />
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
