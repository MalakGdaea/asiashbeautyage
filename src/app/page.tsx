import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <BeforeAfter/>
            <Testimonials/>
            <Services/>
            <Contact/>
            <Footer/>
        </main>
    );
}
