﻿"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const beforeAfterItems = Array.from({ length: 7 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");

  return {
    id,
    before: `/images/${id}-before.png`,
    after: `/images/${id}-after.png`,
  };
});

export default function BeforeAfter() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from("[data-ba='card']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
        autoAlpha: 0,
        y: 22,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="before-after" ref={sectionRef} className="section-shell bg-background">
      <div className="section-wrap">
        <div className="mb-10 text-center">
          <p className="section-kicker">RESULTS</p>
          <h2 className="section-title">{"\u0642\u0628\u0644 \u0648\u0628\u0639\u062f"}</h2>
          <p className="section-copy">{"\u0646\u062a\u0627\u0626\u062c \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0646 \u062c\u0644\u0633\u0627\u062a\u0646\u0627 \u0627\u0644\u0639\u0644\u0627\u062c\u064a\u0629."}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <article
              key={item.id}
              data-ba="card"
              className="panel-card overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/5] border-l border-line/80">
                  <Image
                    src={item.before}
                    alt={`Before ${item.id}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-zinc-900/75 px-2.5 py-1 text-xs font-semibold text-white">
                    {"\u0642\u0628\u0644"}
                  </span>
                </div>

                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.after}
                    alt={`After ${item.id}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-zinc-900">
                    {"\u0628\u0639\u062f"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
