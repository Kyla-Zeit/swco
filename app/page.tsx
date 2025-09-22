// app/page.tsx
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import GallerySection from "@/components/ui/gallery-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import Footer from "@/components/ui/footer";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <ProjectsSection />
      {/* ↓ Your Events section now matches the site theme and sits here */}
      <UpcomingEventsSection />
      <TestimonialsSection />
      <DonationSection />
    </>
  );
}
