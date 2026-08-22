import { FaWhatsapp } from "react-icons/fa";

import type {
  MenuItemData,
} from "@/components/menu/MenuData";

type MenuItemProps = {
  item: MenuItemData;
  accent?: string;
  theme?: "restaurant" | "fastfood";
};

function formatPrice(price: number) {
  return new Intl.NumberFormat(
    "fr-FR"
  ).format(price);
}

function buildWhatsAppUrl(item: MenuItemData) {
  let productDetails = item.name;

  // Item with one fixed price
  if (item.price !== undefined) {
    productDetails += ` — ${formatPrice(
      item.price
    )} FCFA`;
  }

  // Item with several sizes / variants
  if (item.prices && item.prices.length > 0) {
    const options = item.prices
      .map(
        (option) =>
          `${option.label}: ${formatPrice(
            option.price
          )} FCFA`
      )
      .join("\n");

    productDetails += `\n\nOptions :\n${options}`;
  }

  const message =
    `Bonjour La Marquise Fast Food 👋🏾\n\n` +
    `Je souhaite commander :\n` +
    `${productDetails}\n\n` +
    `Pouvez-vous me confirmer la disponibilité ?`;

  return (
    "https://wa.me/237698434343?text=" +
    encodeURIComponent(message)
  );
}

export default function MenuItem({
  item,
  accent = "var(--brand)",
  theme = "restaurant",
}: MenuItemProps) {
  const isRestaurant =
    theme === "restaurant";

  const whatsappUrl =
    !isRestaurant
      ? buildWhatsAppUrl(item)
      : null;

  return (
    <article
      className={
        isRestaurant
          ? "border-b border-(--border) py-6"
          : "border-b border-(--fastfood-border) py-6"
      }
    >
      <div className="flex items-start justify-between gap-5 sm:gap-6">
        <div className="min-w-0 flex-1">
          <h4
            className={
              isRestaurant
                ? "font-display text-2xl leading-tight text-(--foreground) sm:text-[28px]"
                : "font-fastfood-display text-2xl font-bold uppercase leading-tight tracking-[0.01em] text-(--fastfood-cream) sm:text-[28px]"
            }
          >
            {item.name}
          </h4>

          {item.description && (
            <p
              className={
                isRestaurant
                  ? "mt-2 max-w-xl text-xs leading-6 text-(--muted-soft) sm:text-sm"
                  : "mt-2 max-w-xl text-xs leading-6 text-(--fastfood-muted) sm:text-sm"
              }
            >
              {item.description}
            </p>
          )}
        </div>

        {item.price !== undefined && (
          <p
            className="shrink-0 text-right text-sm font-extrabold tabular-nums sm:text-base"
            style={{
              color: accent,
            }}
          >
            {formatPrice(item.price)}

            <span className="ml-1 text-[9px] uppercase tracking-widest">
              FCFA
            </span>
          </p>
        )}
      </div>

      {/* Multiple price options */}
      {item.prices &&
        item.prices.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {item.prices.map((price) => (
              <div
                key={`${item.name}-${price.label}`}
                className="flex items-center gap-3"
              >
                <span
                  className={
                    isRestaurant
                      ? "text-[9px] font-semibold uppercase tracking-[0.18em] text-(--muted-subtle)"
                      : "text-[9px] font-bold uppercase tracking-[0.18em] text-(--fastfood-muted-deep)"
                  }
                >
                  {price.label}
                </span>

                <span
                  className="text-sm font-extrabold tabular-nums"
                  style={{
                    color: accent,
                  }}
                >
                  {formatPrice(
                    price.price
                  )}{" "}
                  FCFA
                </span>
              </div>
            ))}
          </div>
        )}

      {/* Fast Food ordering action */}
      {!isRestaurant &&
        whatsappUrl && (
          <div className="mt-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Commander ${item.name} sur WhatsApp`}
              className="group inline-flex min-h-10 items-center gap-2 border border-(--fastfood-border-strong) px-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-(--fastfood-gold-soft) transition-colors duration-200 hover:border-(--fastfood-gold) hover:bg-(--fastfood-gold) hover:text-(--fastfood-ink)"
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
        )}
    </article>
  );
}