import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/237698434343?text=" +
  encodeURIComponent(
    "Bonjour La Marquise Fast Food 👋🏾\nJe souhaite passer une commande."
  );

export default function FastFoodFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--fastfood-border) bg-[#4b0505]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.75fr_0.75fr] lg:gap-16 lg:py-20">

          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Retour à La Marquise"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/images/fast-food/fastfood-logo.png"
                alt=""
                width={72}
                height={72}
                quality={95}
                
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-(--fastfood-muted)">
              Burgers, pizzas, fried chicken et
              gourmandises à commander directement
              sur WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-13 items-center gap-3 bg-(--fastfood-gold) px-7 text-[10px] font-extrabold uppercase tracking-[0.17em] text-(--fastfood-ink) transition-colors duration-200 hover:bg-(--fastfood-gold-soft)"
            >
              <FaWhatsapp />
              Commander
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-(--fastfood-gold-soft)">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col">
              {[
                ["Menu", "/fast-food#menu"],
                [
                  "Incontournables",
                  "/fast-food#incontournables",
                ],
                [
                  "Commander",
                  "/fast-food#order",
                ],
                [
                  "Contact",
                  "/fast-food#contact",
                ],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="border-b border-(--fastfood-border) py-3.5 text-sm text-(--fastfood-muted) transition-colors duration-200 hover:text-(--fastfood-gold-soft)"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Universe */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-(--fastfood-gold-soft)">
              Changer d’univers
            </p>

            <Link
              href="/restaurant"
              className="font-fastfood-display mt-6 block text-4xl font-bold uppercase leading-none text-(--fastfood-cream) transition-colors duration-200 hover:text-(--fastfood-gold-soft)"
            >
              Restaurant
              <span className="ml-2 text-(--fastfood-gold)">
                →
              </span>
            </Link>

            <div className="mt-9 border-t border-(--fastfood-border) pt-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-(--fastfood-gold-soft)">
                Adresse
              </p>

              <p className="mt-3 text-sm leading-7 text-(--fastfood-muted)">
                Bonapriso · Rue Tokoto
                <br />
                Douala, Cameroun
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-(--fastfood-border) py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[9px] uppercase tracking-[0.18em] text-(--fastfood-muted-deep)">
            © {year} La Marquise Fast Food
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/168jBrHmmRk/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-(--fastfood-border) text-(--fastfood-muted) transition-colors duration-200 hover:border-(--fastfood-gold) hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/lamarquise_fastfood?igsi=Y25udzl4bDA1dmV5"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-(--fastfood-border) text-(--fastfood-muted) transition-colors duration-200 hover:border-(--fastfood-gold) hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
            >
              <FaInstagram />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-(--fastfood-border) text-(--fastfood-muted) transition-colors duration-200 hover:border-(--fastfood-gold) hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}