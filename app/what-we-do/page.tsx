// app/what-we-do/page.tsx
import type { Metadata } from "next";
import { WhatWeDoContent } from "@/components/what-we-do-content";

export const metadata: Metadata = {
  title: "Our Approach — Samawada",
  description:
    "How we keep safe water flowing: testing and securing sources, sanitation, tree planting, hygiene education, and community-led upkeep.",
  openGraph: {
    title: "Our Approach — Samawada",
    description:
      "How we keep safe water flowing: testing and securing sources, sanitation, tree planting, hygiene education, and community-led upkeep.",
    type: "website",
  },
};

export default function WhatWeDoPage() {
  return <WhatWeDoContent />;
}
