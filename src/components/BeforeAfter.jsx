import Image from "next/image";

const beforeAfterItems = Array.from({ length: 7 }, (_, index) => {
  const id = String(index + 1).padStart(2, "0");

  return {
    id,
    before: `/images/${id}-before.png`,
    after: `/images/${id}-after.png`,
  };
});

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">قبل وبعد</h2>
          <p className="mt-3 text-zinc-600">نتائج حقيقية من جلساتنا العلاجية.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/5] border-l border-rose-100">
                  <Image
                    src={item.before}
                    alt={`قبل العلاج ${item.id}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                    قبل
                  </span>
                </div>

                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.after}
                    alt={`بعد العلاج ${item.id}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white">
                    بعد
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
