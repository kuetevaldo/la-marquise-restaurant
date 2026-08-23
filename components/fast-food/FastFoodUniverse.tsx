import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    id: "burgers",
    number: "01",
    title: "Burgers",
    description:
      "Des burgers généreux, gourmands et préparés pour satisfaire toutes les envies.",
    image:
      "/images/fast-food/univers-burger.png",
    imageClass:
      "w-[240px] sm:w-[280px] lg:w-[310px]",
  },
  {
    id: "pizzas",
    number: "02",
    title: "Pizzas",
    description:
      "Des pizzas généreusement garnies, à partager ou à savourer seul.",
    image:
      "/images/fast-food/univers-pizza.png",
    imageClass:
      "w-[250px] sm:w-[290px] lg:w-[320px]",
  },
  {
    id: "fried-chicken",
    number: "03",
    title: "Fried Chicken",
    description:
      "Du poulet croustillant, doré et gourmand pour les petites comme les grandes faims.",
    image:
      "/images/fast-food/univers-fried-chicken.png",
    imageClass:
      "w-[250px] sm:w-[290px] lg:w-[320px]",
  },
];

export default function FastFoodUniverse() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-(--fastfood-border) bg-(--fastfood-background) py-20 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-(--fastfood-gold)/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-black/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-(--fastfood-gold)">
              L&apos;univers Fast Food
            </p>

            <h2 className="font-fastfood-display mt-5 text-5xl font-extrabold uppercase leading-[0.86] tracking-tight text-(--fastfood-cream) sm:text-6xl md:text-7xl lg:text-8xl">
              Une carte généreuse,
              <span className="block text-(--fastfood-gold-soft)">
                servie sans détour.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-(--fastfood-muted) md:text-base md:leading-8">
              Burgers, pizzas et fried chicken :
              trois incontournables au cœur de
              l&apos;univers La Marquise Fast Food.
            </p>
          </div>
        </Reveal>

        {/* Categories */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-4 lg:mt-20 lg:gap-6">
          {categories.map(
            (
              category,
              index
            ) => (
              <Reveal
                key={category.id}
                delay={index * 0.08}
                y={24}
              >
                <Link
                  href="/fast-food#menu"
                  className="group relative flex h-full min-h-117.5 flex-col overflow-hidden border border-(--fastfood-border) bg-(--fastfood-surface) p-5 transition-all duration-300 hover:-translate-y-1 hover:border-(--fastfood-border-strong) sm:p-6 md:min-h-122.5 lg:min-h-127.5 lg:p-7"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-(--fastfood-gold)">
                      {category.number}
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-(--fastfood-muted-deep)">
                      Sélection
                    </span>
                  </div>

                  {/* Product */}
                 <div className="relative flex min-h-56.25 flex-1 items-center justify-center py-3">
                    <div
                      aria-hidden="true"
                      className="absolute h-44 w-44 rounded-full bg-(--fastfood-gold)/8 blur-3xl transition-transform duration-500 group-hover:scale-125"
                    />

                    <Image
                      src={category.image}
                      alt={category.title}
                      width={500}
                      height={500}
                      quality={95}
                      className={`${category.imageClass} relative z-10 h-auto object-contain drop-shadow-[0_24px_35px_rgba(30,0,0,0.35)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100`}
                    />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 border-t border-(--fastfood-border) pt-6">
                    <h3 className="font-fastfood-display text-4xl font-extrabold uppercase leading-none text-(--fastfood-cream) sm:text-5xl">
                      {category.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-(--fastfood-muted)">
                      {
                        category.description
                      }
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-(--fastfood-gold-soft)">
                        Découvrir la carte
                      </span>

                      <span className="text-xl text-(--fastfood-gold) transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}