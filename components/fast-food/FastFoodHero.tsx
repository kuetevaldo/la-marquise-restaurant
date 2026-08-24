import Image from "next/image";
import type { CSSProperties } from "react";

const whatsappUrl =
  "https://wa.me/237698434343?text=" +
  encodeURIComponent(
    "Bonjour La Marquise Fast Food 👋🏾\nJe souhaite passer une commande."
  );

type EnterStyle = CSSProperties & {
  "--premium-enter-delay": string;
  "--premium-enter-y": string;
};

function enterStyle(delay: number, y = 18): EnterStyle {
  return {
    "--premium-enter-delay": `${delay}ms`,
    "--premium-enter-y": `${y}px`,
  };
}

export default function FastFoodHero() {
  return (
    <section className="home-hero relative flex items-center overflow-hidden bg-(--fastfood-deep)">
      <Image
        src="/images/fast-food/fastfood-hero.JPG"
        alt="Salle de La Marquise Fast Food à Bonapriso"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />

      {/* Image treatment */}
      <div className="absolute inset-0 bg-(--fastfood-deep)/20" />

      <div className="absolute inset-0 bg-linear-to-r from-[#4b0505]/98 from-0% via-(--fastfood-deep)/88 via-43% to-transparent to-85%" />

      <div className="absolute inset-0 bg-linear-to-t from-[#300303]/75 via-transparent to-[#4b0505]/20" />

      {/* Gold accent */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-0.75 bg-(--fastfood-gold)"
      />

      <div className="fastfood-hero-content relative z-10 mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 sm:py-10 md:py-12 lg:px-12 xl:px-16">
        <div className="max-w-3xl">
          {/* Brand label */}
          <div
            className="premium-enter flex items-center gap-4"
            style={enterStyle(80, 10)}
          >
            <span className="h-px w-10 bg-(--fastfood-gold)" />

            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-(--fastfood-gold-soft)">
              La Marquise Fast Food
            </p>
          </div>

          {/* Main headline */}
          <h1 className="font-fastfood-display mt-7 uppercase">
            <span
  className="premium-enter block text-[clamp(3.2rem,8vw,6.5rem)] font-extrabold leading-[0.82] tracking-[-0.04em] text-(--fastfood-cream)"
  style={enterStyle(180, 20)}
>
  Du goût.
</span>

<span
  className="premium-enter mt-2 block text-[clamp(3.2rem,8vw,6.5rem)] font-extrabold leading-[0.82] tracking-[-0.04em] text-(--fastfood-gold-soft)"
  style={enterStyle(250, 20)}
>
  Sans attendre.
</span>
          </h1>

          {/* Supporting copy */}
          <div
            className="premium-enter mt-8 flex max-w-xl gap-4"
            style={enterStyle(330, 14)}
          >
            <span className="mt-2 h-10 w-px shrink-0 bg-(--fastfood-border-strong)" />

            <p className="text-sm leading-7 text-(--fastfood-muted) sm:text-[15px] md:leading-8">
              Burgers, pizzas, fried chicken et gourmandises.
              <span className="block text-(--fastfood-cream)">
                À savourer sur place ou à commander sur WhatsApp.
              </span>
            </p>
          </div>

          {/* Actions */}
          <div
            className="premium-enter mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={enterStyle(410, 14)}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center bg-(--fastfood-gold) px-8 text-[10px] font-extrabold uppercase tracking-[0.18em] text-(--fastfood-ink) transition-colors duration-200 hover:bg-(--fastfood-gold-soft)"
            >
              Commander maintenant
            </a>

            <a
              href="#menu"
              className="inline-flex min-h-14 items-center justify-center border border-(--fastfood-border-strong) bg-[#4b0505]/55 px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-(--fastfood-cream) transition-colors duration-200 hover:border-(--fastfood-gold) hover:text-(--fastfood-gold-soft)"
            >
              Découvrir le menu
            </a>
          </div>

          {/* Bottom info */}
          <div
            className="premium-enter mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-(--fastfood-border) pt-5"
            style={enterStyle(490, 12)}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-(--fastfood-muted-deep)">
              Sur place
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-(--fastfood-muted-deep)">
              À emporter
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-(--fastfood-muted-deep)">
              Commande WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}