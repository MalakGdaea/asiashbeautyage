import { services } from "@/constants";

export default function Services() {
  return (
    <section id="services" className="bg-rose-50/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">الخدمات</h2>
          <p className="mt-3 text-zinc-600">اختاري الخدمة المناسبة لك من باقاتنا المتخصصة.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const discount = Math.round((1 - service.price / service.oldPrice) * 100);

            return (
              <article
                key={service.id}
                className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                    {service.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">خصم {discount}%</span>
                </div>

                <h3 className="text-lg font-bold leading-7 text-zinc-900">{service.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-600">{service.description}</p>

                <div className="mt-6 flex items-end gap-3">
                  <span className="text-2xl font-extrabold text-rose-700">{service.price} ₪</span>
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
