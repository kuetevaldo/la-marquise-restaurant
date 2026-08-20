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
  accent = "#b99a5b",
}: MenuCategoryProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-52 border-t border-white/10 ..."
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

          <h3 className="font-display text-4xl font-medium leading-none text-[#f5f1e8] sm:text-5xl">
            {category.name}
          </h3>

          {category.description && (
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#716c64]">
              {category.description}
            </p>
          )}

        </div>

      </Reveal>

      {category.items.length > 0 ? (
        <div className="grid gap-x-12 lg:grid-cols-2">

          {category.items.map((item, index) => (
            <Reveal
              key={`${category.id}-${item.name}`}
              delay={(index % 6) * 0.035}
              y={14}
            >
              <MenuItem
                item={item}
                accent={accent}
              />
            </Reveal>
          ))}

        </div>
      ) : (
        <p className="border-b border-white/10 pb-6 text-sm italic text-[#5f5b55]">
          Cette partie de la carte sera ajoutée prochainement.
        </p>
      )}

    </section>
  );
}