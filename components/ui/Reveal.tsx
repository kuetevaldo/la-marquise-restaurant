"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
  "--reveal-y": string;
};

let revealObserver: IntersectionObserver | null = null;

function getRevealObserver() {
  if (revealObserver) return revealObserver;

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.14,
    }
  );

  return revealObserver;
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("is-visible");
      return;
    }

    const observer = getRevealObserver();

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const style: RevealStyle = {
    "--reveal-delay": `${Math.max(0, delay) * 1000}ms`,
    "--reveal-y": `${y}px`,
  };

  return (
    <div
      ref={elementRef}
      className={`premium-reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
