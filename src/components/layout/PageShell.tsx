import type { PropsWithChildren } from "react";

interface PageShellProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-2 text-zinc-600">{subtitle}</p> : null}
      </header>
      {children}
    </main>
  );
}
