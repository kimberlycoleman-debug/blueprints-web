import "@/styles/blueprints.css";

export default function BlueprintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bp-bg)]">
      <header className="w-full border-b border-black/5 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/blueprints-icon.png" alt="Blueprints Icon" className="h-8 w-8" />
            <span className="font-semibold text-[var(--bp-text)] tracking-tight">
              Blueprints Foundation App
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

      <footer className="w-full border-t border-black/5 bg-white py-4">
        <div className="max-w-5xl mx-auto px-6 text-sm text-[var(--bp-text-muted)]">
          © {new Date().getFullYear()} Solavian — Blueprints Foundation App
        </div>
      </footer>
    </div>
  );
}
