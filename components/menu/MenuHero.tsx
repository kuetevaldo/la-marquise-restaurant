import Link from "next/link";
import type { CSSProperties } from "react";

type PremiumEnterStyle = CSSProperties & {
  "--premium-enter-delay": string;
  "--premium-enter-duration": string;
  "--premium-enter-y": string;
};

function enterStyle(
  delay: number,
  duration: number,
  y: number
): PremiumEnterStyle {
  return {
    "--premium-enter-delay": `${delay}ms`,
    "--premium-enter-duration": `${duration}ms`,
    "--premium-enter-y": `${y}px`,
  };
}

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden border-b border-(--border) bg-(--background) pb-20 pt-16 sm:pb-24 sm:pt-20 md:pb-28">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(203,166,127,0.07),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <div
          className="premium-enter mb-6 flex items-center gap-4"
          style={enterStyle(0, 700, 15)}
        >
          <span className="h-px w-10 bg-(--brand)" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-(--brand) sm:text-[11px]">
            Notre carte
          </p>
        </div>

        <h1
          className="premium-enter font-display max-w-5xl text-5xl font-medium leading-[0.94] tracking-tight text-(--foreground) sm:text-6xl md:text-7xl lg:text-[82px]"
          style={enterStyle(80, 850, 30)}
        >
          Deux identités,

          <span className="mt-2 block italic text-(--brand-light)">
            une même signature.
          </span>
        </h1>

        <div
          className="premium-enter mt-10 grid max-w-5xl gap-8 border-t border-(--border) pt-8 md:grid-cols-2"
          style={enterStyle(200, 800, 20)}
        >

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-(--brand)">
              La Marquise Restaurant
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted) md:text-base md:leading-8">
              Une carte internationale et orientale pensée
              autour d&apos;une expérience plus raffinée :
              cuisine, bar, cocktails et cave.
            </p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-(--fastfood-light)">
              La Marquise Fast Food
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted) md:text-base md:leading-8">
              Une sélection généreuse de burgers, pizzas,
              fried chicken, desserts et boissons pour une
              expérience plus décontractée.
            </p>
          </div>

        </div>

        <div
          className="premium-enter mt-10"
          style={enterStyle(400, 700, 0)}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-(--muted-soft) transition-colors duration-300 hover:text-(--brand-light)"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Retour au restaurant
          </Link>
        </div>

      </div>
    </section>
  );
}
