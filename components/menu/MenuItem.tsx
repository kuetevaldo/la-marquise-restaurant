import type { MenuItemData } from "@/components/menu/MenuData";

type MenuItemProps = {
  item: MenuItemData;
  accent?: string;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price);
}

export default function MenuItem({
  item,
  accent = "#b99a5b",
}: MenuItemProps) {
  return (
    <article className="border-b border-white/10 py-6">
      <div className="flex items-start justify-between gap-6">

        <div className="min-w-0 flex-1">
          <h4 className="font-display text-2xl leading-tight text-[#f5f1e8] sm:text-[28px]">
            {item.name}
          </h4>

          {item.description && (
            <p className="mt-2 max-w-xl text-xs leading-6 text-[#716c64] sm:text-sm">
              {item.description}
            </p>
          )}
        </div>

        {item.price !== undefined && (
          <p
            className="shrink-0 text-sm font-semibold tabular-nums sm:text-base"
            style={{ color: accent }}
          >
            {formatPrice(item.price)}
            <span className="ml-1 text-[9px] uppercase tracking-widest">
              FCFA
            </span>
          </p>
        )}

      </div>

      {item.prices && item.prices.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          {item.prices.map((price) => (
            <div
              key={`${item.name}-${price.label}`}
              className="flex items-center gap-3"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#68635c]">
                {price.label}
              </span>

              <span
                className="text-sm font-semibold tabular-nums"
                style={{ color: accent }}
              >
                {formatPrice(price.price)} FCFA
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}