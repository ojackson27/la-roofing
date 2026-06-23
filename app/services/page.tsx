import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Services | LA Roofing",
  description:
    "Industrial roofing and cladding, general roofing, slate and tiling, and single ply roofing across Exeter and Devon.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <section className="w-full py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-5">
          <h2 className="reveal text-3xl font-bold text-[var(--color-trust)]">Quality You Can Trust</h2>
          <p className="reveal text-[var(--color-body-teal)] text-lg leading-relaxed">
            Whether you need a damaged roof repaired or a complete re-roofing service, we can help. Our
            dedicated team of roofers will go out of their way to provide a great service, bringing years
            of experience to every project we take on across Exeter and the surrounding areas of Devon.
          </p>
          <div className="w-16 h-1 bg-[var(--color-accent)] rounded-full" />
        </div>
      </section>
      <ServicesGrid />
      <ContactSection />
    </main>
  );
}
