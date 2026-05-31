import type { ReactNode } from "react";

export function PhaseCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="bp-card flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-semibold text-[var(--bp-text)]">
          {title}
        </h3>
        <p className="bp-muted text-sm mt-1">{description}</p>
      </div>
      {children}
    </div>
  );
}
