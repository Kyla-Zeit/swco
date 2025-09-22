"use client";

import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      {/* Center like other sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nice, contained panel */}
        <div className="mx-auto max-w-6xl rounded-xl border bg-background p-6 md:p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">
            Who we are
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Samawada</h2>

          <p className="text-muted-foreground mb-8 max-w-3xl">
            Samawada connects communities to art, history, and each other through exhibitions,
            education, and open digital access. We work with artists, historians, and local
            partners to surface stories that matter.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Our story */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Our story</h3>
              <p className="text-muted-foreground">
                Started as a grassroots effort, we’ve grown into a nonprofit platform that pairs
                community archives with traveling programs and digital tools. The goal hasn’t
                changed: access without barriers.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Community-first collaboration</li>
                <li>• Artist support and fair credit</li>
                <li>• Open access and transparent impact</li>
              </ul>
            </div>

            {/* What we do */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">What we do</h3>
              <p className="text-muted-foreground">
                Exhibitions for any space, free learning resources, and a living digital archive.
                Donations fund free admission, artist grants, and digitization.
              </p>
              <Button
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() =>
                  document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
