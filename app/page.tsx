// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { ImpactSection } from "@/components/impact-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DonationSection } from "@/components/donation-section";
import { UpcomingEventsSection } from "@/components/upcoming-events-section";
import { MissionSection } from "@/components/mission-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UpcomingEventsSection />
      <MissionSection />
      <ImpactSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <DonationSection />
    </>
  );
}
