import type { ReactNode } from "react";

export function BPCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bp-card">
      <h2 className="text-lg font-semibold text-[var(--bp-text)] mb-2">
        {title}
      </h2>
      <div className="bp-muted">{children}</div>
    </div>
  );
}
