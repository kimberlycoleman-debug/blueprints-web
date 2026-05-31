"use client";

export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="w-full h-2 bg-[var(--bp-border)] rounded-full overflow-hidden mb-8">
      <div
        className="h-full bg-[var(--bp-accent)] transition-all duration-300"
        style={{ width: `${step}%` }}
      />
    </div>
  );
}
