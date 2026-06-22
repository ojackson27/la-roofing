import AboutHero from "@/components/AboutHero";
import AboutIntro from "@/components/AboutIntro";
import AboutTrustStrip from "@/components/AboutTrustStrip";
import ServiceAreas from "@/components/ServiceAreas";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "About Us | LA Roofing",
  description:
    "LA Roofing (Exeter) Ltd is a local roofing team serving Exeter and the surrounding areas of Devon.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutTrustStrip />
      <ServiceAreas />
      <ContactSection />
    </main>
  );
}
