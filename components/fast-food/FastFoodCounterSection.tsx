import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function FastFoodCounterSection() {
  return (
    <section className="border-y border-(--fastfood-border) bg-(--fastfood) py-10 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <Reveal>
          <div className="relative h-80 overflow-hidden border border-(--fastfood-border-strong) sm:h-105 md:h-130 lg:h-155">
            <Image
  src="/images/fast-food/fastfood-counter.jpg"
  alt="Comptoir de La Marquise Fast Food à Bonapriso"
  fill
  sizes="(max-width: 1280px) 100vw, 1200px"
  className="object-cover object-center"
/>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-(--fastfood-gold-soft)">
              La Marquise Fast Food · Bonapriso
            </p>

            <p className="text-xs text-(--fastfood-muted)">
              Sur place · À emporter · Commande WhatsApp
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}