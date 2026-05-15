import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="bg-dark-bg">
          <Hero />
        </section>

        <section className="bg-dark-secondary py-20 md:py-32">
          <ValueProposition />
        </section>

        <section className="bg-dark-bg py-20 md:py-32">
          <FeaturedProjects />
        </section>

        <section className="bg-dark-secondary py-20 md:py-32">
          <Experience />
        </section>

        <section className="bg-dark-bg py-20 md:py-32">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
