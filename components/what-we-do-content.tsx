// components/what-we-do-content.tsx
import { Droplets, ShieldCheck, Sprout, Sparkles, ClipboardList, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatWeDoContent() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page heading */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">
          What we do
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Approach</h1>
        <p className="text-muted-foreground">
          We pair science, training, and local leadership to keep safe water flowing.
          That means testing and securing clean sources, building and maintaining wells,
          strengthening sanitation, restoring degraded land, and teaching practical hygiene
          so families can store and use water safely.
        </p>
      </div>

      {/* How we work */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="sr-only">How we work</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <WorkCard
            icon={<Droplets className="h-5 w-5" />}
            title="Water"
            text="We conduct research and rigorous water testing to secure safe sources, prioritizing communities where access is limited—so the most vulnerable have reliable, clean water."
          />
          <WorkCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Sanitation"
            text="We strengthen sanitation systems to prevent waterborne disease and improve health. WASH—safe drinking water, sanitation, and hygiene—is core to lasting infrastructure."
          />
          <WorkCard
            icon={<Sprout className="h-5 w-5" />}
            title="Tree planting"
            text="We restore degraded land with research-backed, region-specific species. Using swales and half-moons to capture rain, fruit trees support food and income while healing the soil."
          />
          <WorkCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Hygiene"
            text="We teach practical hygiene so families can store and use water safely, reducing contamination and protecting public health."
          />
        </div>
      </div>

      {/* Our Commitment */}
      <div className="mt-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2 text-center">
          Our commitment
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">From research to results</h3>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          We’re committed to clean water access that improves health, reduces poverty, and builds
          resilient communities. Through innovative solutions and community-led upkeep, people thrive.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 mt-8">
          <StepCard
            icon={<ClipboardList className="h-5 w-5" />}
            label="Preparation"
            text="Side-by-side with local communities, we research areas facing water scarcity to design the right solution."
          />
          <StepCard
            icon={<Wrench className="h-5 w-5" />}
            label="Realization"
            text="With local experts, we train on hygiene practices, risks of contamination, and long-term maintenance of water systems."
          />
          <StepCard
            icon={<TrendingUp className="h-5 w-5" />}
            label="Result"
            text="Communities strengthen their economies through sustainable agriculture, tree planting, and improved livelihoods."
          />
        </div>
      </div>


    </section>
  );
}

/* --------- small cards --------- */
function WorkCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group h-full rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md flex flex-col">
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition">
          {icon}
        </span>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

function StepCard({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 h-full">
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20">{icon}</span>
        <span className="text-sm font-semibold tracking-wide">{label}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
