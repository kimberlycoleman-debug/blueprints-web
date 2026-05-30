import React from "react";

interface BPCardProps {
  title?: string;
  eyebrow?: string;
  children?: React.ReactNode;
}

export function BPCard({ title, eyebrow, children }: BPCardProps) {
  return (
    <div className="bp-card">
      {eyebrow && <p className="bp-eyebrow" style={{ marginBottom: "0.5rem" }}>{eyebrow}</p>}
      {title && <h2 className="bp-h2" style={{ marginBottom: "0.75rem" }}>{title}</h2>}
      {children}
    </div>
  );
}
