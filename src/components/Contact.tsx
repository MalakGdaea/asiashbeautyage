import { CONTACT_DETAILS } from "@/constants";

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

export default function Contact() {
  const locationQuery = encodeURIComponent(CONTACT_DETAILS.address);
  const googleMapEmbedSrc = `https://maps.google.com/maps?q=${locationQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${locationQuery}`;
  const wazeLink = `https://waze.com/ul?q=${locationQuery}&navigate=yes`;

  return (
    <section id="contact" className="bg-rose-50/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">تواصلي معنا</h2>
          <p className="mt-3 text-zinc-600">نحن هنا لمرافقتكِ خطوة بخطوة نحو بشرة مثالية. لا تترددي في سؤالنا.</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm sm:p-8">
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="flex items-center gap-3 text-zinc-800 transition-colors hover:text-rose-600"
            >
              <span className="rounded-full bg-rose-100 p-2 text-rose-600">
                <PhoneIcon />
              </span>
              <span className="font-semibold">{CONTACT_DETAILS.phone}</span>
            </a>

            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-800 transition-colors hover:text-rose-600"
            >
              <span className="rounded-full bg-rose-100 p-2 text-rose-600">
                <WhatsAppIcon />
              </span>
              <span className="font-semibold">تواصل عبر واتساب</span>
            </a>

            <p className="flex items-start gap-3 text-zinc-800">
              <span className="mt-0.5 rounded-full bg-rose-100 p-2 text-rose-600">
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
                ابدأ التنقل عبر Waze
              </a>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-rose-200 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-rose-50"
              >
                فتح في Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm">
            <iframe
              title="موقع العيادة على الخريطة"
              src={googleMapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full sm:h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
