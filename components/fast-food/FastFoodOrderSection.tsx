import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/237670858585?text=" +
  encodeURIComponent(
    "Bonjour La Marquise Fast Food 👋🏾\nJe souhaite passer une commande."
  );

export default function FastFoodOrderSection() {
  return (
    <section
      id="order"
      className="relative overflow-hidden border-y border-[var(--fastfood-border-strong)] bg-[var(--fastfood)] py-20 sm:py-24 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/3 bg-[var(--fastfood-surface-elevated)]/28"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-12 xl:px-16">
        <div className="relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--fastfood-gold-soft)]">
            Commander
          </p>

          <h2 className="font-fastfood-display mt-5 text-5xl font-extrabold uppercase leading-[0.86] tracking-[-0.025em] text-[var(--fastfood-cream)] sm:text-6xl md:text-7xl lg:text-8xl">
            Votre envie.
            <span className="block text-[var(--fastfood-gold-soft)]">
              En quelques messages.
            </span>
          </h2>
        </div>

        <div className="relative z-10">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["01", "Choisissez", "Parcourez le menu."],
              ["02", "Écrivez-nous", "Ouvrez WhatsApp."],
              ["03", "Confirmez", "Finalisez avec l’équipe."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-t border-[var(--fastfood-border-strong)] pt-5"
              >
                <p className="text-[9px] font-extrabold tracking-[0.2em] text-[var(--fastfood-gold-soft)]">
                  {number}
                </p>

                <h3 className="font-fastfood-display mt-3 text-3xl font-bold uppercase text-[var(--fastfood-cream)]">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-[var(--fastfood-muted)]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[var(--fastfood-gold)] px-8 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--fastfood-ink)] transition-colors duration-200 hover:bg-[var(--fastfood-gold-soft)] sm:w-auto"
          >
            <FaWhatsapp className="text-lg" />
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
