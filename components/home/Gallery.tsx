import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const gallery = [
  {
    src: "/images/gallery/ambiance.png",
    alt: "Ambiance intérieure de La Marquise",
    className: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    src: "/images/gallery/table.png",
    alt: "Détail de table à La Marquise",
    className: "",
    featured: false,
  },
  {
    src: "/images/gallery/dish.png",
    alt: "Plat servi à La Marquise",
    className: "",
    featured: false,
  },
  {
    src: "/images/gallery/moment.png",
    alt: "Moment convivial à La Marquise",
    className: "",
    featured: false,
  },
  {
    src: "/images/gallery/deco.png",
    alt: "Décoration et ambiance de La Marquise",
    className: "",
    featured: false,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="border-t border-(--border) bg-(--surface) py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Header */}
        <Reveal>
          <div className="mb-14 flex flex-col gap-7 md:mb-16 md:flex-row md:items-end md:justify-between">

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-(--brand)" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-(--brand) sm:text-[11px]">
                  La Marquise en images
                </p>
              </div>

              <h2 className="font-display max-w-2xl text-5xl font-medium leading-[0.96] tracking-tight text-(--foreground) sm:text-6xl md:text-7xl">
                Une atmosphère
                <span className="block italic text-(--brand-light)">
                  à découvrir.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-(--muted) md:text-base md:leading-8">
              Quelques instants, détails et ambiances qui racontent l&apos;univers
              de La Marquise.
            </p>

          </div>
        </Reveal>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">

          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.08}
              y={22}
              className={image.className}
            >
              <div
                className={`group relative overflow-hidden bg-(--surface-soft) ${
                  image.featured
                    ? "min-h-90 sm:min-h-105 md:min-h-125"
                    : "min-h-60 sm:min-h-65"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={image.featured ? 95 : 88}
                  sizes={
                    image.featured
                      ? "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 620px"
                      : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 320px"
                  }
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/12" />
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
