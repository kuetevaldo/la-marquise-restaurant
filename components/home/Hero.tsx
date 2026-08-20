"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-[#0b0b0a]">
      <Image
        src="/images/hero.image.png"
        alt="Interior of La Marquise Restaurant"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.92)_0%,rgba(5,5,4,0.76)_34%,rgba(5,5,4,0.42)_62%,rgba(5,5,4,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,4,0.9)_0%,rgba(5,5,4,0.3)_32%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(185,154,91,0.10),transparent_38%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-8 md:pb-20 md:pt-40 lg:px-12 xl:px-16">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease,
            }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#b99a5b]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c5a768] sm:text-[11px] md:text-xs">
              Restaurant · Bonapriso, Douala
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease,
            }}
            className="font-display max-w-4xl text-5xl font-medium leading-[0.94] tracking-tight text-[#f5f1e8] sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[92px]"
          >
            Une expérience
            <span className="block italic text-[#d8c49c]">
              à savourer.
            </span>
          </motion.h1>

          {/* Bottom content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.42,
              ease,
            }}
            className="mt-10 flex max-w-5xl flex-col gap-7 border-t border-white/20 pt-7 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-xl text-sm leading-7 text-[#d2cbc0] md:text-base md:leading-8">
              Cuisine généreuse, cadre élégant et moments pensés pour être
              partagés au cœur de Bonapriso.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
  <a
    href="#reservation"
    className="group inline-flex min-h-14 items-center justify-center gap-3 border border-[#b99a5b] bg-[#b99a5b] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#11100e] transition duration-300 hover:bg-[#d8c49c] sm:px-8 sm:text-[11px]"
  >
    Réserver une table

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>

  <Link
    href="/menu"
    className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 bg-white/5 px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition duration-300 hover:border-[#b99a5b] hover:bg-white/10 hover:text-[#d8c49c] sm:px-8 sm:text-[11px]"
  >
    Découvrir la carte

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-white/50 transition-colors duration-300 hover:text-[#d8c49c] md:flex lg:right-12 xl:right-16"
      >
        <span>Découvrir</span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}