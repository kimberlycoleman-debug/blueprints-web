export function BPCard({ title, children }: any) {
  return (
    <div className="bg-white border border-black/5 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[var(--bp-text)] mb-2">{title}</h2>
      <div className="bp-muted">{children}</div>
    </div>
  );
}
