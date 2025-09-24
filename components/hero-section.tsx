// components/hero-section.tsx
"use client";

import Image from "next/image";
import hero from "@/public/hero-image.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Clean Water
            <span className="block text-accent">Changes Everything</span>
          </h1>

          <p className="animate-fade-in-up anim-delay-150 text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Providing access to clean water to underserved communities in East Africa,
            transforming lives one drop at a time.
          </p>

          <div className="animate-fade-in-up anim-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Donate — same look and feel as the header button */}
            <Button
              size="sm"
              className="btn-caps cursor-pointer h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              onClick={() =>
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Donate Now
              <ArrowRight className="ml-2 w-5 h-5 -mr-1 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Learn more — outline, but still small-caps + pointer, with play icon */}
            <Button
              variant="outline"
              size="sm"
              className="btn-caps cursor-pointer h-11 px-6 text-[1rem] border-white text-white hover:bg-white hover:text-black font-semibold bg-transparent group"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </div>

          {/* Stats (now 4 items including Health Improvement) */}
          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">50,000+</div>
                <div className="text-white/80">People Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">120+</div>
                <div className="text-white/80">Wells Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-white/80">Health Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-white/80">Communities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
