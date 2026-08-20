import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function MenuCTA() {
  return (
    <section className="border-t border-white/10 bg-[#0b0b0a] py-20 sm:py-24 md:py-28">

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto mb-6 h-px w-10 bg-[#b99a5b]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b99a5b]">
              La Marquise
            </p>

            <h2 className="font-display mt-5 text-4xl font-medium leading-tight text-[#f5f1e8] sm:text-5xl md:text-6xl">
              Une envie particulière ?

              <span className="block italic text-[#d8c49c]">
                Venez la savourer.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#aaa398] md:text-base md:leading-8">
              Réservez votre table et profitez de
              l&apos;expérience La Marquise à Bonapriso.
            </p>

            <Link
              href="/#reservation"
              className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[#b99a5b] px-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#11100e] transition-colors duration-300 hover:bg-[#d8c49c] sm:text-[11px]"
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