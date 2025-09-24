// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

import { ProjectsSection } from "@/components/projects-section";
import { UpcomingEventsSection } from "@/components/upcoming-events-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DonationSection } from "@/components/donation-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      
      <ProjectsSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <DonationSection />
    </>
  );
}
