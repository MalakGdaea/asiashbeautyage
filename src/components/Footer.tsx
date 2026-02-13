"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONTACT_DETAILS, navLinks } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from("[data-footer='reveal']", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 88%",
        },
        autoAlpha: 0,
        y: 20,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.1,
      });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="relative border-t border-line/80 bg-surface">
      <div className="section-wrap grid gap-10 py-14 lg:grid-cols-3">
        <div data-footer="reveal">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Asiash Beauty logo"
              width={44}
              height={44}
              className="rounded-full"
            />
            <p className="text-lg font-bold text-zinc-900">Asiash Beauty Age</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
            {
              "\u0639\u0646\u0627\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0628\u0627\u0644\u0628\u0634\u0631\u0629 \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u0648\u062a\u062c\u0631\u0628\u0629 \u0631\u0627\u0642\u064a\u0629 \u062a\u0645\u0646\u062d\u0643 \u0646\u062a\u0627\u0626\u062c \u0645\u0644\u0645\u0648\u0633\u0629."
            }
          </p>
        </div>

        <div data-footer="reveal">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-700">
            {"\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629"}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-zinc-950">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-footer="reveal">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-700">
            {"\u062a\u0648\u0627\u0635\u0644"}
          </h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <a href={`tel:${CONTACT_DETAILS.phone}`} className="block transition-colors hover:text-zinc-950">
              {CONTACT_DETAILS.phone}
            </a>
            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-zinc-950"
            >
              WhatsApp
            </a>
            <p>{CONTACT_DETAILS.address}</p>
          </div>

          <Link href="#contact" className="btn-luxury mt-5 inline-flex items-center justify-center px-5 py-2.5">
            {"\u0627\u062d\u062c\u0632\u064a \u0645\u0648\u0639\u062f\u0643"}
          </Link>
        </div>
      </div>

      <div className="border-t border-line/80">
        <div className="section-wrap flex items-center justify-between py-4 text-xs text-zinc-500">
          <p>© {year} Asiash Beauty Age - All rights reserved.</p>
          <a href="#home" className="transition-colors hover:text-zinc-900">
            {"\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0623\u0639\u0644\u0649"}
          </a>
        </div>
      </div>
    </footer>
  );
}
