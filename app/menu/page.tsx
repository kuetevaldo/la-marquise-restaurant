import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MenuHero from "@/components/menu/MenuHero";
import MenuSwitcher from "@/components/menu/MenuSwitcher";
import MenuCTA from "@/components/menu/MenuCTA";

export const metadata: Metadata = {
  title: "La Carte | La Marquise Restaurant Douala",
  description:
    "Découvrez les menus de La Marquise Restaurant et La Marquise Fast Food à Bonapriso, Douala : cuisine internationale, spécialités orientales, grillades, burgers, pizzas, desserts, cocktails et vins.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-x-hidden bg-[#0b0b0a]">
        <MenuHero />
        <MenuSwitcher />
        <MenuCTA />
      </main>

      <Footer />
    </>
  );
}