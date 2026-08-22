import type { Metadata, Viewport } from "next";
import {
  Barlow_Condensed,
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";
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

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "La Marquise Restaurant | Douala",
  description:
    "Découvrez La Marquise Restaurant à Bonapriso, Douala. Cuisine, élégance et moments à partager.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} ${barlowCondensed.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 border border-[var(--brand)] bg-[var(--background)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] transition-transform duration-200 focus:translate-y-0"
        >
          Aller au contenu principal
        </a>

        {children}
      </body>
    </html>
  );
}
