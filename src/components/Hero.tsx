"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "power3.out" },
      });

      tl.from("[data-hero='orb']", {
        autoAlpha: 0,
        scale: 0.2,
        stagger: 0.1,
      })
        .from(
          "[data-hero='kicker'], [data-hero='title-line']",
          {
            autoAlpha: 0,
            y: 42,
            stagger: 0.11,
          },
          "<0.05",
        )
        .from(
          "[data-hero='copy'], [data-hero='cta'], [data-hero='metric']",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.55,
            stagger: 0.1,
          },
          "<0.2",
        )
        .from(
          "[data-hero='visual']",
          {
            autoAlpha: 0,
            x: 40,
            rotate: -4,
            duration: 0.8,
          },
          "<0.05",
        )
        .from(
          "[data-hero='badge']",
          {
            autoAlpha: 0,
            y: 16,
            duration: 0.45,
            stagger: 0.1,
          },
          "<0.2",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative isolate overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8"
    >
      <div
        data-hero="orb"
        className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-rose-200/60 blur-2xl"
      />
      <div
        data-hero="orb"
        className="pointer-events-none absolute -right-16 top-36 h-56 w-56 rounded-full bg-primary/40 blur-3xl"
      />
      <div
        data-hero="orb"
        className="pointer-events-none absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-100/70 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
        <div className="relative z-10 text-right">
          <p
            data-hero="kicker"
            className="inline-flex rounded-full border border-primary/40 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-zinc-700 backdrop-blur-sm sm:text-sm"
          >
            ASIASH BEAUTY AGE
          </p>

          <h1 className="mt-5 space-y-1.5 text-[clamp(2rem,9vw,5rem)] font-bold leading-[1.08] text-zinc-900">
            <span data-hero="title-line" className="block">
              {"\u0627\u0643\u062a\u0634\u0641\u064a \u0627\u0644\u0646\u0633\u062e\u0629"}
            </span>
            <span data-hero="title-line" className="block text-primary">
              {"\u0627\u0644\u0623\u062c\u0645\u0644 \u0645\u0646 \u0628\u0634\u0631\u062a\u0643"}
            </span>
          </h1>

          <p
            data-hero="copy"
            className="mt-5 max-w-xl text-sm leading-7 text-zinc-700 sm:text-base"
          >
            {
              "\u0631\u062d\u0644\u062a\u0643 \u0646\u062d\u0648 \u0628\u0634\u0631\u0629 \u0645\u062b\u0627\u0644\u064a\u0629 \u062a\u0628\u062f\u0623 \u0647\u0646\u0627. \u0627\u0633\u062a\u0645\u062a\u0639\u064a \u0628\u062a\u062c\u0631\u0628\u0629 \u0639\u0646\u0627\u064a\u0629 \u0645\u062e\u0635\u0635\u0629 \u062a\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0631\u0627\u062d\u0629 \u0648\u0627\u0644\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0645\u0644\u062d\u0648\u0638\u0629 \u0645\u0646 \u0623\u0648\u0644 \u062c\u0644\u0633\u0629."
            }
          </p>

          <div data-hero="cta" className="mt-7 flex flex-wrap justify-end gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {"\u0627\u062d\u062c\u0632\u064a \u0645\u0648\u0639\u062f\u0643 \u0627\u0644\u0622\u0646"}
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-primary"
            >
              {"\u0634\u0627\u0647\u062f\u064a \u062e\u062f\u0645\u0627\u062a\u0646\u0627"}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <span
              data-hero="metric"
              className="rounded-2xl border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm sm:text-sm"
            >
              {"\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 4.9/5"}
            </span>
            <span
              data-hero="metric"
              className="rounded-2xl border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm sm:text-sm"
            >
              {"\u062c\u0644\u0633\u0627\u062a \u0639\u0646\u0627\u064a\u0629 \u0645\u062e\u0635\u0635\u0629"}
            </span>
          </div>
        </div>

        <div data-hero="visual" className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2.2rem] border border-white/60 bg-white/35 backdrop-blur-sm" />
          <Image
            src="/images/hero.jpg"
            alt="woman with great skin"
            width={900}
            height={1200}
            priority
            className="relative h-[58svh] min-h-[420px] w-full rounded-[2.2rem] object-cover object-center shadow-[0_30px_60px_rgba(57,56,49,0.18)] sm:h-[64svh] sm:max-h-[640px]"
          />

          <div
            data-hero="badge"
            className="absolute -left-4 top-8 rounded-2xl border border-white/70 bg-white/90 px-4 py-2 text-xs font-bold text-zinc-800 shadow-lg backdrop-blur-sm sm:text-sm"
          >
            {"\u0639\u0646\u0627\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629"}
          </div>
          <div
            data-hero="badge"
            className="absolute -bottom-4 right-4 rounded-2xl border border-white/70 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-lg sm:text-sm"
          >
            {"\u0645\u0646\u062a\u062c\u0627\u062a \u0622\u0645\u0646\u0629 \u0644\u0644\u0628\u0634\u0631\u0629"}
          </div>
        </div>
      </div>
    </section>
  );
}
