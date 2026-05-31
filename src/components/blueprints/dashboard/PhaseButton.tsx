"use client";

import type { ButtonHTMLAttributes } from "react";

export function PhaseButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bp-btn w-full py-2 text-sm font-semibold"
    >
      {children}
    </button>
  );
}
