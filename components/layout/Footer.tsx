import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const navigation = [
  { label: "La Marquise", href: "#about" },
  { label: "La Carte", href: "/menu" },
  { label: "Expérience", href: "#experience" },
  { label: "Événements", href: "#events" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080807]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Main footer */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.7fr_0.8fr] lg:gap-16 lg:py-24">

          {/* Brand */}
          <Reveal y={20}>
            <div>
              <Link
                href="/"
                className="relative block h-20 w-52 sm:h-24 sm:w-60"
                aria-label="La Marquise Restaurant"
              >
                <Image
                  src="/images/logo.png"
                  alt="La Marquise Restaurant"
                  fill
                  sizes="240px"
                  className="object-contain object-left"
                />
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#8f8980] md:text-base md:leading-8">
                Cuisine généreuse, cadre élégant et moments à partager au cœur
                de Bonapriso, Douala.
              </p>

              <a
                href="#reservation"
                className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 bg-[#b99a5b] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#11100e] transition-colors duration-300 hover:bg-[#d8c49c]"
              >
                Réserver une table

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.08} y={20}>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b99a5b]">
                Navigation
              </p>

              <nav className="mt-7 flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="border-b border-white/10 py-3.5 font-display text-xl text-[#d8d2c8] transition-colors duration-300 hover:text-[#d8c49c]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.16} y={20}>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b99a5b]">
                Nous contacter
              </p>

              <div className="mt-7 space-y-7">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#68635c]">
                    Adresse
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#d8d2c8]">
                    Bonapriso · Rue Tokoto
                    <br />
                    Douala, Cameroun
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#68635c]">
                    Téléphone
                  </p>

                  <a
                    href="tel:+237698434343"
                    className="mt-2 inline-block text-sm text-[#d8d2c8] transition-colors duration-300 hover:text-[#d8c49c]"
                  >
                    +237 6 98 43 43 43
                  </a>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#68635c]">
                    Email
                  </p>

                  <a
                    href="mailto:lamarquisedouala@gmail.com"
                    className="mt-2 inline-block break-all text-sm text-[#d8d2c8] transition-colors duration-300 hover:text-[#d8c49c]"
                  >
                    lamarquisedouala@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#68635c]">
                    Horaires
                  </p>

                  <p className="mt-2 text-sm text-[#d8d2c8]">
                    Tous les jours · 11:00 — 23:30
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom footer */}
        <Reveal delay={0.1} y={14}>
          <div className="flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">

            <p className="text-[10px] uppercase tracking-[0.16em] text-[#615d56]">
              © {year} La Marquise Restaurant
            </p>

            {/* Social networks */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="https://www.facebook.com/share/19GT6w88z8/?mibextid=wwXIf"
                aria-label="Facebook"
                className="group flex min-h-12 items-center gap-3 border border-white/15 px-4 text-[#d8d2c8] transition duration-300 hover:border-[#b99a5b] hover:bg-[#b99a5b] hover:text-[#11100e]"
              >
                <FaFacebookF className="text-lg" />

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
                  Facebook
                </span>
              </a>

              <a
                href="https://www.instagram.com/lamarquisedouala?igsh=am9mZmh0c28xOGsw"
                aria-label="Instagram"
                className="group flex min-h-12 items-center gap-3 border border-white/15 px-4 text-[#d8d2c8] transition duration-300 hover:border-[#b99a5b] hover:bg-[#b99a5b] hover:text-[#11100e]"
              >
                <FaInstagram className="text-xl" />

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
                  Instagram
                </span>
              </a>

              <a
                href="https://wa.me/237670858585?text=Bonjour%20La%20Marquise%2C%20je%20souhaite%20faire%20une%20réservation."
                aria-label="WhatsApp"
                className="group flex min-h-12 items-center gap-3 border border-white/15 px-4 text-[#d8d2c8] transition duration-300 hover:border-[#b99a5b] hover:bg-[#b99a5b] hover:text-[#11100e]"
              >
                <FaWhatsapp className="text-xl" />

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
                  WhatsApp
                </span>
              </a>

            </div>

          </div>
        </Reveal>

      </div>
    </footer>
  );
}