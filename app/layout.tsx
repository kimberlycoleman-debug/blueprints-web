import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blueprints Foundation",
  description: "A guided transformation system for individuals, families, and institutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
