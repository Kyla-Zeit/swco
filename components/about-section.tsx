// components/about-section.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Top intro */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="btn-caps text-xs tracking-[0.14em] text-primary mb-2">
          From displacement to empowerment
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Samawada</h2>
        <p className="text-muted-foreground">
          We partner with communities to expand clean water access and the opportunity it unlocks —
          healthier families, stronger schools, and resilient local economies.
        </p>
      </div>

      {/* Two columns */}
      <div className="grid gap-6 lg:grid-cols-2 mt-10">
        {/* Our story */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-xl font-semibold mb-3">Our story</h3>

          <p className="text-muted-foreground">
            Born in Somalia and displaced by war, our founder rebuilt life in Canada but never forgot those left behind.
            A 2015 return revealed drought, gender inequality, and fragile livelihoods alongside extraordinary
            resilience. In 2018 she created <span className="font-semibold">Samawada</span> — “carrying something
            good” — to partner with communities on clean water, dignity, and long-term opportunity so families can
            thrive.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Community-led, women-centered solutions</li>
            <li>• Clean water access with ongoing maintenance</li>
            <li>• Climate-resilient projects and transparent impact</li>
          </ul>

          <div className="mt-5">
            <Button
              asChild
              size="sm"
              className="btn-caps cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/journey">Read The Full Story</Link>
            </Button>
          </div>
        </div>

        {/* What we do */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-xl font-semibold mb-3">What we do</h3>
          <p className="text-muted-foreground">
            We work with local leaders to deliver and maintain clean water systems — deep wells, distribution points,
            and training — improving health, education, and livelihoods across East African communities.
          </p>

          <div className="mt-5">
            <Button
              size="sm"
              className="btn-caps cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() =>
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
