﻿"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from("[data-about='reveal']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        autoAlpha: 0,
        y: 26,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.1,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="section-shell bg-surface">
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-highlight/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 panel-card p-6 sm:p-8 lg:order-1">
          <p data-about="reveal" className="section-kicker">
            ABOUT US
          </p>
          <h2 data-about="reveal" className="section-title">
            {"\u0645\u0646 \u0646\u062d\u0646"}
          </h2>
          <p data-about="reveal" className="mt-5 text-sm leading-8 text-zinc-700 sm:text-base">
            {
              "\u0646\u0624\u0645\u0646 \u0628\u0623\u0646 \u0627\u0644\u062c\u0645\u0627\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u064a\u0628\u062f\u0623 \u0645\u0646 \u0639\u0646\u0627\u064a\u0629 \u0639\u0644\u0645\u064a\u0629 \u0645\u062a\u0642\u0646\u0629. \u0646\u0639\u0645\u0644 \u0628\u0623\u0633\u0627\u0644\u064a\u0628 \u062d\u062f\u064a\u062b\u0629 \u0648\u0645\u0646\u062a\u062c\u0627\u062a \u0622\u0645\u0646\u0629 \u0644\u062a\u0642\u062f\u064a\u0645 \u0646\u062a\u0627\u0626\u062c \u0645\u0644\u062d\u0648\u0638\u0629 \u0628\u0623\u0633\u0644\u0648\u0628 \u0647\u0627\u062f\u0626 \u0648\u0631\u0627\u0642\u064d."
            }
          </p>
          <p data-about="reveal" className="mt-4 text-sm leading-8 text-zinc-600 sm:text-base">
            {
              "\u0643\u0644 \u062c\u0644\u0633\u0629 \u062a\u0645 \u062a\u0635\u0645\u064a\u0645\u0647\u0627 \u0644\u062a\u0646\u0627\u0633\u0628 \u0627\u062d\u062a\u064a\u0627\u062c \u0628\u0634\u0631\u062a\u0643\u060c \u0645\u0639 \u0627\u0647\u062a\u0645\u0627\u0645 \u062f\u0642\u064a\u0642 \u0628\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u062a\u062c\u0631\u0628\u0629 \u0645\u0631\u064a\u062d\u0629 \u0645\u0646 \u0623\u0648\u0644 \u0644\u062d\u0638\u0629."
            }
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div
            data-about="reveal"
            className="mx-auto max-w-[340px] overflow-hidden rounded-[2rem] border border-line/80 bg-white/80 p-3 shadow-[0_20px_40px_rgba(49,45,41,0.12)]"
          >
            <Image
              src="/images/funder.png"
              alt={"\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u0629"}
              width={800}
              height={1000}
              className="h-auto w-full rounded-[1.4rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
