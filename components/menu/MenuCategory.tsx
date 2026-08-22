"use client";

import { useId } from "react";

import MenuItem from "@/components/menu/MenuItem";

import type {
  MenuCategoryData,
} from "@/components/menu/MenuData";

type MenuCategoryProps = {
  category: MenuCategoryData;
  accent?: string;
  theme?: "restaurant" | "fastfood";
  isOpen: boolean;
  onToggle: () => void;
};

export default function MenuCategory({
  category,
  accent = "var(--brand)",
  theme = "restaurant",
  isOpen,
  onToggle,
}: MenuCategoryProps) {
  const contentId = useId();

  const isRestaurant =
    theme === "restaurant";

  return (
    <section
      id={category.id}
      className={
        isRestaurant
          ? "border-b border-(--border)"
          : "border-b border-(--fastfood-border)"
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={`group flex min-h-20 w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200 sm:min-h-24 sm:py-6 ${
          isRestaurant
            ? "hover:text-(--brand-light)"
            : "hover:bg-(--fastfood-surface)"
        }`}
      >
        <div className="min-w-0">
          <p
            className="text-[9px] font-bold uppercase tracking-[0.26em]"
            style={{
              color: accent,
            }}
          >
            {isRestaurant
              ? "La carte"
              : "Le menu"}
          </p>

          <h3
            className={
              isRestaurant
                ? "font-display mt-2 text-3xl font-medium leading-none text-(--foreground) sm:text-4xl"
                : "font-fastfood-display mt-2 text-3xl font-bold uppercase leading-none tracking-[0.01em] text-(--fastfood-cream) sm:text-4xl"
            }
          >
            {category.name}
          </h3>

          {category.description && (
            <p
              className={
                isRestaurant
                  ? "mt-2 max-w-xl text-xs leading-5 text-(--muted-soft) sm:text-sm sm:leading-6"
                  : "mt-2 max-w-xl text-xs leading-5 text-(--fastfood-muted) sm:text-sm sm:leading-6"
              }
            >
              {category.description}
            </p>
          )}
        </div>

        <span
          aria-hidden="true"
          className={
            isRestaurant
              ? "relative flex h-11 w-11 shrink-0 items-center justify-center border border-(--border-strong)"
              : "relative flex h-11 w-11 shrink-0 items-center justify-center border border-(--fastfood-border-strong) bg-(--fastfood-deep)"
          }
        >
          <span
            className="absolute h-px w-4"
            style={{
              backgroundColor: accent,
            }}
          />

          <span
            className={`absolute h-4 w-px transition-[opacity,transform] duration-200 ${
              isOpen
                ? "rotate-90 opacity-0"
                : "rotate-0 opacity-100"
            }`}
            style={{
              backgroundColor: accent,
            }}
          />
        </span>
      </button>

      <div
        id={contentId}
        hidden={!isOpen}
      >
        <div className="pb-10 sm:pb-12">
          {category.items.length > 0 ? (
            <div className="grid gap-x-12 lg:grid-cols-2">
              {category.items.map((item) => (
                <MenuItem
                  key={`${category.id}-${item.name}`}
                  item={item}
                  accent={accent}
                  theme={theme}
                />
              ))}
            </div>
          ) : (
            <p
              className={
                isRestaurant
                  ? "pb-5 text-sm italic text-(--muted-subtle)"
                  : "pb-5 text-sm italic text-(--fastfood-muted-deep)"
              }
            >
              Cette partie de la carte sera ajoutée prochainement.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}