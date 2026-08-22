import Image from "next/image";
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

export default function Hero() {
  return (
    <section className="home-hero relative flex items-center overflow-hidden bg-(--background)">
      <Image
        src="/images/hero.image.jpg"
        alt="Interior of La Marquise Restaurant"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.92)_0%,rgba(5,5,4,0.76)_34%,rgba(5,5,4,0.42)_62%,rgba(5,5,4,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,4,0.9)_0%,rgba(5,5,4,0.3)_32%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(203,166,127,0.10),transparent_38%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-14 md:py-16 lg:px-12 xl:px-16">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div
            className="premium-enter mb-6 flex items-center gap-4"
            style={enterStyle(100, 680, 12)}
          >
            <span className="h-px w-10 bg-(--brand)" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-(--brand) sm:text-[11px] md:text-xs">
              Restaurant · Bonapriso, Douala
            </p>
          </div>

          {/* Heading */}
          <h1
            aria-label="Une expérience à savourer."
            className="font-display max-w-4xl text-5xl font-medium leading-[0.94] tracking-tight text-(--foreground) sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[92px]"
          >
            <span
              className="premium-enter block"
              style={enterStyle(180, 800, 20)}
            >
              Une expérience
            </span>
            <span
              className="premium-enter block italic text-(--brand-light)"
              style={enterStyle(270, 850, 20)}
            >
              à savourer.
            </span>
          </h1>

          {/* Bottom content */}
          <div
            className="mt-10 flex max-w-5xl flex-col gap-7 border-t border-(--border-strong) pt-7 lg:flex-row lg:items-end lg:justify-between"
          >
            <p
              className="premium-enter max-w-xl text-sm leading-7 text-(--foreground-soft) md:text-base md:leading-8"
              style={enterStyle(390, 760, 16)}
            >
              Cuisine généreuse, cadre élégant et moments pensés pour être
              partagés au cœur de Bonapriso.
            </p>

            <div
              className="premium-enter flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              style={enterStyle(520, 760, 16)}
            >
  <Link
    href="/restaurant#reservation"
    className="group inline-flex min-h-14 items-center justify-center gap-3 border border-(--brand) bg-(--brand) px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--surface) transition-colors duration-300 hover:border-(--brand-light) hover:bg-(--brand-light) sm:px-8 sm:text-[11px]"
  >
    Réserver une table

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <Link
    href="/restaurant#menu"
    className="group inline-flex min-h-14 items-center justify-center gap-3 border border-(--border-strong) bg-(--surface)/55 px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--foreground) transition-colors duration-300 hover:border-(--brand) hover:bg-(--surface) hover:text-(--brand-light) sm:px-8 sm:text-[11px]"
  >
    Découvrir la carte

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
          </div>

        </div>
      </div>
    </section>
  );
}
