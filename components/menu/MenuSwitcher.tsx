"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Reveal from "@/components/ui/Reveal";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuGroupTabs from "@/components/menu/MenuGroupTabs";

import {
  fastFoodMenu,
  restaurantMenu,
} from "@/components/menu/MenuData";

type MenuType = "restaurant" | "fastfood";

const ease = [0.22, 1, 0.36, 1] as const;

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
    ? "#b99a5b"
    : "#9f2727";

  const accentLight = isRestaurant
    ? "#d8c49c"
    : "#d95a55";

  const changeGroup = (groupId: string) => {
    if (isRestaurant) {
      setRestaurantGroup(groupId);
    } else {
      setFastFoodGroup(groupId);
    }
  };

  /*
    Detect the menu category currently
    visible on screen.
  */
  useEffect(() => {
    if (!activeGroup) {
      return;
    }

    const categoryIds =
      activeGroup.categories.map(
        (category) => category.id
      );

    const sections = categoryIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    if (sections.length === 0) {
      return;
    }

    setActiveCategory(
      activeGroup.categories[0]?.id ?? ""
    );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (visibleEntries.length > 0) {
            setActiveCategory(
              visibleEntries[0].target.id
            );
          }
        },
        {
          root: null,
          rootMargin:
            "-190px 0px -55% 0px",
          threshold: [
            0.05,
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeGroup]);

  /*
    Automatically scroll the active category
    button into view horizontally.
  */
  useEffect(() => {
    if (!activeCategory) {
      return;
    }

    const container =
      categoryNavRef.current;

    if (!container) {
      return;
    }

    const activeButton =
      container.querySelector<HTMLAnchorElement>(
        `[data-category-id="${activeCategory}"]`
      );

    if (!activeButton) {
      return;
    }

    activeButton.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCategory]);

  return (
    <section className="bg-[#11100e] py-20 sm:py-24 md:py-28 lg:py-32">
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

            <h2 className="font-display mt-5 text-4xl font-medium text-[#f5f1e8] sm:text-5xl md:text-6xl">
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

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#8f8980] md:text-base md:leading-8">
              Découvrez les deux expériences La Marquise :
              le Restaurant et son univers raffiné, ou le Fast
              Food pour une carte plus généreuse et
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
  onClick={() => {
    setActiveMenu("restaurant");
    setActiveCategory("");
  }}
  className={`group relative min-h-72 overflow-hidden border text-left transition-all duration-500 sm:min-h-80 ${
    isRestaurant
      ? "border-[#b99a5b]"
      : "border-white/10 hover:border-white/25"
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

  {isRestaurant && (
    <motion.span
      layoutId="brand-indicator"
      transition={{
        duration: 0.4,
        ease,
      }}
      className="absolute inset-x-0 top-0 z-10 h-0.5 bg-[#b99a5b]"
    />
  )}

  <div className="relative z-10 flex min-h-72 flex-col justify-end p-6 sm:min-h-80 sm:p-8">
    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b99a5b]">
      La Marquise
    </p>

    <h3 className="font-display mt-3 text-4xl text-[#f5f1e8] sm:text-5xl">
      Restaurant
    </h3>

    <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
      Cuisine internationale, orientale, bar, cocktails et sélection de vins.
    </p>

    <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
      <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
        Noir · Or
      </span>

      <span
        className={`text-sm transition-all duration-300 ${
          isRestaurant
            ? "translate-x-1 text-[#d8c49c]"
            : "text-white/45 group-hover:translate-x-1 group-hover:text-[#d8c49c]"
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
  onClick={() => {
    setActiveMenu("fastfood");
    setActiveCategory("");
  }}
  className={`group relative min-h-72 overflow-hidden border text-left transition-all duration-500 sm:min-h-80 ${
    !isRestaurant
      ? "border-[#9f2727]"
      : "border-white/10 hover:border-white/25"
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
  <div className="absolute inset-0 bg-linear-to-t from-[#2a0505]/95 via-black/30 to-transparent" />

  {!isRestaurant && (
    <motion.span
      layoutId="brand-indicator"
      transition={{
        duration: 0.4,
        ease,
      }}
      className="absolute inset-x-0 top-0 z-10 h-0.5 bg-[#9f2727]"
    />
  )}

  <div className="relative z-10 flex min-h-72 flex-col justify-end p-6 sm:min-h-80 sm:p-8">
    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d95a55]">
      La Marquise
    </p>

    <h3 className="font-display mt-3 text-4xl text-[#f5f1e8] sm:text-5xl">
      Fast Food
    </h3>

    <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
      Burgers, fried chicken, pizzas, desserts et boissons.
    </p>

    <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
      <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
        Rouge · Or
      </span>

      <span
        className={`text-sm transition-all duration-300 ${
          !isRestaurant
            ? "translate-x-1 text-[#d95a55]"
            : "text-white/45 group-hover:translate-x-1 group-hover:text-[#d95a55]"
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMenu}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.45,
              ease,
            }}
            className="mt-16"
          >

            {/* Menu identity */}
            <div className="border-b border-white/10 pb-8">

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

              <h3 className="font-display mt-3 max-w-3xl text-4xl leading-tight text-[#f5f1e8] sm:text-5xl">
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
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#716c64]">
                  {activeGroup.description}
                </p>
              )}

            </div>

            {/* Category quick navigation */}
            <div
              ref={categoryNavRef}
              className="sticky top-36 z-20 flex gap-2 overflow-x-auto border-y border-white/10 bg-[#11100e]/95 py-4 backdrop-blur-md scrollbar-none [&::-webkit-scrollbar]:hidden"
            >

              {activeGroup.categories.map(
                (category) => {
                  const active =
                    activeCategory ===
                    category.id;

                  return (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      data-category-id={
                        category.id
                      }
                      onClick={() => {
                        setActiveCategory(
                          category.id
                        );
                      }}
                      className="shrink-0 border px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] transition-all duration-300"
                      style={
                        active
                          ? {
                              borderColor:
                                accent,
                              backgroundColor:
                                accent,
                              color:
                                "#11100e",
                            }
                          : {
                              borderColor:
                                "rgba(255,255,255,0.10)",
                              color:
                                "#8f8980",
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
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMenu}-${activeGroup.id}`}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
              >
                {activeGroup.categories.map(
                  (category) => (
                    <MenuCategory
                      key={category.id}
                      category={category}
                      accent={accent}
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}