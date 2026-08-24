import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/237698434343?text=" +
  encodeURIComponent(
    "Bonjour La Marquise Fast Food 👋🏾\nJe souhaite passer une commande."
  );

export default function FastFoodOrderSection() {
  return (
    <section
      id="order"
      className="border-t border-white/10 bg-(--fastfood) py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-12 xl:px-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fff3de]/70">
            Commander
          </p>

          <h2 className="font-display mt-5 text-5xl font-semibold leading-[0.9] text-[#fff3de] sm:text-6xl md:text-7xl">
            Votre envie.
            <span className="block text-[#ffd9c3]">
              En quelques messages.
            </span>
          </h2>
        </div>

        <div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["01", "Choisissez", "Parcourez le menu."],
              ["02", "Écrivez-nous", "Ouvrez WhatsApp."],
              ["03", "Confirmez", "Finalisez avec l’équipe."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-t border-[#fff3de]/25 pt-5"
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-[#fff3de]/55">
                  {number}
                </p>

                <h3 className="font-display mt-3 text-3xl text-[#fff3de]">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-[#fff3de]/75">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#fff3de] px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#180b0a] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            <FaWhatsapp className="text-lg" />
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}