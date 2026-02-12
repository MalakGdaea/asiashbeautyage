import Link from "next/link";

export default function Hero() {
  return (
      <section
          id="home"
          className="relative isolate min-h-[88vh] overflow-hidden"
      >
          <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center h-full"
              style={{
                  backgroundImage:
                      "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=80')",
              }}
          />

          <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/40 to-black/20"
          />

          <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">
                      Asiash Beauty Age
                  </p>

                  <h1 className="text-4xl font-bold leading-relaxed sm:text-5xl lg:text-6xl">
                      اكتشفي النسخة الأجمل من بشرتك
                  </h1>

                  <p className="mt-6 text-base leading-8 text-zinc-100 sm:text-lg">
                      رحلتك نحو بشرة مثالية تبدأ هنا. استمتعي بتجربة فريدة تجمع بين الراحة
                      والنتائج الملحوظة
                  </p>

                  <Link
                      href="#booking"
                      className="mt-8 inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                  >
                      احجزي موعدك الآن
                  </Link>
              </div>
          </div>
      </section>
  )
}
