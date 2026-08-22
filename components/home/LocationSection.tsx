import Reveal from "@/components/ui/Reveal";

export default function LocationSection() {
  return (
    <section
      id="contact"
      className="border-t border-(--border) bg-(--background) py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 xl:px-16">

        {/* Content */}
        <Reveal y={24}>
          <div className="max-w-xl">

            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-(--brand)" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-(--brand) sm:text-[11px]">
                Nous trouver
              </p>
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-(--foreground) sm:text-6xl md:text-7xl">
              Au cœur

              <span className="block italic text-(--brand-light)">
                de Bonapriso.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-(--muted) md:text-base md:leading-8">
              Retrouvez La Marquise à Bonapriso, rue Tokoto, Douala, dans un
              cadre élégant pensé pour vos déjeuners, dîners et moments à
              partager.
            </p>

            {/* Details */}
            <div className="mt-10 border-t border-(--border)">

              {/* Address */}
              <div className="border-b border-(--border) py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-(--muted-soft)">
                  Adresse
                </p>

                <p className="font-display mt-2 text-2xl leading-snug text-(--foreground)">
                  Bonapriso · Rue Tokoto
                </p>

                <p className="mt-1 text-sm text-(--muted-soft)">
                  Douala, Cameroun
                </p>
              </div>

              {/* Phone */}
              <div className="border-b border-(--border) py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-(--muted-soft)">
                  Téléphone
                </p>

                <a
                  href="tel:+237698434343"
                  className="font-display mt-2 inline-block text-2xl text-(--foreground) transition-colors duration-300 hover:text-(--brand-light)"
                >
                  +237 6 98 43 43 43
                </a>
              </div>

              {/* Email */}
              <div className="border-b border-(--border) py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-(--muted-soft)">
                  Email
                </p>

                <a
                  href="mailto:lamarquisedouala@gmail.com"
                  className="mt-2 inline-block break-all text-sm text-(--foreground) transition-colors duration-300 hover:text-(--brand-light) sm:text-base"
                >
                  lamarquisedouala@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="border-b border-(--border) py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-(--muted-soft)">
                  Horaires
                </p>

                <p className="font-display mt-2 text-2xl text-(--foreground)">
                  Tous les jours
                </p>

                <p className="mt-1 text-sm text-(--muted-soft)">
                  11:00 — 23:30
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="https://www.google.com/maps/search/?api=1&query=LA+MARQUISE+RESTAURANT+Rue+Tokoto+Douala"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-(--brand) px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--surface) transition-colors duration-300 hover:bg-(--brand-light) sm:px-8 sm:text-[11px]"
              >
                Voir l&apos;itinéraire

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="tel:+237698434343"
                className="group inline-flex min-h-14 items-center justify-center gap-3 border border-(--border-strong) px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--foreground) transition-colors duration-300 hover:border-(--brand) hover:bg-(--surface) hover:text-(--brand-light) sm:px-8 sm:text-[11px]"
              >
                Appeler

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>
        </Reveal>

        {/* Google Map */}
        <Reveal delay={0.12} y={28}>
          <div className="relative min-h-107.5 overflow-hidden border border-(--border) bg-(--surface-elevated) sm:min-h-125">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31839.381692560477!2d9.666305827575014!3d4.0361949199867055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061131a855d1969%3A0x373ffb5cd202e4b1!2sLA%20MARQUISE%20RESTAURANT!5e0!3m2!1sen!2scm!4v1787184265199!5m2!1sen!2scm"
              title="La Marquise Restaurant - Google Maps"
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
