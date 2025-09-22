// components/about-section.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Top intro */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.14em] text-primary mb-2 btn-caps">
          Who we are
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Samawada</h2>

        {/* concise homepage summary of the Journey */}
        <p className="text-muted-foreground">
          Our story begins with displacement. After fleeing Somalia in the 1990s and returning in 2015,
          our founder saw the toll of conflict, climate shocks, and gender inequality—and the resolve of
          women leading change. In 2018 she launched <span className="font-semibold">Samawada</span>, meaning
          <em> “carrying something good”</em>, to partner with communities on clean water, opportunity, and a
          future where families can thrive.
        </p>
      </div>

      {/* Two columns */}
      <div className="grid gap-6 lg:grid-cols-2 mt-10">
        {/* Our story */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-xl font-semibold mb-3">Our story</h3>
          <p className="text-muted-foreground">
            Started as a grassroots effort, we’ve grown into a nonprofit platform that pairs community archives
            with traveling programs and digital tools. The goal hasn’t changed: access without barriers.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Community-first collaboration</li>
            <li>• Artist support and fair credit</li>
            <li>• Open access and transparent impact</li>
          </ul>

          <div className="mt-5">
            <Button
              asChild
              size="sm"
              className="btn-caps cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/journey">Read the full story</Link>
            </Button>
          </div>
        </div>

        {/* What we do */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-xl font-semibold mb-3">What we do</h3>
          <p className="text-muted-foreground">
            Exhibitions for any space, free learning resources, and a living digital archive. Donations fund
            free admission, artist grants, and digitization.
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
