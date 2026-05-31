"use client";

import type { ButtonHTMLAttributes } from "react";

export function BPButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bp-btn"
    >
      {children}
    </button>
  );
}
