import Reveal from "@/components/ui/Reveal";

export default function FastFoodLocation() {
  return (
    <section
      id="contact"
      className="border-t border-(--fastfood-border) bg-(--fastfood-deep) py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 xl:px-16">
        <Reveal>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-(--fastfood-gold-soft)">
              Nous trouver
            </p>

            <h2 className="font-fastfood-display mt-5 text-5xl font-extrabold uppercase leading-[0.86] tracking-tight text-(--fastfood-cream) sm:text-6xl md:text-7xl lg:text-8xl">
              Bonapriso.
              <span className="block text-(--fastfood-gold-soft)">
                Rue Tokoto.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-(--fastfood-muted) md:text-base">
              Retrouvez La Marquise Fast Food au cœur
              de Bonapriso pour manger sur place ou
              commander directement sur WhatsApp.
            </p>

            <div className="mt-10 border-t border-(--fastfood-border)">
              <div className="border-b border-(--fastfood-border) py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-(--fastfood-gold-soft)">
                  Adresse
                </p>

                <p className="font-fastfood-display mt-2 text-3xl font-bold uppercase text-(--fastfood-cream)">
                  Bonapriso · Rue Tokoto
                </p>

                <p className="mt-1 text-sm text-(--fastfood-muted)">
                  Douala, Cameroun
                </p>
              </div>

              <div className="border-b border-(--fastfood-border) py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-(--fastfood-gold-soft)">
                  Téléphone
                </p>

                <a
                  href="tel:+237698434343"
                  className="font-fastfood-display mt-2 inline-block text-3xl font-bold text-(--fastfood-cream) transition-colors duration-200 hover:text-(--fastfood-gold-soft)"
                >
                  +237 98 43 43 43
                </a>
              </div>

              <div className="border-b border-(--fastfood-border) py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-(--fastfood-gold-soft)">
                  Horaires
                </p>

                <p className="font-fastfood-display mt-2 text-3xl font-bold uppercase text-(--fastfood-cream)">
                  Tous les jours
                </p>

                <p className="mt-1 text-sm text-(--fastfood-muted)">
                  11:00 — 23:30
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          y={28}
        >
          <div className="relative min-h-105 overflow-hidden border border-(--fastfood-border-strong) bg-(--fastfood-surface) sm:min-h-120">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31839.381692560477!2d9.666305827575014!3d4.0361949199867055!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x1061131a855d1969%3A0x373ffb5cd202e4b1!2sLA%20MARQUISE%20RESTAURANT!5e0!3m2!1sen!2scm!4v1787184265199!5m2!1sen!2scm"
              title="La Marquise Fast Food - Google Maps"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}