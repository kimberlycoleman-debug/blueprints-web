import type { ReactNode } from "react";

export function PhaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bp-card mb-10">
      <h2 className="text-xl font-semibold text-[var(--bp-text)] mb-3">
        {title}
      </h2>
      <div className="bp-muted">{children}</div>
    </div>
  );
}
