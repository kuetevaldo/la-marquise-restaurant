"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Reveal from "@/components/ui/Reveal";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuGroupTabs from "@/components/menu/MenuGroupTabs";

import type {
  MenuGroupData,
} from "@/components/menu/MenuData";

type MenuTheme = "restaurant" | "fastfood";

type ExperienceMenuProps = {
  groups: MenuGroupData[];
  theme: MenuTheme;
};

export default function ExperienceMenu({
  groups,
  theme,
}: ExperienceMenuProps) {
  const [activeGroupId, setActiveGroupId] =
    useState(groups[0]?.id ?? "");

  const [openCategoryId, setOpenCategoryId] =
    useState<string | null>(
      groups[0]?.categories[0]?.id ?? null
    );

  const [searchQuery, setSearchQuery] =
    useState("");

  const [
    searchOpenCategoryIds,
    setSearchOpenCategoryIds,
  ] = useState<string[]>([]);

  const activeGroup = useMemo(() => {
    return (
      groups.find(
        (group) =>
          group.id === activeGroupId
      ) ?? groups[0]
    );
  }, [groups, activeGroupId]);

  const isRestaurant =
    theme === "restaurant";

  const isFastFood =
    theme === "fastfood";

  const accent = isRestaurant
    ? "var(--brand)"
    : "var(--fastfood-gold)";

  const normalizedSearch =
    searchQuery
      .trim()
      .toLocaleLowerCase("fr");

  /*
   * Search is available for both
   * Restaurant and Fast Food.
   */
  const isSearching =
    normalizedSearch.length > 0;

  /*
   * Search only inside the currently
   * selected menu group.
   */
  const visibleCategories = useMemo(() => {
    if (!activeGroup) {
      return [];
    }

    if (!isSearching) {
      return activeGroup.categories;
    }

    return activeGroup.categories
      .map((category) => {
        const categoryMatches =
          category.name
            .toLocaleLowerCase("fr")
            .includes(normalizedSearch) ||
          category.description
            ?.toLocaleLowerCase("fr")
            .includes(normalizedSearch);

        const matchingItems =
          category.items.filter((item) => {
            const nameMatches =
              item.name
                .toLocaleLowerCase("fr")
                .includes(normalizedSearch);

            const descriptionMatches =
              item.description
                ?.toLocaleLowerCase("fr")
                .includes(normalizedSearch);

            return (
              categoryMatches ||
              nameMatches ||
              Boolean(descriptionMatches)
            );
          });

        if (matchingItems.length === 0) {
          return null;
        }

        return {
          ...category,
          items: matchingItems,
        };
      })
      .filter(
        (
          category
        ): category is NonNullable<
          typeof category
        > => category !== null
      );
  }, [
    activeGroup,
    isSearching,
    normalizedSearch,
  ]);

  /*
   * Normal accordion:
   * changing menu group opens
   * its first category.
   */
  useEffect(() => {
    if (!isSearching) {
      setOpenCategoryId(
        activeGroup
          ?.categories[0]
          ?.id ?? null
      );
    }
  }, [activeGroup, isSearching]);

  /*
   * Search mode:
   * automatically open every category
   * containing matching results.
   */
  useEffect(() => {
    if (!isSearching) {
      setSearchOpenCategoryIds([]);
      return;
    }

    setSearchOpenCategoryIds(
      visibleCategories.map(
        (category) => category.id
      )
    );
  }, [
    isSearching,
    visibleCategories,
  ]);

  if (!activeGroup) {
    return null;
  }

  const changeGroup = (
    groupId: string
  ) => {
    setActiveGroupId(groupId);
  };

  const toggleCategory = (
    categoryId: string
  ) => {
    if (isSearching) {
      setSearchOpenCategoryIds(
        (current) =>
          current.includes(categoryId)
            ? current.filter(
                (id) =>
                  id !== categoryId
              )
            : [
                ...current,
                categoryId,
              ]
      );

      return;
    }

    setOpenCategoryId((current) =>
      current === categoryId
        ? null
        : categoryId
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const resultCount =
    visibleCategories.reduce(
      (total, category) =>
        total +
        category.items.length,
      0
    );

  return (
    <section
      id="menu"
      className={
        isRestaurant
          ? "border-t border-(--border) bg-(--surface) py-20 sm:py-24 md:py-28 lg:py-32"
          : "border-t border-(--fastfood-border) bg-(--fastfood-background) py-20 sm:py-24 md:py-28 lg:py-32"
      }
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Introduction */}
        <Reveal>
          <div
            className={
              isRestaurant
                ? "max-w-3xl border-b border-(--border) pb-10"
                : "max-w-3xl border-b border-(--fastfood-border) pb-10"
            }
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{
                color: accent,
              }}
            >
              {isRestaurant
                ? "La carte"
                : "Le menu"}
            </p>

            <h2
              className={
                isRestaurant
                  ? "font-display mt-4 text-5xl font-medium leading-[0.95] text-(--foreground) sm:text-6xl md:text-7xl"
                  : "font-fastfood-display mt-4 text-5xl font-extrabold uppercase leading-[0.86] tracking-tight text-(--fastfood-cream) sm:text-6xl md:text-7xl lg:text-8xl"
              }
            >
              {isRestaurant ? (
                <>
                  Cuisine, bar
                  <span className="block italic text-(--brand-light)">
                    & cave.
                  </span>
                </>
              ) : (
                <>
                  Tout ce qu&apos;il faut
                  <span className="block text-(--fastfood-gold-soft)">
                    pour se régaler.
                  </span>
                </>
              )}
            </h2>

            <p
              className={
                isRestaurant
                  ? "mt-6 max-w-xl text-sm leading-7 text-(--muted) md:text-base md:leading-8"
                  : "mt-6 max-w-xl text-sm leading-7 text-(--fastfood-muted) md:text-base md:leading-8"
              }
            >
              {isRestaurant
                ? "Découvrez l’ensemble de la carte La Marquise Restaurant : cuisine, cocktails, spiritueux et sélection de vins."
                : "Burgers, pizzas, fried chicken, desserts et boissons : découvrez toute la carte La Marquise Fast Food."}
            </p>
          </div>
        </Reveal>

        {/* Menu search */}
        <div className="mt-8">
          <label
            htmlFor={`${theme}-menu-search`}
            className={
              isRestaurant
                ? "mb-3 block text-[9px] font-semibold uppercase tracking-[0.24em] text-(--brand)"
                : "mb-3 block text-[9px] font-bold uppercase tracking-[0.24em] text-(--fastfood-gold-soft)"
            }
          >
            {isRestaurant
              ? "Rechercher dans la carte"
              : "Rechercher dans le menu"}
          </label>

          <div
            className={
              isRestaurant
                ? "flex border border-(--border-strong) bg-(--background-deep)"
                : "flex border border-(--fastfood-border-strong) bg-(--fastfood-deep)"
            }
          >
            <div className="flex min-w-0 flex-1 items-center">
              <span
                aria-hidden="true"
                className={
                  isRestaurant
                    ? "pl-5 text-(--brand)"
                    : "pl-5 text-(--fastfood-gold-soft)"
                }
              >
                ⌕
              </span>

              <input
                id={`${theme}-menu-search`}
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder={
                  isRestaurant
                    ? "Poulet, poisson, cocktail..."
                    : "Pizza, burger, chicken..."
                }
                autoComplete="off"
                className={
                  isRestaurant
                    ? "min-h-14 w-full bg-transparent px-4 text-sm text-(--foreground) outline-none placeholder:text-(--muted-subtle)"
                    : "min-h-14 w-full bg-transparent px-4 text-sm text-(--fastfood-cream) outline-none placeholder:text-(--fastfood-muted-deep)"
                }
              />
            </div>

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className={
                  isRestaurant
                    ? "shrink-0 border-l border-(--border) px-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-(--brand) transition-colors duration-200 hover:bg-(--brand) hover:text-(--surface)"
                    : "shrink-0 border-l border-(--fastfood-border) px-5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-(--fastfood-gold-soft) transition-colors duration-200 hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
                }
              >
                Effacer
              </button>
            )}
          </div>

          {isSearching && (
            <p
              className={
                isRestaurant
                  ? "mt-3 text-[9px] uppercase tracking-[0.16em] text-(--muted-subtle)"
                  : "mt-3 text-[9px] uppercase tracking-[0.16em] text-(--fastfood-muted-deep)"
              }
            >
              {resultCount}{" "}
              résultat
              {resultCount !== 1
                ? "s"
                : ""}
            </p>
          )}
        </div>

        {/* Groups */}
        <MenuGroupTabs
          groups={groups}
          activeGroup={activeGroup.id}
          onChange={changeGroup}
          accent={accent}
          theme={theme}
        />

        {/* Active group heading */}
        <div className="py-9 md:py-11">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.28em]"
                style={{
                  color: accent,
                }}
              >
                {activeGroup.name}
              </p>

              {activeGroup.description && (
                <p
                  className={
                    isRestaurant
                      ? "mt-3 max-w-xl text-sm leading-7 text-(--muted-soft)"
                      : "mt-3 max-w-xl text-sm leading-7 text-(--fastfood-muted)"
                  }
                >
                  {activeGroup.description}
                </p>
              )}
            </div>

            {!isSearching && (
              <p
                className={
                  isRestaurant
                    ? "text-[9px] uppercase tracking-[0.18em] text-(--muted-subtle)"
                    : "text-[9px] font-semibold uppercase tracking-[0.18em] text-(--fastfood-muted-deep)"
                }
              >
                {
                  activeGroup.categories
                    .length
                }{" "}
                catégories
              </p>
            )}
          </div>
        </div>

        {/* Results / accordion */}
        {visibleCategories.length > 0 ? (
          <div
            className={
              isRestaurant
                ? "border-t border-(--border)"
                : "border-t border-(--fastfood-border)"
            }
          >
            {visibleCategories.map(
              (category) => (
                <MenuCategory
                  key={category.id}
                  category={category}
                  accent={accent}
                  theme={theme}
                  isOpen={
                    isSearching
                      ? searchOpenCategoryIds.includes(
                          category.id
                        )
                      : openCategoryId ===
                        category.id
                  }
                  onToggle={() =>
                    toggleCategory(
                      category.id
                    )
                  }
                />
              )
            )}
          </div>
        ) : (
          <div
            className={
              isRestaurant
                ? "border-y border-(--border) py-14 text-center"
                : "border-y border-(--fastfood-border) py-14 text-center"
            }
          >
            <p
              className={
                isRestaurant
                  ? "font-display text-3xl text-(--foreground)"
                  : "font-fastfood-display text-3xl font-bold uppercase text-(--fastfood-cream)"
              }
            >
              Aucun résultat
            </p>

            <p
              className={
                isRestaurant
                  ? "mx-auto mt-3 max-w-md text-sm leading-6 text-(--muted)"
                  : "mx-auto mt-3 max-w-md text-sm leading-6 text-(--fastfood-muted)"
              }
            >
              Aucun article ne correspond à{" "}
              « {searchQuery.trim()} ».
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className={
                isRestaurant
                  ? "mt-6 inline-flex min-h-11 items-center justify-center border border-(--border-strong) px-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-(--brand) transition-colors duration-200 hover:bg-(--brand) hover:text-(--surface)"
                  : "mt-6 inline-flex min-h-11 items-center justify-center border border-(--fastfood-border-strong) px-6 text-[9px] font-extrabold uppercase tracking-[0.16em] text-(--fastfood-gold-soft) transition-colors duration-200 hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
              }
            >
              Effacer la recherche
            </button>
          </div>
        )}

        {!isSearching && (
          <p
            className={
              isRestaurant
                ? "mt-7 text-center text-[9px] uppercase tracking-[0.18em] text-(--muted-subtle)"
                : "mt-7 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-(--fastfood-muted-deep)"
            }
          >
            Touchez une catégorie pour
            afficher son contenu
          </p>
        )}
      </div>
    </section>
  );
}