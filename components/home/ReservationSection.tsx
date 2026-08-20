"use client";

import { FormEvent, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";

const WHATSAPP_NUMBER = "237670858585";

/*
  Restaurant:
  Opens: 11:00
  Closes: 23:30
  Last reservation: 22:30
*/
const timeSlots = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
];

function getLocalDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

export default function ReservationSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const today = useMemo(() => {
    return getLocalDateString(new Date());
  }, []);

  const availableTimeSlots = useMemo(() => {
    if (!date) {
      return timeSlots;
    }

    if (date !== today) {
      return timeSlots;
    }

    const now = new Date();

    const currentMinutes =
      now.getHours() * 60 + now.getMinutes();

    return timeSlots.filter((slot) => {
      return timeToMinutes(slot) > currentMinutes;
    });
  }, [date, today]);

  const noMoreSlotsToday =
    date === today && availableTimeSlots.length === 0;

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = event.target.value;

    setDate(selectedDate);
    setError("");
    setTime("");
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    const cleanPhone = phone.replace(/\D/g, "");

    if (name.trim().length < 2) {
      setError("Veuillez renseigner votre nom.");
      return;
    }

    if (cleanPhone.length < 8) {
      setError(
        "Veuillez renseigner un numéro de téléphone valide."
      );
      return;
    }

    if (!date) {
      setError("Veuillez choisir une date.");
      return;
    }

    if (date < today) {
      setError(
        "La date sélectionnée n’est plus disponible."
      );
      return;
    }

    if (noMoreSlotsToday) {
      setError(
        "Il n’y a plus de créneau disponible aujourd’hui. Veuillez choisir une autre date."
      );
      return;
    }

    if (!time) {
      setError("Veuillez choisir une heure.");
      return;
    }

    if (date === today) {
      const now = new Date();

      const currentMinutes =
        now.getHours() * 60 + now.getMinutes();

      const selectedMinutes = timeToMinutes(time);

      if (selectedMinutes <= currentMinutes) {
        setTime("");

        setError(
          "Ce créneau vient de devenir indisponible. Veuillez choisir une nouvelle heure."
        );

        return;
      }
    }

    if (!timeSlots.includes(time)) {
      setError(
        "Veuillez choisir un créneau de réservation valide."
      );
      return;
    }

    const formattedDate = new Intl.DateTimeFormat(
      "fr-FR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ).format(new Date(`${date}T12:00:00`));

    const message = [
      "Bonjour La Marquise,",
      "",
      "Je souhaite réserver une table.",
      "",
      `Nom : ${name.trim()}`,
      `Téléphone : ${phone.trim()}`,
      `Nombre de personnes : ${guests}`,
      `Date : ${formattedDate}`,
      `Heure : ${time}`,
      note.trim()
        ? `Demande particulière : ${note.trim()}`
        : null,
      "",
      "Merci.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="reservation"
      className="border-t border-white/10 bg-[#11100e] py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16 lg:px-12 xl:px-16">

        {/* Left content */}
        <Reveal y={24}>
          <div className="max-w-xl lg:sticky lg:top-28">

            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b99a5b]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b99a5b] sm:text-[11px]">
                Réservation
              </p>
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-[#f5f1e8] sm:text-6xl md:text-7xl">
              Votre table

              <span className="mt-2 block italic text-[#d8c49c]">
                vous attend.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#aaa398] md:text-base md:leading-8">
              Indiquez vos préférences et envoyez votre
              demande directement à La Marquise sur WhatsApp.
            </p>

            <div className="mt-10 border-t border-white/10">

              <div className="border-b border-white/10 py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#716c64]">
                  Horaires
                </p>

                <p className="font-display mt-2 text-2xl text-[#f5f1e8]">
                  Tous les jours
                </p>

                <p className="mt-1 text-sm text-[#8f8980]">
                  11:00 — 23:30
                </p>

                <p className="mt-2 text-xs text-[#68635c]">
                  Dernière réservation à 22:30
                </p>
              </div>

              <div className="border-b border-white/10 py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#716c64]">
                  Téléphone
                </p>

                <a
                  href="tel:+237698434343"
                  className="font-display mt-2 inline-block text-2xl text-[#f5f1e8] transition-colors duration-300 hover:text-[#d8c49c]"
                >
                  +237 6 98 43 43 43 /

                  +237 6 70 85 85 85
                </a>
              </div>

            </div>

            <div className="mt-7 flex items-start gap-3">
              <FaWhatsapp className="mt-1 shrink-0 text-lg text-[#b99a5b]" />

              <p className="max-w-md text-xs leading-6 text-[#716c64]">
                Votre demande sera préparée automatiquement puis
                ouverte dans WhatsApp. La réservation reste soumise
                à la confirmation du restaurant.
              </p>
            </div>

          </div>
        </Reveal>

        {/* Reservation form */}
        <Reveal delay={0.12} y={28}>
          <form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-[#0b0b0a] p-6 sm:p-8 md:p-10"
            noValidate
          >

            <div className="mb-8">
              <p className="font-display text-3xl text-[#f5f1e8] sm:text-4xl">
                Demande de réservation
              </p>

              <p className="mt-2 text-sm leading-6 text-[#716c64]">
                Tous les champs marqués d&apos;un * sont
                obligatoires.
              </p>
            </div>

            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">

              {/* Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="reservation-name"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8f8980]"
                >
                  Nom complet *
                </label>

                <input
                  id="reservation-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Votre nom"
                  className="min-h-14 w-full border border-white/10 bg-[#141310] px-4 text-sm text-[#f5f1e8] outline-none transition-colors duration-300 placeholder:text-[#5f5b55] focus:border-[#b99a5b]"
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="reservation-phone"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8f8980]"
                >
                  Téléphone *
                </label>

                <input
                  id="reservation-phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  placeholder="+237 6XX XXX XXX"
                  className="min-h-14 w-full border border-white/10 bg-[#141310] px-4 text-sm text-[#f5f1e8] outline-none transition-colors duration-300 placeholder:text-[#5f5b55] focus:border-[#b99a5b]"
                />
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="reservation-guests"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8f8980]"
                >
                  Nombre de personnes *
                </label>

                <select
                  id="reservation-guests"
                  value={guests}
                  onChange={(event) =>
                    setGuests(event.target.value)
                  }
                  className="min-h-14 w-full border border-white/10 bg-[#141310] px-4 text-sm text-[#f5f1e8] outline-none transition-colors duration-300 focus:border-[#b99a5b]"
                >
                  {Array.from(
                    { length: 12 },
                    (_, index) => index + 1
                  ).map((number) => (
                    <option
                      key={number}
                      value={number}
                    >
                      {number}{" "}
                      {number === 1
                        ? "personne"
                        : "personnes"}
                    </option>
                  ))}

                  <option value="13+">
                    13 personnes ou plus
                  </option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="reservation-date"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8f8980]"
                >
                  Date *
                </label>

                <input
                  id="reservation-date"
                  type="date"
                  required
                  min={today}
                  value={date}
                  onChange={handleDateChange}
                  className="min-h-14 w-full border border-white/10 bg-[#141310] px-4 text-sm text-[#f5f1e8] outline-none transition-colors duration-300 focus:border-[#b99a5b]"
                />
              </div>

              {/* Time */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="reservation-time"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8f8980]"
                >
                  Heure *
                </label>

                <select
                  id="reservation-time"
                  required
                  value={time}
                  onChange={(event) => {
                    setTime(event.target.value);
                    setError("");
                  }}
                  disabled={
                    !date || noMoreSlotsToday
                  }
                  className="min-h-14 w-full border border-white/10 bg-[#141310] px-4 text-sm text-[#f5f1e8] outline-none transition-colors duration-300 focus:border-[#b99a5b] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {!date && (
                    <option value="">
                      Choisissez d&apos;abord une date
                    </option>
                  )}

                  {date && noMoreSlotsToday && (
                    <option value="">
                      Plus de créneau aujourd&apos;hui
                    </option>
                  )}

                  {date && !noMoreSlotsToday && (
                    <>
                      <option value="">
                        Choisir une heure
                      </option>

                      {availableTimeSlots.map(
                        (slot) => (
                          <option
                            key={slot}
                            value={slot}
                          >
                            {slot}
                          </option>
                        )
                      )}
                    </>
                  )}
                </select>

                {date === today &&
                  availableTimeSlots.length > 0 && (
                    <p className="mt-2 text-[10px] leading-5 text-[#68635c]">
                      Les créneaux déjà passés aujourd&apos;hui
                      ont été automatiquement retirés.
                    </p>
                  )}

                {noMoreSlotsToday && (
                  <p className="mt-2 text-xs leading-5 text-[#b99a5b]">
                    Les réservations sont terminées pour
                    aujourd&apos;hui. Veuillez sélectionner une
                    autre date.
                  </p>
                )}
              </div>

              {/* Note */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="reservation-note"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8f8980]"
                >
                  Demande particulière
                </label>

                <textarea
                  id="reservation-note"
                  value={note}
                  onChange={(event) =>
                    setNote(event.target.value)
                  }
                  rows={4}
                  maxLength={500}
                  placeholder="Anniversaire, préférence de table, occasion spéciale..."
                  className="w-full resize-none border border-white/10 bg-[#141310] px-4 py-4 text-sm leading-6 text-[#f5f1e8] outline-none transition-colors duration-300 placeholder:text-[#5f5b55] focus:border-[#b99a5b]"
                />

                <p className="mt-2 text-right text-[10px] text-[#5f5b55]">
                  {note.length}/500
                </p>
              </div>

            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                aria-live="polite"
                className="mt-6 border border-red-400/20 bg-red-400/5 px-4 py-3"
              >
                <p className="text-sm text-red-300">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={noMoreSlotsToday}
              className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#b99a5b] px-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#11100e] transition-colors duration-300 hover:bg-[#d8c49c] disabled:cursor-not-allowed disabled:bg-[#6e6249] disabled:text-black/60 sm:text-[11px]"
            >
              <FaWhatsapp className="text-lg" />

              Envoyer la demande

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="mx-auto mt-4 max-w-lg text-center text-[11px] leading-5 text-[#68635c]">
              Vous serez redirigé vers WhatsApp pour envoyer
              votre demande. Celle-ci ne constitue pas une
              confirmation automatique de votre table.
            </p>

          </form>
        </Reveal>

      </div>
    </section>
  );
}
