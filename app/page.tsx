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

export const metadata: Metadata = {
  title: "La Marquise Restaurant | Bonapriso, Douala",
  description:
    "Découvrez La Marquise Restaurant à Bonapriso, Douala : cuisine internationale et orientale, grillades, événements, réservation de table et menu complet.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <Introduction />
        <SignatureDishes />
        <Experience />
        <FamilySection />
        <EventsSection />
        <Gallery />
        <LocationSection />
        <ReservationSection />
      </main>

      <Footer />
    </>
  );
}