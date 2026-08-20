import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const experiences = [
  "Déjeuner",
  "Dîner",
  "Moments en famille",
  "Célébrations",
  "Dîners privés",
  "Afterwork",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 bg-[#0b0b0a] py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#b99a5b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b99a5b] sm:text-[11px]">
                L&apos;expérience
              </p>

              <span className="h-px w-10 bg-[#b99a5b]" />
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-[#f5f1e8] sm:text-6xl md:text-7xl">
              Plus qu&apos;un repas,

              <span className="mt-2 block italic text-[#d8c49c]">
                un moment.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#aaa398] md:text-base md:leading-8">
              La Marquise accompagne chaque occasion dans une atmosphère
              chaleureuse et soignée, du déjeuner au dîner, des rencontres entre
              amis aux célébrations plus particulières.
            </p>
          </div>
        </Reveal>

        {/* Main layout */}
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">

          {/* Main image */}
          <Reveal y={30}>
            <div className="relative min-h-105 w-full overflow-hidden bg-[#161513] sm:min-h-130 lg:min-h-160">
              <Image
                src="/images/experience/main.png"
                alt="Salle intérieure de La Marquise Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.015]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-black/10" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d8c49c]">
                  Bonapriso · Douala
                </p>

                <h3 className="font-display mt-3 max-w-md text-3xl leading-tight text-[#f5f1e8] sm:text-4xl">
                  Un cadre pensé pour
                  <span className="italic text-[#d8c49c]">
                    {" "}
                    chaque moment.
                  </span>
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Right side */}
          <div className="flex min-w-0 flex-col">

            {/* Detail image */}
            <Reveal delay={0.1} y={24}>
              <div className="relative aspect-video w-full overflow-hidden bg-[#161513]">
                <Image
                  src="/images/experience/detail.png"
                  alt="Table dressée à La Marquise Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </Reveal>

            {/* Experience list */}
            <div className="mt-8 border-t border-white/10">
              {experiences.map((item, index) => (
                <Reveal
                  key={item}
                  delay={0.08 + index * 0.06}
                  y={18}
                >
                  <div className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:py-5">
                    <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                      <span className="shrink-0 text-[10px] tracking-[0.18em] text-[#68635c]">
                        0{index + 1}
                      </span>

                      <p className="font-display truncate text-xl text-[#f5f1e8] transition-colors duration-300 group-hover:text-[#d8c49c] sm:text-2xl">
                        {item}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm text-[#68635c] transition duration-300 group-hover:translate-x-1 group-hover:text-[#b99a5b]">
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}