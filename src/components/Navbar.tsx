"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-background/75 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-bold text-zinc-900">
          Asiash Beauty Age
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-zinc-700 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="#contact" className="btn-luxury">
            {"\u0627\u062d\u062c\u0632\u064a \u0645\u0648\u0639\u062f\u0643"}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex flex-center rounded-md p-2 text-zinc-700 transition-colors hover:bg-surface-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={"\u0641\u062a\u062d \u0623\u0648 \u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"}
        >
          <span className="sr-only">{"\u0627\u0644\u0642\u0627\u0626\u0645\u0629"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-line/70 bg-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-zinc-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-2 py-1 transition-colors hover:bg-surface-soft hover:text-primary-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-luxury mt-4 inline-flex w-full flex-center px-4 py-2"
          >
            {"\u0627\u062d\u062c\u0632\u064a \u0645\u0648\u0639\u062f\u0643"}
          </Link>
        </div>
      )}
    </header>
  );
}
