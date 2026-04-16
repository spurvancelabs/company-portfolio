import CTASection from "@/components/Home/FinalCta";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="cta">
        <CTASection />
      </section>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Spurvance Labs",
      url: "https://spurvancelabs.com",
      description:
        "Privacy-first software company building encrypted communication tools and enterprise solutions.",
      sameAs: [],
    }),
  }}
/>
    </main>
  );
}

