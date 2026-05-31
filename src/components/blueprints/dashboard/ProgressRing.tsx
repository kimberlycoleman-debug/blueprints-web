"use client";

import { useMemo } from "react";

export default function ProgressRing({ value }: { value: number }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  const offset = useMemo(() => {
    return circumference - (value / 100) * circumference;
  }, [value, circumference]);

  return (
    <svg width="100" height="100" className="mx-auto block">
      <circle
        stroke="var(--bp-border)"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        stroke="var(--bp-accent)"
        fill="transparent"
        strokeWidth="10"
        strokeLinecap="round"
        r={radius}
        cx="50"
        cy="50"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-500"
      />
    </svg>
  );
}
