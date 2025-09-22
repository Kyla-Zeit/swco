// components/what-we-do-content.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Shield, Sprout, GraduationCap, ArrowRight } from "lucide-react";

export function WhatWeDoContent() {
  return (
    <>
      {/* your existing “What We Do” hero + pillars + steps + CTA here */}
      {/* ...exact content you already have... */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold">Help bring clean water to more families</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Your support funds reliable systems, local training, and climate-smart restoration.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="btn-caps bg-primary text-primary-foreground">
              <Link href="/#donate">Donate Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="btn-caps">
              <Link href="/#impact">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
