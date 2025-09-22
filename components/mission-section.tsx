// components/mission-section.tsx
"use client";

export function MissionSection() {
  return (
    <section id="mission" className="bg-muted/40 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="btn-caps text-xs tracking-[0.14em] text-primary mb-2">How we work</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            We co-design practical, climate-aware water solutions with local leaders and maintain them
            so every project keeps working long after the ribbon-cutting.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold mb-2">We Build</h3>
            <p className="text-sm text-muted-foreground">
              Boreholes, wells, distribution points, and treatment — built for local conditions.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold mb-2">We Empower</h3>
            <p className="text-sm text-muted-foreground">
              Train well committees, fund maintenance, and strengthen community-led management.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold mb-2">We Educate</h3>
            <p className="text-sm text-muted-foreground">
              Hygiene workshops and water stewardship improve long-term outcomes for families.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold mb-2">We Nourish</h3>
            <p className="text-sm text-muted-foreground">
              Clean water frees time for school and livelihoods, boosting health and local economies.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 sm:col-span-4">
            <h4 className="btn-caps text-xs tracking-[0.14em] text-primary mb-3">Our commitment</h4>
            <div className="grid gap-4 sm:grid-cols-4">
              <div>
                <h5 className="font-semibold">Preparation</h5>
                <p className="text-sm text-muted-foreground">
                  Community research, water mapping, and clear maintenance plans.
                </p>
              </div>
              <div>
                <h5 className="font-semibold">Partnership</h5>
                <p className="text-sm text-muted-foreground">
                  Women-centered leadership and transparent budgets.
                </p>
              </div>
              <div>
                <h5 className="font-semibold">Realization</h5>
                <p className="text-sm text-muted-foreground">
                  Local contractors, local jobs, on-the-ground training.
                </p>
              </div>
              <div>
                <h5 className="font-semibold">Result</h5>
                <p className="text-sm text-muted-foreground">
                  Working systems, verified impact, annual check-ins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
