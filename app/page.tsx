import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { DonationSection } from "@/components/donation-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
            {/* Spacer equal to header height so content isn't hidden */}
      <div className="h-16 lg:h-[76px]" aria-hidden />
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <DonationSection />
      <Footer />
    </main>
  )
}
