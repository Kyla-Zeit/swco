// app/what-we-do/page.tsx
import type { Metadata } from "next";
import { WhatWeDoContent } from "@/components/what-we-do-content";

export const metadata: Metadata = {
  title: "What We Do — Samawada",
  description: "Our approach to clean water: access, sanitation, hygiene, and climate resilience.",
};

export default function WhatWeDoPage() {
  return (
    <main className="pt-16 lg:pt-[76px]">
      <WhatWeDoContent />
    </main>
  );
}
