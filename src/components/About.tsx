import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-600">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            من نحن
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-600 sm:text-lg">
            نحن نؤمن بأن الجمال الحقيقي يبدأ من العناية المهنية المبنية على العلم والخبرة.
            فخورون بحصولنا على شهادات معتمدة وموثقة في مجالات العناية المتقدمة بالبشرة,
            مما يعكس التزامنا بأعلى معايير الجودة والاحترافية. كل جلسة نقدمها هي مزيج من
            المهارة المكتسبة والتقنيات الحديثة، لضمان حصولكِ على أفضل النتائج في بيئة
            تثقين بها.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-xl border border-rose-100 bg-rose-50  sm:max-w-[300px] lg:max-w-[320px]">
            <Image
              src="/images/funder.png"
              alt="صورة المؤسِسة"
              width={800}
              height={1000}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
