"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuGroupTabs from "@/components/menu/MenuGroupTabs";

import {
  fastFoodMenu,
  restaurantMenu,
} from "@/components/menu/MenuData";

type MenuType = "restaurant" | "fastfood";

export default function MenuSwitcher() {
  const [activeMenu, setActiveMenu] =
    useState<MenuType>("restaurant");

  const [activeCategory, setActiveCategory] =
    useState("");

  const [restaurantGroup, setRestaurantGroup] =
    useState("cuisine");

  const [fastFoodGroup, setFastFoodGroup] =
    useState("food");

  const categoryNavRef =
    useRef<HTMLDivElement>(null);

  const isRestaurant =
    activeMenu === "restaurant";

  const groups = isRestaurant
    ? restaurantMenu
    : fastFoodMenu;

  const activeGroupId = isRestaurant
    ? restaurantGroup
    : fastFoodGroup;

  const activeGroup = useMemo(() => {
    return (
      groups.find(
        (group) => group.id === activeGroupId
      ) ?? groups[0]
    );
  }, [groups, activeGroupId]);

  const accent = isRestaurant
    ? "var(--brand)"
    : "var(--fastfood-light)";

  const accentLight = isRestaurant
    ? "var(--brand-light)"
    : "var(--fastfood-light)";

  const accentStrong = isRestaurant
    ? "var(--brand)"
    : "var(--fastfood)";

  const activeAccentText = isRestaurant
    ? "var(--surface)"
    : "var(--foreground)";

  const changeGroup = (groupId: string) => {
    if (isRestaurant) {
      setRestaurantGroup(groupId);
    } else {
      setFastFoodGroup(groupId);
    }
  };

  /*
   * Detect the menu category currently
   * visible on screen.
   */
  useEffect(() => {
    if (!activeGroup) return;

    const sections = activeGroup.categories
      .map((category) =>
        document.getElementById(category.id)
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    if (sections.length === 0) return;

    const navbar =
      document.querySelector<HTMLElement>(
        "[data-site-navbar]"
      );

    const groupTabs =
      document.querySelector<HTMLElement>(
        "[data-menu-group-tabs]"
      );

    const categoryTabs = categoryNavRef.current;

    let sectionObserver: IntersectionObserver | null =
      null;

    const observeSections = () => {
      sectionObserver?.disconnect();

      const stickyOffset = Math.ceil(
        (navbar?.getBoundingClientRect().height ?? 0) +
          (groupTabs?.getBoundingClientRect().height ?? 0) +
          (categoryTabs?.getBoundingClientRect().height ?? 0)
      );

      const viewportHeight =
        window.visualViewport?.height ??
        window.innerHeight;

      const trackingBandHeight = Math.min(
        32,
        Math.max(1, viewportHeight - stickyOffset)
      );

      const bottomMargin = Math.max(
        0,
        Math.ceil(
          viewportHeight -
            stickyOffset -
            trackingBandHeight
        )
      );

      sectionObserver = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                Math.abs(
                  a.boundingClientRect.top -
                    stickyOffset
                ) -
                Math.abs(
                  b.boundingClientRect.top -
                    stickyOffset
                )
            );

          const nextCategory =
            visibleEntries[0]?.target.id;

          if (!nextCategory) return;

          setActiveCategory((current) =>
            current === nextCategory
              ? current
              : nextCategory
          );
        },
        {
          root: null,
          rootMargin: `-${stickyOffset}px 0px -${bottomMargin}px 0px`,
          threshold: 0,
        }
      );

      sections.forEach((section) => {
        sectionObserver?.observe(section);
      });
    };

    const sizeObserver = new ResizeObserver(
      observeSections
    );

    [navbar, groupTabs, categoryTabs].forEach(
      (element) => {
        if (element) {
          sizeObserver.observe(element);
        }
      }
    );

    observeSections();

    return () => {
      sizeObserver.disconnect();
      sectionObserver?.disconnect();
    };
  }, [activeGroup]);

  /*
   * Scroll ONLY the horizontal category bar.
   * This avoids scrollIntoView() affecting
   * the main vertical page scroll on mobile.
   */
  useEffect(() => {
    if (!activeCategory) return;

    const container =
      categoryNavRef.current;

    if (!container) return;

    const activeButton =
      container.querySelector<HTMLAnchorElement>(
        `[data-category-id="${activeCategory}"]`
      );

    if (!activeButton) return;

    const targetLeft =
      activeButton.offsetLeft -
      container.clientWidth / 2 +
      activeButton.clientWidth / 2;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    container.scrollTo({
      left: targetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeCategory]);

  return (
    <section className="bg-(--surface) py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Brand heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.32em] sm:text-[11px]"
              style={{
                color: accent,
              }}
            >
              Choisissez votre univers
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium text-(--foreground) sm:text-5xl md:text-6xl">
              Deux identités,
              <span
                className="italic"
                style={{
                  color: accentLight,
                }}
              >
                {" "}
                une même signature.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-(--muted-soft) md:text-base md:leading-8">
              Découvrez les deux expériences La Marquise :
              le Restaurant et son univers raffiné, ou le
              Fast Food pour une carte plus généreuse et
              décontractée.
            </p>
          </div>
        </Reveal>

        {/* Brand selector */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">

            {/* Restaurant */}
            <button
              type="button"
              aria-pressed={isRestaurant}
              onClick={() => {
                setActiveMenu("restaurant");
                setActiveCategory("");
              }}
              className={`group relative min-h-72 overflow-hidden border text-left transition-colors duration-300 sm:min-h-80 ${
                isRestaurant
                  ? "border-(--brand)"
                  : "border-(--border) hover:border-(--border-strong)"
              }`}
            >
              <Image
                src="/images/menu/restaurant-brand.png"
                alt="La Marquise Restaurant"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/10" />

              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-(--brand) transition-[opacity,transform] duration-300 ${
                  isRestaurant
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />

              <div className="relative z-10 flex min-h-72 flex-col justify-end p-6 sm:min-h-80 sm:p-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-(--brand)">
                  La Marquise
                </p>

                <h3 className="font-display mt-3 text-4xl text-(--foreground) sm:text-5xl">
                  Restaurant
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-(--foreground-soft)">
                  Cuisine internationale, orientale, bar,
                  cocktails et sélection de vins.
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-(--border) pt-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-(--muted)">
                    Noir · Or
                  </span>

                  <span
                    className={`text-sm transition-all duration-300 ${
                      isRestaurant
                        ? "translate-x-1 text-(--brand-light)"
                        : "text-(--muted) group-hover:translate-x-1 group-hover:text-(--brand-light)"
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </button>

            {/* Fast Food */}
            <button
              type="button"
              aria-pressed={!isRestaurant}
              onClick={() => {
                setActiveMenu("fastfood");
                setActiveCategory("");
              }}
              className={`group relative min-h-72 overflow-hidden border text-left transition-colors duration-300 sm:min-h-80 ${
                !isRestaurant
                  ? "border-(--fastfood)"
                  : "border-(--border) hover:border-(--border-strong)"
              }`}
            >
              <Image
                src="/images/menu/fastfood-brand.png"
                alt="La Marquise Fast Food"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-linear-to-t from-(--fastfood-deep)/95 via-black/30 to-transparent" />

              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-(--fastfood) transition-[opacity,transform] duration-300 ${
                  !isRestaurant
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />

              <div className="relative z-10 flex min-h-72 flex-col justify-end p-6 sm:min-h-80 sm:p-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-(--fastfood-light)">
                  La Marquise
                </p>

                <h3 className="font-display mt-3 text-4xl text-(--foreground) sm:text-5xl">
                  Fast Food
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-(--foreground-soft)">
                  Burgers, fried chicken, pizzas,
                  desserts et boissons.
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-(--border) pt-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-(--muted)">
                    Rouge · Or
                  </span>

                  <span
                    className={`text-sm transition-all duration-300 ${
                      !isRestaurant
                        ? "translate-x-1 text-(--fastfood-light)"
                        : "text-(--muted) group-hover:translate-x-1 group-hover:text-(--fastfood-light)"
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </button>

          </div>
        </Reveal>

        {/* Selected menu */}
        <div className="mt-16">
            {/* Menu identity */}
            <div className="border-b border-(--border) pb-8">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  color: accent,
                }}
              >
                {isRestaurant
                  ? "La Marquise Restaurant"
                  : "La Marquise Fast Food"}
              </p>

              <h3 className="font-display mt-3 max-w-3xl text-4xl leading-tight text-(--foreground) sm:text-5xl">
                {isRestaurant
                  ? "Cuisine, bar & cave"
                  : "Fast food & gourmandises"}
              </h3>
            </div>

            {/* Group navigation */}
            <MenuGroupTabs
              groups={groups}
              activeGroup={activeGroup.id}
              onChange={(groupId) => {
                changeGroup(groupId);
                setActiveCategory("");
              }}
              accent={accent}
            />

            {/* Active group intro */}
            <div className="py-10 md:py-12">
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  color: accent,
                }}
              >
                {activeGroup.name}
              </p>

              {activeGroup.description && (
                <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted-soft)">
                  {activeGroup.description}
                </p>
              )}
            </div>

            {/* Category quick navigation */}
            <div
              ref={categoryNavRef}
              data-menu-category-tabs
              className="menu-category-tabs sticky z-20 flex items-center gap-2 overflow-x-auto border-y border-(--border) bg-(--surface) scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              {activeGroup.categories.map(
                (category) => {
                  const active =
                    activeCategory === category.id;

                  return (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      aria-current={
                        active
                          ? "location"
                          : undefined
                      }
                      data-category-id={
                        category.id
                      }
                      onClick={() => {
                        setActiveCategory(
                          category.id
                        );
                      }}
                      className="min-h-11 shrink-0 border px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] transition-all duration-300"
                      style={
                        active
                          ? {
                              borderColor:
                                accentStrong,
                              backgroundColor:
                                accentStrong,
                              color:
                                activeAccentText,
                            }
                          : {
                              borderColor:
                                "var(--border)",
                              color:
                                "var(--muted-soft)",
                            }
                      }
                    >
                      {category.name}
                    </a>
                  );
                }
              )}
            </div>

          {/* Categories */}
          <div>
            {activeGroup.categories.map(
              (category) => (
                <MenuCategory
                  key={category.id}
                  category={category}
                  accent={accent}
                />
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
