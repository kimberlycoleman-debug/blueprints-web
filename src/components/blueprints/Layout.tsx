import "@/styles/blueprints.css";

export default function BlueprintsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <img
          src="/blueprints-icon.png"
          alt="Blueprints Icon"
          style={{ width: "2rem", height: "2rem" }}
        />
        <span className="bp-eyebrow">Blueprints Foundation App</span>
      </header>

      {children}

      <footer
        style={{
          marginTop: "auto",
          padding: "1.5rem 2rem",
          textAlign: "center",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <p className="bp-muted" style={{ fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Solavian — Blueprints Foundation App
        </p>
      </footer>
    </div>
  );
}
