"use client";

import type { ButtonHTMLAttributes } from "react";

export function StepButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bp-btn w-full text-center py-3 text-base font-semibold"
    >
      {children}
    </button>
  );
}
