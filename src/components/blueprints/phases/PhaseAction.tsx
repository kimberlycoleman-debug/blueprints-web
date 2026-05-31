"use client";

import type { ButtonHTMLAttributes } from "react";

export function PhaseAction({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bp-btn w-full py-3 text-base font-semibold mt-6"
    >
      {children}
    </button>
  );
}
