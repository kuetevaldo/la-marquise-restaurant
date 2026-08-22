import type { Metadata } from "next";

import FastFoodNavbar from "@/components/fast-food/FastFoodNavbar";
import FastFoodHero from "@/components/fast-food/FastFoodHero";
import FastFoodHighlights from "@/components/fast-food/FastFoodHighlights";
import FastFoodOrderSection from "@/components/fast-food/FastFoodOrderSection";
import FastFoodLocation from "@/components/fast-food/FastFoodLocation";
import FastFoodFooter from "@/components/fast-food/FastFoodFooter";
import FastFoodCounterSection from "@/components/fast-food/FastFoodCounterSection";

import ExperienceMenu from "@/components/menu/ExperienceMenu";
import {
  fastFoodMenu,
} from "@/components/menu/MenuData";

export const metadata: Metadata = {
  title: "La Marquise Fast Food | Bonapriso, Douala",
  description:
    "Burgers, pizzas, fried chicken, desserts et boissons à La Marquise Fast Food à Bonapriso, Douala. Commandez directement sur WhatsApp.",
  openGraph: {
    title: "La Marquise Fast Food | Douala",
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

        <section
          id="about"
          className="border-y border-(--fastfood-border) bg-(--fastfood) py-16 sm:py-20 md:py-24"
        >
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.25fr] lg:items-start">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-(--fastfood-gold-soft)">
                L’univers Fast Food
              </p>

              <p className="font-fastfood-display max-w-4xl text-4xl font-bold uppercase leading-[0.96] tracking-[-0.02em] text-(--fastfood-cream) sm:text-5xl md:text-6xl">
                Une carte généreuse,
                <span className="block text-(--fastfood-gold-soft)">
                  servie sans détour.
                </span>
              </p>
            </div>

            <div className="mt-10 grid border-t border-(--fastfood-border) sm:grid-cols-3">
              {["Burgers", "Pizzas", "Fried Chicken"].map(
                (category) => (
                  <p
                    key={category}
                    className="font-fastfood-display border-b border-(--fastfood-border) py-4 text-xl font-semibold uppercase tracking-[0.08em] text-(--fastfood-muted) sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                  >
                    {category}
                  </p>
                )
              )}
            </div>
          </div>
        </section>

        <FastFoodHighlights />
        <FastFoodCounterSection />

        <ExperienceMenu
          groups={fastFoodMenu}
          theme="fastfood"
        />

        <FastFoodOrderSection />

        <FastFoodLocation />
      </main>

      <FastFoodFooter />
    </div>
  );
}
