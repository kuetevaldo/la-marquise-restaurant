import Reveal from "@/components/ui/Reveal";
import MenuItem from "@/components/menu/MenuItem";

import type {
  MenuCategoryData,
} from "@/components/menu/MenuData";

type MenuCategoryProps = {
  category: MenuCategoryData;
  accent?: string;
};

export default function MenuCategory({
  category,
  accent = "var(--brand)",
}: MenuCategoryProps) {
  return (
    <section
      id={category.id}
      className="menu-category-section border-t border-[var(--border)]"
    >
      <Reveal>

        <div className="mb-8 md:mb-10">

          <div className="mb-4 flex items-center gap-4">
            <span
              className="h-px w-9"
              style={{ backgroundColor: accent }}
            />

            <p
              className="text-[9px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: accent }}
            >
              La carte
            </p>
          </div>

          <h3 className="font-display text-4xl font-medium leading-none text-[var(--foreground)] sm:text-5xl">
            {category.name}
          </h3>

          {category.description && (
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted-soft)]">
              {category.description}
            </p>
          )}

        </div>

      </Reveal>

      {category.items.length > 0 ? (
        <div className="grid gap-x-12 lg:grid-cols-2">

          {category.items.map((item) => (
            <MenuItem
              key={`${category.id}-${item.name}`}
              item={item}
              accent={accent}
            />
          ))}

        </div>
      ) : (
        <p className="border-b border-[var(--border)] pb-6 text-sm italic text-[var(--muted-subtle)]">
          Cette partie de la carte sera ajoutée prochainement.
        </p>
      )}

    </section>
  );
}
