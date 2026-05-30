import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
