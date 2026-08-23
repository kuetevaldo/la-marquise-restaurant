import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const dishes = [
  {
    name: "Crevettes sautées",
    description:
      "Crevettes sautées, délicatement assaisonnées et servies dans une présentation généreuse.",
    image: "/images/crevette.png",
  },
  {
    name: "Saumon Maki",
    description:
      "Maki au saumon, préparé avec finesse pour une bouchée fraîche et raffinée.",
    image: "/images/saumon.png",
  },
  {
    name: "Cotelette d'agneau",
    description:
      "Une cotelette d'agneau juteuse, accompagnée de légumes grillés et d'une sauce au vin rouge.",
    image: "/images/beof.jpg",
  },
];

export default function SignatureDishes() {
  return (
    <section
      id="signatures"
      className="border-t border-(--border) bg-(--surface) py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-(--brand)" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-(--brand) sm:text-[11px]">
                Nos signatures
              </p>

              <span className="h-px w-10 bg-(--brand)" />
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-(--foreground) sm:text-6xl md:text-7xl">
              Une cuisine

              <span className="mt-2 block italic text-(--brand-light)">
                qui se partage.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-(--muted) md:text-base md:leading-8">
              Une sélection de créations inspirées de l&apos;univers culinaire de
              La Marquise, pensées pour être découvertes, savourées et partagées.
            </p>
          </div>
        </Reveal>

        {/* Dish cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {dishes.map((dish, index) => (
            <Reveal
              key={dish.name}
              delay={index * 0.1}
              y={24}
              className="min-w-0"
            >
              <article className="group min-w-0">
                <div className="relative aspect-4/3 overflow-hidden bg-(--surface-soft)">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/5" />

                </div>

                <div className="pt-5 sm:pt-6">
                  <h3 className="font-display text-3xl font-medium leading-tight text-(--foreground)">
                    {dish.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-(--muted-soft)">
                    {dish.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-(--border)" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex justify-center md:mt-20">
           <Link
 href="/restaurant#menu"
  className="group inline-flex min-h-14 min-w-60 items-center justify-center gap-3 border border-(--brand) bg-(--brand) px-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-(--surface) transition-colors duration-300 hover:border-(--brand-light) hover:bg-(--brand-light) sm:text-[11px]"
>
  Voir toute la carte

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
