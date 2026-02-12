"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks} from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-bold text-rose-600">
          Asiash Beauty
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-zinc-700 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#booking"
            className="btn-luxury"
          >
            احجزي موعدك
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex flex-center rounded-md p-2 text-zinc-700 transition-colors hover:bg-rose-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="فتح أو إغلاق القائمة"
        >
          <span className="sr-only">القائمة</span>
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
        <div id="mobile-menu" className="border-t border-rose-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-zinc-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-2 py-1 transition-colors hover:bg-rose-50 hover:text-rose-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="btn-luxury mt-4 inline-flex w-full flex-center px-4 py-2"
          >
            احجزي موعدك
          </Link>
        </div>
      )}
    </header>
  );
}
