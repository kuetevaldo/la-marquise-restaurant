import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "La Carte | La Marquise Restaurant Douala",
  description:
    "Découvrez la carte de La Marquise Restaurant à Bonapriso, Douala.",
};

export default function MenuPage() {
  redirect("/restaurant#menu");
}