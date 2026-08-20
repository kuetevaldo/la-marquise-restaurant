"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0b0a] pb-20 pt-36 sm:pb-24 sm:pt-40 md:pb-28 md:pt-44">

      <div className="absolute right-[-10%] top-[-20%] h-96 w-96 rounded-full bg-[#b99a5b]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#b99a5b]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b99a5b] sm:text-[11px]">
            Notre carte
          </p>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease,
          }}
          className="font-display max-w-5xl text-5xl font-medium leading-[0.94] tracking-tight text-[#f5f1e8] sm:text-6xl md:text-7xl lg:text-[82px]"
        >
          Deux identités,

          <span className="mt-2 block italic text-[#d8c49c]">
            une même signature.
          </span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease,
          }}
          className="mt-10 grid max-w-5xl gap-8 border-t border-white/10 pt-8 md:grid-cols-2"
        >

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b99a5b]">
              La Marquise Restaurant
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#aaa398] md:text-base md:leading-8">
              Une carte internationale et orientale pensée
              autour d&apos;une expérience plus raffinée :
              cuisine, bar, cocktails et cave.
            </p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b33a35]">
              La Marquise Fast Food
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#aaa398] md:text-base md:leading-8">
              Une sélection généreuse de burgers, pizzas,
              fried chicken, desserts et boissons pour une
              expérience plus décontractée.
            </p>
          </div>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-10"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#716c64] transition-colors duration-300 hover:text-[#d8c49c]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Retour au restaurant
          </Link>
        </motion.div>

      </div>
    </section>
  );
}