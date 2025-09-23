// components/about-section.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Droplets, Wrench, GraduationCap, Sprout } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Heading + short intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Samawada</h2>
        <p className="text-muted-foreground">
          We partner with communities to expand clean water access and the opportunity it
          unlocks — healthier families, stronger schools, and resilient local economies.
        </p>
      </div>

      {/* Mission tiles */}
      <div id="mission" className="mt-10 max-w-6xl mx-auto">
        <h3 className="sr-only">Our Mission</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MissionCard
            icon={<Wrench className="h-5 w-5" />}
            title="Build"
            text="Boreholes, wells, distribution points and treatment — designed for local conditions and maintained long-term."
          />
          <MissionCard
            icon={<Droplets className="h-5 w-5" />}
            title="Empower"
            text="Train well committees, fund maintenance and strengthen community-led management for durability."
          />
          <MissionCard
            icon={<GraduationCap className="h-5 w-5" />}
            title="Educate"
            text="Hygiene workshops and water stewardship that improve health outcomes for families and schools."
          />
          <MissionCard
            icon={<Sprout className="h-5 w-5" />}
            title="Nourish"
            text="Clean water frees time for learning and livelihoods, boosting household income and local economies."
          />
        </div>
      </div>

      {/* Two columns – equal height cards */}
      <div className="grid gap-6 lg:grid-cols-2 mt-10 items-stretch">
        {/* Our story */}
        <div className="h-full flex flex-col rounded-lg border border-border bg-card p-6">
          <h3 className="text-xl font-semibold mb-3">Our story</h3>
          <p className="text-muted-foreground">
            Born in Somalia and displaced by war, our founder rebuilt life in Canada but never
            forgot those left behind. A 2015 return revealed drought, gender inequality and
            fragile livelihoods alongside extraordinary resilience. In 2018 she created{" "}
            <span className="font-semibold">Samawada</span> — “carrying something good” — to
            partner with communities on clean water, dignity and long-term opportunity so
            families can thrive.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Community-led, women-centered solutions</li>
            <li>• Clean water access with ongoing maintenance</li>
            <li>• Climate-resilient projects and transparent impact</li>
          </ul>

          {/* push actions to the bottom */}
          <div className="mt-auto pt-4 flex flex-wrap gap-3">
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
        <div className="h-full flex flex-col rounded-lg border border-border bg-card p-6">
          <h3 className="text-xl font-semibold mb-3">What we do</h3>
          <p className="text-muted-foreground">
            Samawada pairs science, training, and local leadership to keep safe water flowing.
            We test and secure clean sources, build and maintain wells and distribution points,
            and strengthen sanitation systems to stop water-borne disease. We restore degraded
            land through community tree planting—using rain-catching swales and fruit trees
            that boost food security and income. We teach practical hygiene so families can store
            and use water safely. From early research to hands-on training and long-term upkeep,
            our approach equips communities—especially women and youth—to protect health, grow
            livelihoods, and steward their environment.
          </p>

          {/* push action to the bottom */}
          <div className="mt-auto pt-4">
            <Button
              asChild
              size="sm"
              className="btn-caps cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/what-we-do">See Our Approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function MissionCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* accent stripe */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-emerald-400/60 to-primary/80" />
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-primary/10 p-2 ring-1 ring-primary/20 transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30">
          {icon}
        </div>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
