"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const navigation = [
  {
    label: "La Marquise",
    href: "/fast-food#about",
    number: "01",
  },
  {
    label: "Menu",
    href: "/fast-food#menu",
    number: "02",
  },
  {
    label: "Incontournables",
    href: "/fast-food#incontournables",
    number: "03",
  },
  {
    label: "Commander",
    href: "/fast-food#order",
    number: "04",
  },
  {
    label: "Contact",
    href: "/fast-food#contact",
    number: "05",
  },
];

const whatsappUrl =
  "https://wa.me/237698434343?text=" +
  encodeURIComponent(
    "Bonjour La Marquise Fast Food 👋🏾\nJe souhaite passer une commande."
  );

const ease = [0.22, 1, 0.36, 1] as const;

export default function FastFoodNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const drawerRef = useRef<HTMLElement>(null);
  const scrollSentinelRef = useRef<HTMLSpanElement>(null);
  const restoreScrollOnCloseRef = useRef(true);

  const shouldReduceMotion = useReducedMotion();

  const closeMenuForNavigation = () => {
    restoreScrollOnCloseRef.current = false;
    setMenuOpen(false);
  };

  useEffect(() => {
    const sentinel = scrollSentinelRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextScrolled = !entry.isIntersecting;

        setIsScrolled((current) =>
          current === nextScrolled ? current : nextScrolled
        );
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    restoreScrollOnCloseRef.current = true;

    const body = document.body;
    const html = document.documentElement;
    const scrollPosition = window.scrollY;

    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer")
    ).map((element) => ({
      element,
      wasInert: element.inert,
    }));

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    backgroundElements.forEach(({ element }) => {
      element.inert = true;
    });

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const focusFrame = window.requestAnimationFrame(() => {
      drawerRef.current
        ?.querySelector<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        ?.focus();
    });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeydown);

      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;

      backgroundElements.forEach(
        ({ element, wasInert }) => {
          element.inert = wasInert;
        }
      );

      if (restoreScrollOnCloseRef.current) {
        const previousScrollBehavior =
          html.style.scrollBehavior;

        html.style.scrollBehavior = "auto";

        window.scrollTo({
          top: scrollPosition,
          left: 0,
          behavior: "auto",
        });

        html.style.scrollBehavior =
          previousScrollBehavior;
      }

      previouslyFocused?.focus({
        preventScroll: true,
      });
    };
  }, [menuOpen]);

  return (
    <>
      <span
        ref={scrollSentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-px"
      />

      <header
  data-site-navbar
  data-scrolled={isScrolled ? "true" : "false"}
  className="fastfood-navbar fixed inset-x-0 top-0 z-50 w-full border-b"
>
        <div className="site-navbar-inner mx-auto flex h-full w-full max-w-7xl items-center justify-between">
         <Link
  href="/"
  aria-label="Retour à La Marquise"
  className="relative z-50 flex items-center"
>
  <Image
  src="/images/fast-food/fastfood-logo.png"
  alt="La Marquise Fast Food"
  width={120}
  height={48}
  priority
  quality={95}
  className="h-auto w-20.5 object-contain sm:w-24"
/>
</Link>

          <div className="hidden items-center gap-7 lg:flex">
  <nav className="flex items-center gap-6 xl:gap-8">
    {navigation.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="relative text-[10px] font-semibold uppercase tracking-[0.17em] text-(--fastfood-muted) transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-(--fastfood-gold) after:transition-all after:duration-200 hover:text-(--fastfood-cream) hover:after:w-full"
      >
        {item.label}
      </Link>
    ))}
  </nav>

  {/* Switch to Restaurant */}
  <Link
    href="/restaurant"
    className="group flex items-center gap-2 border-l border-(--fastfood-border) pl-6 text-[9px] font-extrabold uppercase tracking-[0.18em] text-(--fastfood-muted) transition-colors duration-200 hover:text-(--fastfood-gold-soft)"
  >
    Restaurant

    <span className="text-(--fastfood-gold) transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <a
    href={whatsappUrl}
    target="_blank"
    rel="noreferrer"
    className="inline-flex min-h-12 items-center gap-2 bg-(--fastfood-gold) px-6 text-[10px] font-extrabold uppercase tracking-[0.16em] text-(--fastfood-ink) transition-colors duration-200 hover:bg-(--fastfood-gold-soft)"
  >
    <FaWhatsapp className="text-base" />
    Commander
  </a>
</div>

          <button
            type="button"
            aria-label={
              menuOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
            aria-controls="fastfood-mobile-navigation"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="relative z-70 flex h-12 w-12 items-center justify-center border border-(--fastfood-border-strong) bg-(--fastfood-deep) transition-colors duration-200 hover:bg-(--fastfood) lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-(--fastfood-gold-soft) transition-all duration-200 ${
                  menuOpen ? "top-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-px bg-(--fastfood-gold-soft) transition-all duration-200 ${
                  menuOpen
                    ? "w-0 opacity-0"
                    : "w-3.5 opacity-100"
                }`}
              />

              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-(--fastfood-gold-soft) transition-all duration-200 ${
                  menuOpen
                    ? "bottom-1.75 -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <div className="mobile-drawer-viewport fixed inset-x-0 top-0 z-60 lg:hidden">
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0 }
              }
              animate={{ opacity: 1 }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0 }
              }
              className="absolute inset-0 h-full w-full bg-black/80"
            />

            <motion.aside
              ref={drawerRef}
              id="fastfood-mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Fast Food"
              initial={
                shouldReduceMotion
                  ? false
                  : { x: "100%" }
              }
              animate={{ x: 0 }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : { x: "100%" }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease,
              }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-105 flex-col border-l border-(--fastfood-border) bg-(--fastfood-deep)"
            >
              <div className="mobile-drawer-safe-top flex items-center border-b border-(--fastfood-border) px-7 pr-20">
  <p className="text-[9px] font-extrabold uppercase tracking-[0.32em] text-(--fastfood-gold)">
    Navigation
  </p>
</div>

              <nav className="flex-1 overflow-y-auto px-7 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenuForNavigation}
                    className="group flex items-center justify-between border-b border-(--fastfood-border) py-5"
                  >
                    <span className="font-fastfood-display text-[30px] font-bold uppercase tracking-[0.01em] text-(--fastfood-cream) transition-colors duration-200 group-hover:text-(--fastfood-gold-soft)">
                      {item.label}
                    </span>
                    <span className="text-(--fastfood-gold-soft) transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mobile-drawer-safe-bottom border-t border-(--fastfood-border) px-7 pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 w-full items-center justify-center gap-3 bg-(--fastfood-gold) px-6 text-[10px] font-extrabold uppercase tracking-[0.18em] text-(--fastfood-ink) transition-colors duration-200 hover:bg-(--fastfood-gold-soft)"
                >
                  <FaWhatsapp className="text-lg" />
                  Commander sur WhatsApp
                </a>

                <Link
  href="/restaurant"
  onClick={closeMenuForNavigation}
  className="group mt-4 flex min-h-12 w-full items-center justify-between border border-(--fastfood-border) px-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-(--fastfood-muted) transition-colors duration-200 hover:border-(--fastfood-gold) hover:text-(--fastfood-gold-soft)"
>
  <span>Découvrir le Restaurant</span>

  <span className="text-(--fastfood-gold) transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
</Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
