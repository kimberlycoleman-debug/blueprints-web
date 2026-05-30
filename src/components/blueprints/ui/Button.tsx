import React from "react";

interface BPButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function BPButton({ children, ...props }: BPButtonProps) {
  return (
    <button className="bp-btn" {...props}>
      {children}
    </button>
  );
}
