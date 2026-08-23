import type { Metadata } from "next";

import FastFoodNavbar from "@/components/fast-food/FastFoodNavbar";
import FastFoodHero from "@/components/fast-food/FastFoodHero";
import FastFoodUniverse from "@/components/fast-food/FastFoodUniverse";
import FastFoodHighlights from "@/components/fast-food/FastFoodHighlights";
import FastFoodCounterSection from "@/components/fast-food/FastFoodCounterSection";
import FastFoodOrderSection from "@/components/fast-food/FastFoodOrderSection";
import FastFoodLocation from "@/components/fast-food/FastFoodLocation";
import FastFoodFooter from "@/components/fast-food/FastFoodFooter";

import ExperienceMenu from "@/components/menu/ExperienceMenu";
import {
  fastFoodMenu,
} from "@/components/menu/MenuData";

export const metadata: Metadata = {
  title:
    "La Marquise Fast Food | Bonapriso, Douala",
  description:
    "Burgers, pizzas, fried chicken, desserts et boissons à La Marquise Fast Food à Bonapriso, Douala. Commandez directement sur WhatsApp.",
  openGraph: {
    title:
      "La Marquise Fast Food | Douala",
    description:
      "Du goût. Sans attendre. Découvrez le menu La Marquise Fast Food à Bonapriso et commandez directement sur WhatsApp.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function FastFoodPage() {
  return (
    <div className="fastfood-theme">
      <FastFoodNavbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="site-main-shell w-full overflow-x-clip bg-(--fastfood-deep)"
      >
        <FastFoodHero />

        {/* Visual Fast Food universe */}
        <FastFoodUniverse />

        {/* Signature products */}
        <FastFoodHighlights />

        {/* Real Fast Food counter */}
        <FastFoodCounterSection />

        {/* Full digital menu */}
        <ExperienceMenu
          groups={fastFoodMenu}
          theme="fastfood"
        />

        {/* WhatsApp order section */}
        <FastFoodOrderSection />

        {/* Location */}
        <FastFoodLocation />
      </main>

      <FastFoodFooter />
    </div>
  );
}