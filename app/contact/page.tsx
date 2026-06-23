import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | LA Roofing",
  description:
    "Get in touch with LA Roofing (Exeter) Ltd for roofing repairs, re-roofing, and cladding work across Exeter and Devon.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
    </main>
  );
}
