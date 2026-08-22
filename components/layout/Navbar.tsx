"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const navigation = [
  {
    label: "La Marquise",
    href: "/restaurant#about",
    number: "01",
  },
  {
    label: "La Carte",
    href: "/restaurant#menu",
    number: "02",
  },
  {
    label: "Expérience",
    href: "/restaurant#experience",
    number: "03",
  },
  {
    label: "Événements",
    href: "/restaurant#events",
    number: "04",
  },
  {
    label: "Galerie",
    href: "/restaurant#gallery",
    number: "05",
  },
  {
    label: "Contact",
    href: "/restaurant#contact",
    number: "06",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const scrollSentinelRef = useRef<HTMLSpanElement>(null);
  const restoreScrollOnCloseRef = useRef(true);
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          current === nextScrolled
            ? current
            : nextScrolled
        );
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(
      "(min-width: 1024px)"
    );

    const closeAtDesktop = (
      event: MediaQueryListEvent
    ) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    desktopQuery.addEventListener(
      "change",
      closeAtDesktop
    );

    return () => {
      desktopQuery.removeEventListener(
        "change",
        closeAtDesktop
      );
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    restoreScrollOnCloseRef.current = true;

    const body = document.body;
    const html = document.documentElement;
    const scrollPosition = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - html.clientWidth;

    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main, footer"
      )
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

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

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

    const handleEscape = (event: KeyboardEvent) => {
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

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleEscape);

      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;
      body.style.paddingRight =
        previousBodyStyles.paddingRight;

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
        className="site-navbar fixed inset-x-0 top-0 z-50 w-full border-b"
      >
        <div className="site-navbar-inner mx-auto flex h-full w-full max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link
  href="/"
  aria-label="La Marquise Restaurant"
  className="relative z-50 block h-18 w-44"
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
        className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-(--foreground-soft) transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-(--brand) after:transition-all after:duration-300 hover:text-(--brand-light) hover:after:w-full xl:text-[11px]"
      >
        {item.label}
      </Link>
    ))}
  </nav>

  {/* Switch to Fast Food */}
  <Link
    href="/fast-food"
    className="group flex items-center gap-2 border-l border-(--border) pl-6 text-[9px] font-semibold uppercase tracking-[0.18em] text-(--muted) transition-colors duration-300 hover:text-(--brand-light)"
  >
    Fast Food

    <span className="text-(--brand) transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <Link
    href="/restaurant#reservation"
    className="inline-flex min-h-12 items-center justify-center border border-(--brand) bg-(--brand) px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--surface) transition-colors duration-300 hover:border-(--brand-light) hover:bg-(--brand-light)"
  >
    Réserver
  </Link>
</div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-70 flex h-12 w-12 items-center justify-center border border-(--border-strong) bg-(--surface) transition-colors duration-300 hover:border-(--brand) lg:hidden"
          >
            <div className="relative h-4 w-5">

              <span
                className={`absolute left-0 top-0 h-px w-5 bg-(--foreground) transition-all duration-300 ${
                  menuOpen
                    ? "top-2 rotate-45 bg-(--brand-light)"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-px bg-(--foreground) transition-all duration-300 ${
                  menuOpen
                    ? "w-0 opacity-0"
                    : "w-3.5 opacity-100"
                }`}
              />

              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-(--foreground) transition-all duration-300 ${
                  menuOpen
                    ? "bottom-1.75 -rotate-45 bg-(--brand-light)"
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
          <div className="mobile-drawer-viewport fixed inset-x-0 top-0 z-60 lg:hidden">

            {/* Backdrop — clicking here closes the menu */}
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              onClick={closeMenu}
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
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.35,
              }}
              className="absolute inset-0 h-full w-full cursor-default bg-black/75"
            />

            {/* Drawer */}
            <motion.aside
              ref={drawerRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation mobile"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      x: "100%",
                    }
              }
              animate={{
                x: 0,
              }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: "100%",
                    }
              }
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.55,
                ease,
              }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-105 flex-col border-l border-(--border) bg-(--background) shadow-2xl"
            >

              {/* Top */}
              <div className="mobile-drawer-safe-top flex shrink-0 items-center border-b border-(--border) px-7 pr-20">

                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-(--brand)">
                  Navigation
                </p>

              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-7 py-7">

                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 24,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion
                        ? 0
                        : 0.55,
                      delay: shouldReduceMotion
                        ? 0
                        : 0.12 + index * 0.055,
                      ease,
                    }}
                    className="border-b border-(--border)"
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenuForNavigation}
                      className="group flex items-center justify-between py-5"
                    >
                      <div className="flex items-center gap-4">

                        <span className="text-[9px] tracking-[0.18em] text-(--muted-subtle)">
                          {item.number}
                        </span>

                        <span className="font-display text-[28px] leading-none text-(--foreground) transition-colors duration-300 group-hover:text-(--brand-light)">
                          {item.label}
                        </span>

                      </div>

                      <span className="text-sm text-(--muted-subtle) transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--brand)">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}

              </nav>

              {/* Bottom */}
              <div className="mobile-drawer-safe-bottom border-t border-(--border) px-7 pt-6">

                <Link
                  href="/restaurant#reservation"
                  onClick={closeMenuForNavigation}
                  className="group flex min-h-14 w-full items-center justify-center gap-3 bg-(--brand) px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-(--surface) transition-colors duration-300 hover:bg-(--brand-light)"
                >
                  Réserver une table

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
  href="/fast-food"
  onClick={closeMenuForNavigation}
  className="group mt-4 flex min-h-12 w-full items-center justify-between border border-(--border) px-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-(--foreground-soft) transition-colors duration-300 hover:border-(--brand) hover:text-(--brand-light)"
>
  <span>Découvrir le Fast Food</span>

  <span className="text-(--brand) transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
                

                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <a
                      href="https://www.facebook.com/share/19GT6w88z8/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center border border-(--border) text-sm text-(--muted) transition-colors duration-300 hover:border-(--brand) hover:text-(--brand-light)"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="https://www.instagram.com/lamarquisedouala?igsh=am9mZmh0c28xOGsw"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center border border-(--border) text-base text-(--muted) transition-colors duration-300 hover:border-(--brand) hover:text-(--brand-light)"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://wa.me/237670858585"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-10 w-10 items-center justify-center border border-(--border) text-base text-(--muted) transition-colors duration-300 hover:border-(--brand) hover:text-(--brand-light)"
                    >
                      <FaWhatsapp />
                    </a>

                  </div>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-(--muted-subtle)">
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
