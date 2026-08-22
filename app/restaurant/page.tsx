import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import SignatureDishes from "@/components/home/SignatureDishes";
import Experience from "@/components/home/Experience";
import FamilySection from "@/components/home/FamilySection";
import EventsSection from "@/components/home/EventsSection";
import Gallery from "@/components/home/Gallery";
import LocationSection from "@/components/home/LocationSection";
import ReservationSection from "@/components/home/ReservationSection";

import ExperienceMenu from "@/components/menu/ExperienceMenu";
import {
  restaurantMenu,
} from "@/components/menu/MenuData";

export const metadata: Metadata = {
  title: "La Marquise Restaurant | Bonapriso, Douala",
  description:
    "Découvrez La Marquise Restaurant à Bonapriso, Douala : cuisine raffinée, bar, cave, événements et réservation directe.",
  openGraph: {
    title: "La Marquise Restaurant | Douala",
    description:
      "Cuisine, élégance et moments à partager au cœur de Bonapriso, Douala.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RestaurantPage() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="site-main-shell w-full overflow-x-clip"
      >
        <Hero />

        <Introduction />

        <SignatureDishes />

        <Experience />

        <FamilySection />

        <EventsSection />

        <ExperienceMenu
          groups={restaurantMenu}
          theme="restaurant"
        />

        <Gallery />

        <LocationSection />

        <ReservationSection />
      </main>

      <Footer />
    </>
  );
}