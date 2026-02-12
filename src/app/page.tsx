import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />

      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-zinc-900">من نحن</h2>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-zinc-900">تواصل معنا</h2>
      </section>

      <section id="booking" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-zinc-900">احجزي موعدك</h2>
      </section>
    </main>
  );
}
