import { testimonials, type Testimonial as TestimonialItem } from "@/constants";

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-rose-50/40 py-20 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">آراء عميلاتنا</h2>
                    <p className="mt-3 text-zinc-600">تجارب حقيقية من قلوب عميلاتنا.</p>
                </div>

                <div
                    className="marquee-wrap relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-rose-50/40 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-rose-50/40 after:to-transparent">

                    <div className="marquee-track py-4" dir="rtl">

                        <div className="marquee-group">
                            {testimonials.map((item) => (
                                <TestimonialCard key={`group1-${item.id}`} item={item}/>
                            ))}
                        </div>

                        <div className="marquee-group" aria-hidden="true">
                            {testimonials.map((item) => (
                                <TestimonialCard key={`group2-${item.id}`} item={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stars({rating}: { rating: number }) {

    return (

        <div className="mb-3 flex items-center gap-1 text-amber-500" aria-label={`التقييم ${rating} من 5`}>

            {Array.from({length: 5}, (_, index) => (

                <span key={index} className={index < rating ? "opacity-100" : "opacity-30"}>
★
</span>

            ))}

        </div>

    );

}

function TestimonialCard({item}: { item: TestimonialItem }) {
    return (
        <article
            className="w-[300px] shrink-0 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition-transform hover:scale-[1.02] sm:w-[380px]">
            <Stars rating={item.rating}/>
            <p className="text-sm leading-7 text-zinc-700 h-[120px] overflow-y-auto">{item.content}</p>
            <div className="mt-4 flex items-center gap-3 border-t border-rose-50 pt-4">
                <p className="text-sm font-semibold text-rose-700">{item.author}</p>
            </div>
        </article>
    );
}
