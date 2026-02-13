﻿import { testimonials, type Testimonial as TestimonialItem } from "@/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell overflow-hidden bg-background">
      <div className="section-wrap">
        <div className="mb-12 text-center">
          <p className="section-kicker">TESTIMONIALS</p>
          <h2 className="section-title">{"\u0622\u0631\u0627\u0621 \u0639\u0645\u064a\u0644\u0627\u062a\u0646\u0627"}</h2>
          <p className="section-copy">{"\u062a\u062c\u0627\u0631\u0628 \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0646 \u0642\u0644\u0648\u0628 \u0639\u0645\u064a\u0644\u0627\u062a\u0646\u0627."}</p>
        </div>

        <div className="marquee-wrap relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="marquee-track py-4" dir="rtl">
            <div className="marquee-group">
              {testimonials.map((item) => (
                <TestimonialCard key={`group1-${item.id}`} item={item} />
              ))}
            </div>

            <div className="marquee-group" aria-hidden="true">
              {testimonials.map((item) => (
                <TestimonialCard key={`group2-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mb-3 flex items-center gap-1 text-amber-500" aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="panel-card w-[300px] shrink-0 p-6 transition-transform duration-300 hover:-translate-y-1 sm:w-[380px]">
      <Stars rating={item.rating} />
      <p className="h-[120px] overflow-y-auto text-sm leading-7 text-zinc-700">{item.content}</p>
      <div className="mt-4 flex items-center gap-3 border-t border-line/60 pt-4">
        <p className="text-sm font-semibold text-zinc-900">{item.author}</p>
      </div>
    </article>
  );
}
