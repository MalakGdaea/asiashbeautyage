"use client";

import { useRef } from "react";
import { CONTACT_DETAILS } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M5 4.5h3l1.5 4-2 1.8a15.7 15.7 0 0 0 6.2 6.2L15.5 14l4 1.5v3A1.5 1.5 0 0 1 18 20C9.7 20 3 13.3 3 5a1.5 1.5 0 0 1 1.5-1.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 3.5A8.5 8.5 0 0 0 4.7 16.4L4 20l3.7-.7A8.5 8.5 0 1 0 12 3.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.3 9.2c.2-.4.5-.5.8-.4l.9.2c.3 0 .4.2.5.5l.4 1c0 .2 0 .4-.1.5l-.4.4c.3.7.9 1.3 1.6 1.6l.4-.4c.1-.1.3-.2.5-.1l1 .4c.3.1.5.2.5.5l.2.9c.1.3 0 .6-.4.8-.4.3-1 .4-1.6.2a7 7 0 0 1-4.2-4.2c-.2-.6-.1-1.2.2-1.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mapTarget = "Rahat neighborhood 2";
  const locationQuery = encodeURIComponent(mapTarget);
  const googleMapEmbedSrc = `https://maps.google.com/maps?q=${locationQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${locationQuery}`;
  const wazeLink = `https://waze.com/ul?q=${locationQuery}&navigate=yes`;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from("[data-contact='reveal']", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
        },
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="contact" ref={sectionRef} className="section-shell bg-surface-soft/55">
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-highlight/35 blur-3xl" />
      <div className="section-wrap">
        <div className="mb-10 text-center">
          <p className="section-kicker">CONTACT</p>
          <h2 className="section-title">{"\u062a\u0648\u0627\u0635\u0644\u064a \u0645\u0639\u0646\u0627"}</h2>
          <p className="section-copy">
            {
              "\u0646\u062d\u0646 \u0647\u0646\u0627 \u0644\u0645\u0631\u0627\u0641\u0642\u062a\u0643 \u062e\u0637\u0648\u0629 \u0628\u062e\u0637\u0648\u0629 \u0646\u062d\u0648 \u0628\u0634\u0631\u0629 \u0623\u0646\u0639\u0645 \u0648\u0623\u062c\u0645\u0644."
            }
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div data-contact="reveal" className="panel-card space-y-6 p-6 sm:p-8">
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="flex items-center gap-3 text-zinc-800 transition-colors hover:text-zinc-950"
            >
              <span className="rounded-full bg-surface-soft p-2 text-zinc-700">
                <PhoneIcon />
              </span>
              <span className="font-semibold">{CONTACT_DETAILS.phone}</span>
            </a>

            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-800 transition-colors hover:text-zinc-950"
            >
              <span className="rounded-full bg-surface-soft p-2 text-zinc-700">
                <WhatsAppIcon />
              </span>
              <span className="font-semibold">{"\u062a\u0648\u0627\u0635\u0644\u064a \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628"}</span>
            </a>

            <a
              href={CONTACT_DETAILS.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-800 transition-colors hover:text-zinc-950"
            >
              <span className="rounded-full bg-surface-soft p-2 text-zinc-700">
                <InstagramIcon />
              </span>
              <span className="font-semibold">Instagram</span>
            </a>

            <p className="flex items-start gap-3 text-zinc-800">
              <span className="mt-0.5 rounded-full bg-surface-soft p-2 text-zinc-700">
                <LocationIcon />
              </span>
              <span className="font-semibold leading-7">{CONTACT_DETAILS.address}</span>
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={wazeLink}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury inline-flex items-center justify-center px-5 py-2.5"
              >
                {"Waze"}
              </a>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-white/70"
              >
                {"Google Maps"}
              </a>
            </div>
          </div>

          <div data-contact="reveal" className="panel-card overflow-hidden p-2">
            <iframe
              title={"\u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u064a\u0627\u062f\u0629 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629"}
              src={googleMapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full rounded-[1.25rem] sm:h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
