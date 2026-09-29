import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Étape Zero — Composants",
  description: "La bibliothèque de composants du site Étape Zero.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg?v=eye",
    shortcut: "/favicon.svg?v=eye",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
