import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Marquise Restaurant | Douala",
  description:
    "Découvrez La Marquise Restaurant à Bonapriso, Douala. Cuisine, élégance et moments à partager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}