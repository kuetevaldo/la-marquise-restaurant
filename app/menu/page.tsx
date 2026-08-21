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

      <main
        id="main-content"
        tabIndex={-1}
        className="site-main-shell w-full overflow-x-clip bg-[var(--background)]"
      >
        <MenuHero />
        <MenuSwitcher />
        <MenuCTA />
      </main>

      <Footer />
    </>
  );
}
