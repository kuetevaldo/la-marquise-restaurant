import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function FamilySection() {
  return (
    <section
      id="family"
      className="border-t border-white/10 bg-[#141310] py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16">

        {/* Text */}
        <Reveal y={24}>
          <div className="order-2 w-full max-w-xl lg:order-1">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a5b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b99a5b] sm:text-[11px]">
                À partager
              </p>
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-[#f5f1e8] sm:text-6xl md:text-7xl">
              Des moments
              <span className="mt-2 block italic text-[#d8c49c]">
                qui rassemblent.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#aaa398] md:text-base md:leading-8">
              Déjeuner en famille, dîner entre amis ou célébration particulière,
              La Marquise offre un cadre chaleureux pour profiter pleinement de
              chaque moment autour de la table.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#reservation"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#b99a5b] px-7 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#11100e] transition-colors duration-300 hover:bg-[#d8c49c] sm:px-8 sm:text-[11px]"
              >
                Réserver une table
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#events"
                className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/20 px-7 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f5f1e8] transition duration-300 hover:border-[#b99a5b] hover:bg-white/5 hover:text-[#d8c49c] sm:px-8 sm:text-[11px]"
              >
                Nos événements
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Image */}
        <Reveal delay={0.12} y={28}>
          <div className="order-1 w-full lg:order-2">
            <div className="group relative aspect-4/3 w-full overflow-hidden bg-[#1a1916]">
              <Image
                src="/images/family/family.png"
                alt="Moment de célébration à La Marquise Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10" />

              <div className="absolute bottom-5 left-5 border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-sm">
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/70">
                  Moments · Célébrations
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}