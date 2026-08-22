import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Marquise | Restaurant & Fast Food à Douala",
  description:
    "Découvrez La Marquise à Bonapriso, Douala : Restaurant pour une expérience raffinée et Fast Food pour burgers, pizzas, fried chicken et gourmandises.",
  openGraph: {
    title: "La Marquise | Deux univers. Une signature.",
    description:
      "Restaurant & Fast Food à Bonapriso, Douala. Choisissez votre expérience La Marquise.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function Home() {
  return (
    <main
  id="main-content"
  tabIndex={-1}
  className="min-h-screen bg-[#0b0b0a] text-[#f5f1e8]"
>
      <section className="mx-auto flex min-h-svh w-full max-w-[1800px] flex-col px-5 py-5 sm:px-8 sm:py-6 md:px-10 lg:px-12 xl:px-16">

        {/* Compact intro */}
        <div className="py-5 text-center sm:py-6 md:py-7">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#cba67f]">
            La Marquise · Douala
          </p>

          <h1 className="font-display mt-3 text-4xl font-medium leading-none text-[#f5f1e8] sm:text-5xl md:text-6xl">
            Deux univers.
            <span className="ml-2 italic text-[#e2c8a8]">
              Une signature.
            </span>
          </h1>
        </div>

        {/* Gateway cards */}
        <div className="grid flex-1 gap-4 pb-5 md:grid-cols-2 md:gap-5">

          {/* Restaurant */}
          <Link
            href="/restaurant"
            aria-label="Découvrir La Marquise Restaurant"
            className="group relative min-h-107.5 overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_center,#282522_0%,#161412_48%,#0b0b0a_100%)] outline-none transition-colors duration-300 hover:border-[#cba67f]/70 focus-visible:border-[#cba67f] focus-visible:ring-2 focus-visible:ring-[#cba67f]/60 sm:min-h-125 md:min-h-140"
          >
            {/* Loading / fallback branding */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/menu/restaurant-brand.png"
                alt=""
                width={220}
                height={220}
                priority
                className="h-auto w-33.75 opacity-20 sm:w-41.25"
              />
            </div>

            {/* Main image */}
            <Image
              src="/images/menu/restaurant-brand.png"
              alt="La Marquise Restaurant"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-linear-to-t from-black from-0% via-black/45 via-55% to-black/5 to-100%" />

            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-0.75 bg-[#cba67f]"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#cba67f]">
                La Marquise
              </p>

              <h2 className="font-display mt-3 text-5xl font-medium leading-none text-[#f5f1e8] sm:text-6xl md:text-7xl">
                Restaurant
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                Cuisine raffinée, bar, cave et moments à partager.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5f1e8]">
                  Découvrir le Restaurant
                </span>

                <span className="text-xl text-[#cba67f] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* Fast Food */}
          <Link
            href="/fast-food"
            aria-label="Découvrir La Marquise Fast Food"
            className="group relative min-h-107.5 overflow-hidden border border-[rgba(242,178,51,0.2)] bg-[radial-gradient(circle_at_center,#9b1616_0%,#6f0b0b_50%,#420505_100%)] outline-none transition-colors duration-300 hover:border-[#f2b233]/80 focus-visible:border-[#f2b233] focus-visible:ring-2 focus-visible:ring-[#f2b233]/60 sm:min-h-125 md:min-h-140"
          >
            {/* Loading / fallback branding */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/fast-food/fastfood-logo.png"
                alt=""
                width={180}
                height={180}
                quality={95}
                className="h-auto w-27.5 opacity-25 sm:w-33.75"
              />
            </div>

            {/* Main image */}
            <Image
              src="/images/menu/fastfood-brand.png"
              alt="La Marquise Fast Food"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div className="absolute inset-0 bg-[#6f0b0b]/18" />

            <div className="absolute inset-0 bg-linear-to-t from-[#4b0505] from-0% via-[#6f0b0b]/55 via-55% to-transparent to-100%" />

            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-0.75 bg-[#f2b233]"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#f7c45a]">
                La Marquise
              </p>

              <h2 className="font-fastfood-display mt-3 text-5xl font-extrabold uppercase leading-[0.86] tracking-tight text-[#fff4df] sm:text-6xl md:text-7xl">
                Fast Food
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#eed9c4]">
                Burgers, pizzas, fried chicken et gourmandises.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-[rgba(242,178,51,0.22)] pt-5">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#fff4df]">
                  Découvrir le Fast Food
                </span>

                <span className="text-xl text-[#f2b233] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom cue */}
        <div className="pb-2 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
            Deux expériences · Une même maison
          </p>
        </div>
      </section>
    </main>
  );
}