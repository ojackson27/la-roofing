import WorkHero from "@/components/WorkHero";
import WorkGallery from "@/components/WorkGallery";
import RealReviews from "@/components/RealReviews";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Our Work | LA Roofing",
  description:
    "See LA Roofing's completed projects and real customer reviews from homes and businesses across Exeter and Devon.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <WorkGallery />
      <RealReviews />
      <ContactSection />
    </main>
  );
}
