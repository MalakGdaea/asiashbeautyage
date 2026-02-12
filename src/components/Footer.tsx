import Image from "next/image";
import Link from "next/link";
import { CONTACT_DETAILS, navLinks } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
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
            عناية متقدمة بالبشرة بمعايير احترافية وتجربة راقية تمنحك نتائج ملموسة.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-600">روابط سريعة</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-rose-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-600">تواصل</h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-700">
            <a href={`tel:${CONTACT_DETAILS.phone}`} className="block transition-colors hover:text-rose-600">
              {CONTACT_DETAILS.phone}
            </a>
            <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noreferrer" className="block transition-colors hover:text-rose-600">
              WhatsApp
            </a>
            <p>{CONTACT_DETAILS.address}</p>
          </div>

          <Link href="#contact" className="btn-luxury mt-5 inline-flex items-center justify-center px-5 py-2.5">
            احجزي موعدك
          </Link>
        </div>
      </div>

      <div className="border-t border-rose-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
          <p>© {year} Asiash Beauty Age - All rights reserved.</p>
          <a href="#home" className="transition-colors hover:text-rose-600">
            العودة للأعلى
          </a>
        </div>
      </div>
    </footer>
  );
}
