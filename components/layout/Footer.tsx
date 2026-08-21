import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const navigation = [
  { label: "La Marquise", href: "/#about" },
  { label: "La Carte", href: "/menu" },
  { label: "Expérience", href: "/#experience" },
  { label: "Événements", href: "/#events" },
  { label: "Galerie", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-deep)]">
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

              <p className="mt-6 max-w-md text-sm leading-7 text-[var(--muted-soft)] md:text-base md:leading-8">
                Cuisine généreuse, cadre élégant et moments à partager au cœur
                de Bonapriso, Douala.
              </p>

              <Link
                href="/#reservation"
                className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--brand)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--surface)] transition-colors duration-300 hover:bg-[var(--brand-light)]"
              >
                Réserver une table

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.08} y={20}>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
                Navigation
              </p>

              <nav className="mt-7 flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="border-b border-[var(--border)] py-3.5 font-display text-xl text-[var(--foreground-soft)] transition-colors duration-300 hover:text-[var(--brand-light)]"
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
                Nous contacter
              </p>

              <div className="mt-7 space-y-7">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--muted-subtle)]">
                    Adresse
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-soft)]">
                    Bonapriso · Rue Tokoto
                    <br />
                    Douala, Cameroun
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--muted-subtle)]">
                    Téléphone
                  </p>

                  <a
                    href="tel:+237698434343"
                    className="mt-2 inline-block text-sm text-[var(--foreground-soft)] transition-colors duration-300 hover:text-[var(--brand-light)]"
                  >
                    +237 6 98 43 43 43
                  </a>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--muted-subtle)]">
                    Email
                  </p>

                  <a
                    href="mailto:lamarquisedouala@gmail.com"
                    className="mt-2 inline-block break-all text-sm text-[var(--foreground-soft)] transition-colors duration-300 hover:text-[var(--brand-light)]"
                  >
                    lamarquisedouala@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--muted-subtle)]">
                    Horaires
                  </p>

                  <p className="mt-2 text-sm text-[var(--foreground-soft)]">
                    Tous les jours · 11:00 — 23:30
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom footer */}
        <Reveal delay={0.1} y={14}>
          <div className="flex flex-col gap-6 border-t border-[var(--border)] py-8 md:flex-row md:items-center md:justify-between">

            <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted-subtle)]">
              © {year} La Marquise Restaurant
            </p>

            {/* Social networks */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="https://www.facebook.com/share/19GT6w88z8/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group flex min-h-12 items-center gap-3 border border-[var(--border)] px-4 text-[var(--foreground-soft)] transition-colors duration-300 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--surface)]"
              >
                <FaFacebookF className="text-lg" />

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
                  Facebook
                </span>
              </a>

              <a
                href="https://www.instagram.com/lamarquisedouala?igsh=am9mZmh0c28xOGsw"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group flex min-h-12 items-center gap-3 border border-[var(--border)] px-4 text-[var(--foreground-soft)] transition-colors duration-300 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--surface)]"
              >
                <FaInstagram className="text-xl" />

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
                  Instagram
                </span>
              </a>

              <a
                href="https://wa.me/237670858585?text=Bonjour%20La%20Marquise%2C%20je%20souhaite%20faire%20une%20réservation."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group flex min-h-12 items-center gap-3 border border-[var(--border)] px-4 text-[var(--foreground-soft)] transition-colors duration-300 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--surface)]"
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
