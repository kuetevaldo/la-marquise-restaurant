import { FaWhatsapp } from "react-icons/fa";

import Reveal from "@/components/ui/Reveal";
import {
  fastFoodMenu,
  type MenuItemData,
} from "@/components/menu/MenuData";

const featuredNames = [
  "Double Cheese Burger",
  "Zinger Burger",
  "Wings Meal",
  "Pizza Marquise Chicken",
  "Marquise Chicken",
  "Lotus",
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price);
}

function findMenuItem(name: string): MenuItemData | undefined {
  for (const group of fastFoodMenu) {
    for (const category of group.categories) {
      const item = category.items.find(
        (menuItem) => menuItem.name === name
      );

      if (item) {
        return item;
      }
    }
  }

  return undefined;
}

function buildWhatsAppUrl(item: MenuItemData) {
  let details = item.name;

  if (item.price !== undefined) {
    details += ` — ${formatPrice(item.price)} FCFA`;
  }

  if (item.prices?.length) {
    details +=
      "\n\n" +
      item.prices
        .map(
          (option) =>
            `${option.label}: ${formatPrice(option.price)} FCFA`
        )
        .join("\n");
  }

  const message =
    `Bonjour La Marquise Fast Food 👋🏾\n\n` +
    `Je souhaite commander :\n${details}\n\n` +
    `Pouvez-vous me confirmer la disponibilité ?`;

  return (
    "https://wa.me/237698434343?text=" +
    encodeURIComponent(message)
  );
}

export default function FastFoodHighlights() {
  const featured = featuredNames
    .map(findMenuItem)
    .filter(
      (item): item is MenuItemData =>
        item !== undefined
    );

  return (
    <section
      id="incontournables"
      className="border-t border-(--fastfood-border) bg-(--fastfood-deep) py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[0.55fr_1.25fr] lg:items-end">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-(--fastfood-gold-soft)">
              Nos incontournables
            </p>

            <h2 className="font-fastfood-display text-5xl font-extrabold uppercase leading-[0.86] tracking-tight text-(--fastfood-cream) sm:text-6xl md:text-7xl lg:text-8xl">
              À découvrir.
              <span className="block text-(--fastfood-gold-soft)">
                À savourer.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px border border-(--fastfood-border) bg-(--fastfood-border) sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, index) => {
            const whatsappUrl =
              buildWhatsAppUrl(item);

            return (
              <article
                key={item.name}
                className="group flex min-h-72 flex-col bg-(--fastfood) p-6 transition-colors duration-200 hover:bg-(--fastfood-surface-elevated) sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-(--fastfood-gold-soft)">
                    0{index + 1}
                  </p>

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-(--fastfood-muted-deep)">
                    Sélection
                  </p>
                </div>

                <h3 className="font-fastfood-display mt-7 text-3xl font-bold uppercase leading-[0.95] text-(--fastfood-cream) sm:text-4xl">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="mt-4 text-sm leading-6 text-(--fastfood-muted)">
                    {item.description}
                  </p>
                )}

                <div className="mt-auto pt-7">
                  {item.price !== undefined && (
                    <p className="border-t border-(--fastfood-border) pt-4 text-sm font-extrabold tabular-nums text-(--fastfood-gold-soft)">
                      {formatPrice(item.price)} FCFA
                    </p>
                  )}

                  {item.prices &&
                    item.prices.length > 0 && (
                      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-(--fastfood-border) pt-4">
                        {item.prices.map(
                          (option) => (
                            <div
                              key={`${item.name}-${option.label}`}
                            >
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-(--fastfood-muted-deep)">
                                {option.label}
                              </p>

                              <p className="mt-1 text-sm font-extrabold tabular-nums text-(--fastfood-gold-soft)">
                                {formatPrice(
                                  option.price
                                )}{" "}
                                FCFA
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    )}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Commander ${item.name} sur WhatsApp`}
                    className="group mt-3 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border border-(--fastfood-gold) bg-transparent px-5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-(--fastfood-gold-soft) transition-all duration-300 hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
                  >
                    <FaWhatsapp className="text-sm" />

                    Commander

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}