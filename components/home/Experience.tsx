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
      className="border-t border-[var(--border)] bg-[var(--background)] py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[var(--brand)]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--brand)] sm:text-[11px]">
                L&apos;expérience
              </p>

              <span className="h-px w-10 bg-[var(--brand)]" />
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
              Plus qu&apos;un repas,

              <span className="mt-2 block italic text-[var(--brand-light)]">
                un moment.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
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
            <div className="relative min-h-105 w-full overflow-hidden bg-[var(--surface-elevated)] sm:min-h-130 lg:min-h-160">
              <Image
                src="/images/experience/main.png"
                alt="Salle intérieure de La Marquise Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.015]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-black/10" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-light)]">
                  Bonapriso · Douala
                </p>

                <h3 className="font-display mt-3 max-w-md text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
                  Un cadre pensé pour
                  <span className="italic text-[var(--brand-light)]">
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
              <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface-elevated)]">
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
            <Reveal delay={0.08} y={18}>
              <div className="mt-8 border-t border-[var(--border)]">
                {experiences.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-4 sm:py-5"
                  >
                    <p className="font-display text-xl text-[var(--foreground)] sm:text-2xl">
                      {item}
                    </p>

                    <span
                      aria-hidden="true"
                      className="h-px w-8 shrink-0 bg-[var(--brand)] opacity-60"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
