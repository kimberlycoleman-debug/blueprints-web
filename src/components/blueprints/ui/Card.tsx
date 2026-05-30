export function BPCard({ title, children }: any) {
  return (
    <div className="bp-card">
      <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--bp-text)" }}>{title}</h2>
      <div className="bp-muted">{children}</div>
    </div>
  );
}
