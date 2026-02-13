"use client";

import { useRef } from "react";
import { services } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from("[data-service='card']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
        },
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.09,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="services" ref={sectionRef} className="section-shell bg-surface-soft/60">
      <div className="pointer-events-none absolute -left-12 top-14 h-48 w-48 rounded-full bg-accent/35 blur-3xl" />
      <div className="section-wrap">
        <div className="mb-10 text-center">
          <p className="section-kicker">SERVICES</p>
          <h2 className="section-title">{"\u0627\u0644\u062e\u062f\u0645\u0627\u062a"}</h2>
          <p className="section-copy">{"\u0627\u062e\u062a\u0627\u0631\u064a \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643 \u0645\u0646 \u0628\u0627\u0642\u0627\u062a\u0646\u0627 \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u0629."}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const discount = Math.round((1 - service.price / service.oldPrice) * 100);

            return (
              <article
                key={service.id}
                data-service="card"
                className="panel-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-zinc-700">
                    {service.category}
                  </span>
                  <span dir="ltr" className="rounded-full bg-highlight/60 px-3 py-1 text-xs font-semibold text-zinc-800">
                    {`-${discount}%`}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-7 text-zinc-900">{service.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-600">{service.description}</p>

                <div className="mt-6 flex items-end gap-3">
                  <span className="text-2xl font-extrabold text-zinc-900">{service.price} ₪</span>
                  <span className="text-sm text-zinc-400 line-through">{service.oldPrice} ₪</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
