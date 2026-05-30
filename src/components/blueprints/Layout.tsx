import "@/styles/blueprints.css";

export default function BlueprintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "radial-gradient(circle at top, #0f172a 0, #0b1120 55%, #000 100%)" }}>

      {/* Banner */}
      <header className="w-full" style={{ borderBottom: "1px solid var(--bp-border)", background: "var(--bp-surface)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <img src="/blueprints-banner.png" alt="Blueprints Banner" className="h-10 object-contain" />
          <span className="font-semibold tracking-tight" style={{ color: "var(--bp-text)" }}>
            Blueprints Foundation App
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

      {/* Outro */}
      <footer className="w-full" style={{ borderTop: "1px solid var(--bp-border)", background: "var(--bp-surface)" }}>
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <img src="/blueprints-outro.png" alt="Blueprints Outro" className="mx-auto mb-4 w-48 object-contain" />
          <p className="text-sm mb-1" style={{ color: "var(--bp-text-muted)" }}>
            Matthew 28:19–20 · Formation · Governance · Witness
          </p>
          <p className="text-sm" style={{ color: "var(--bp-text-muted)" }}>
            © {new Date().getFullYear()} Solavian — Blueprints Foundation App
          </p>
        </div>
      </footer>

    </div>
  );
}
