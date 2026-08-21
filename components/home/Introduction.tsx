import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Introduction() {
  return (
    <section
      id="about"
      className="bg-[var(--background)] py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:gap-20 xl:px-16">

        {/* Image reveal */}
        <Reveal>
          <div className="relative aspect-square w-full overflow-hidden bg-[var(--surface-elevated)]">
            <Image
              src="/images/intro.PNG"
              alt="Façade de La Marquise Restaurant à Bonapriso, Douala"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/5" />

            <div className="absolute inset-x-0 top-0 h-[38%] bg-linear-to-b from-black/25 via-black/15 to-transparent" />

            <div className="absolute bottom-5 left-5 border border-[var(--border)] bg-[var(--background)]/80 px-3 py-2">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--foreground-soft)]">
                Bonapriso · Douala
              </p>
            </div>
          </div>
        </Reveal>

        {/* Text reveal */}
        <Reveal delay={0.12}>
          <div className="w-full max-w-xl lg:justify-self-end">

            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--brand)]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand)] sm:text-[11px]">
                Bienvenue à La Marquise
              </p>
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
              L&apos;art

              <span className="block italic text-[var(--brand-light)]">
                de recevoir.
              </span>
            </h2>

            <div className="mt-8 h-px w-16 bg-[var(--border-strong)]" />

            <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
              À La Marquise, chaque détail est pensé pour créer une expérience
              chaleureuse et élégante. Une cuisine généreuse, un cadre raffiné
              et une atmosphère idéale pour partager des moments en famille,
              entre amis ou à l&apos;occasion d&apos;événements particuliers.
            </p>

            <a
              href="#experience"
              className="group mt-9 inline-flex min-h-12 items-center gap-3 border-b border-[var(--border)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--brand)] hover:text-[var(--brand-light)] sm:text-[11px]"
            >
              Découvrir notre univers

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
