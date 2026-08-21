import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function MenuCTA() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] py-20 sm:py-24 md:py-28">

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto mb-6 h-px w-10 bg-[var(--brand)]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--brand)]">
              La Marquise
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Une envie particulière ?

              <span className="block italic text-[var(--brand-light)]">
                Venez la savourer.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
              Réservez votre table et profitez de
              l&apos;expérience La Marquise à Bonapriso.
            </p>

            <Link
              href="/#reservation"
              className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--brand)] px-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--surface)] transition-colors duration-300 hover:bg-[var(--brand-light)] sm:text-[11px]"
            >
              Réserver une table

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
