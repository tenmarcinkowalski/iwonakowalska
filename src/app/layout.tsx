import type { Metadata } from "next";
import { cinzel, playfair } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iwona Kowalska | Terapia Żywieniowa wg Medycyny Chińskiej",
  description:
    "Holistyczne wsparcie kobiet poprzez odżywianie, rytm, sezonowość i równowagę energetyczną. Terapia żywieniowa według Tradycyjnej Medycyny Chińskiej (TCM).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${cinzel.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
