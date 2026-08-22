"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/ui/Reveal";

export default function EventsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      {
        rootMargin: "200px 0px",
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-(--background) py-24 sm:py-28 md:py-32 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <div className="relative min-h-130 w-full overflow-hidden bg-(--surface-elevated) md:min-h-155">

          {/* Background video */}
          <video
            ref={videoRef}
            src="/video/events.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Cinematic overlays */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/72 via-black/30 to-black/10" />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/58 via-transparent to-black/5" />

          {/* Content */}
          <div className="relative z-10 flex min-h-130 items-end px-6 py-9 sm:px-8 sm:py-10 md:min-h-155 md:px-12 md:py-12 lg:px-14 lg:py-14">

            <div className="w-full max-w-2xl">

              {/* Label */}
              <Reveal y={18}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-(--brand)" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-(--brand-light) sm:text-[11px]">
                    Événements
                  </p>
                </div>
              </Reveal>

              {/* Heading */}
              <Reveal delay={0.08} y={24}>
                <h2 className="font-display text-5xl font-medium leading-[0.96] tracking-tight text-(--foreground) sm:text-6xl md:text-7xl">
                  Vos moments

                  <span className="mt-2 block italic text-(--brand-light)">
                    méritent un cadre unique.
                  </span>
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal delay={0.16} y={20}>
                <p className="mt-7 max-w-xl text-sm leading-7 text-(--foreground-soft) md:text-base md:leading-8">
                  Anniversaires, dîners privés, retrouvailles ou célébrations
                  spéciales, La Marquise vous accueille dans un cadre élégant
                  pour créer des souvenirs autour de la table.
                </p>
              </Reveal>

              {/* CTA */}
              <Reveal delay={0.24} y={18}>
                <a
                  href="#reservation"
                  className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-(--brand) px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--surface) transition-colors duration-300 hover:bg-(--brand-light) sm:px-8 sm:text-[11px]"
                >
                  Organiser un événement

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>

            </div>

          </div>

          {/* Bottom caption */}
          <div className="absolute bottom-7 right-7 z-10 hidden text-[9px] uppercase tracking-[0.25em] text-(--muted) md:block">
            La Marquise · Bonapriso
          </div>

        </div>

      </div>
    </section>
  );
}
