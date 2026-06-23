import HeroVideo from '@/components/HeroVideo';
import MissionServices from '@/components/MissionServices';
import WorkReviewsCarousel from '@/components/WorkReviewsCarousel';
import AboutSection from '@/components/AboutSection';
import OurWorkBento from '@/components/OurWorkBento';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <MissionServices />
      <WorkReviewsCarousel />
      <AboutSection />
      <OurWorkBento />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
