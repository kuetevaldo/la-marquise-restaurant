"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const navigation = [
  {
    label: "La Marquise",
    href: "/#about",
    number: "01",
  },
  {
    label: "La Carte",
    href: "/menu",
    number: "02",
  },
  {
    label: "Expérience",
    href: "/#experience",
    number: "03",
  },
  {
    label: "Événements",
    href: "/#events",
    number: "04",
  },
  {
    label: "Galerie",
    href: "/#gallery",
    number: "05",
  },
  {
    label: "Contact",
    href: "/#contact",
    number: "06",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 md:py-7 lg:px-12 xl:px-16">

          {/* Logo */}
          <Link
  href="/"
  aria-label="La Marquise Restaurant"
  className="relative z-50 block h-18 w-44 sm:h-20 sm:w-52"
>
            <Image
              src="/images/logo.png"
              alt="La Marquise Restaurant"
              fill
              priority
              sizes="184px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-10">

            <nav className="flex items-center gap-7 xl:gap-9">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#b99a5b] after:transition-all after:duration-300 hover:text-[#d8c49c] hover:after:w-full xl:text-[11px]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#reservation"
              className="inline-flex min-h-12 items-center justify-center border border-[#b99a5b] bg-[#b99a5b] px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#11100e] transition-colors duration-300 hover:bg-[#d8c49c]"
            >
              Réserver
            </Link>

          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-70 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/15 backdrop-blur-md transition-colors duration-300 hover:border-[#b99a5b] lg:hidden"
          >
            <div className="relative h-4 w-5">

              <span
                className={`absolute left-0 top-0 h-px w-5 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "top-2 rotate-45 bg-[#d8c49c]"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-px bg-white transition-all duration-300 ${
                  menuOpen
                    ? "w-0 opacity-0"
                    : "w-3.5 opacity-100"
                }`}
              />

              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "bottom-1.75 -rotate-45 bg-[#d8c49c]"
                    : ""
                }`}
              />

            </div>
          </button>

        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-60 lg:hidden">

            {/* Backdrop — clicking here closes the menu */}
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.55,
                ease,
              }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-105 flex-col border-l border-white/10 bg-[#0b0b0a] shadow-2xl"
            >

              {/* Top */}
              <div className="flex min-h-25 items-center border-b border-white/10 px-7 pr-20">

                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#b99a5b]">
                  Navigation
                </p>

              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-7 py-7">

                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: 24,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + index * 0.055,
                      ease,
                    }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between py-5"
                    >
                      <div className="flex items-center gap-4">

                        <span className="text-[9px] tracking-[0.18em] text-[#5f5b55]">
                          {item.number}
                        </span>

                        <span className="font-display text-[28px] leading-none text-[#f5f1e8] transition-colors duration-300 group-hover:text-[#d8c49c]">
                          {item.label}
                        </span>

                      </div>

                      <span className="text-sm text-[#68635c] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#b99a5b]">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}

              </nav>

              {/* Bottom */}
              <div className="border-t border-white/10 px-7 pb-7 pt-6">

                <Link
                  href="#reservation"
                  onClick={closeMenu}
                  className="group flex min-h-14 w-full items-center justify-center gap-3 bg-[#b99a5b] px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#11100e] transition-colors duration-300 hover:bg-[#d8c49c]"
                >
                  Réserver une table

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <a
                      href="https://www.facebook.com/share/19GT6w88z8/?mibextid=wwXIf"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center border border-white/10 text-sm text-white/60 transition-colors duration-300 hover:border-[#b99a5b] hover:text-[#d8c49c]"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="https://www.instagram.com/lamarquisedouala?igsh=am9mZmh0c28xOGsw"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center border border-white/10 text-base text-white/60 transition-colors duration-300 hover:border-[#b99a5b] hover:text-[#d8c49c]"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://wa.me/237670858585"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-10 w-10 items-center justify-center border border-white/10 text-base text-white/60 transition-colors duration-300 hover:border-[#b99a5b] hover:text-[#d8c49c]"
                    >
                      <FaWhatsapp />
                    </a>

                  </div>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#5f5b55]">
                    Bonapriso · Douala
                  </p>

                </div>

              </div>

            </motion.aside>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}