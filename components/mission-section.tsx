"use client";

import Image from "next/image";
// Drop your partner logos into public/partners/ and import them:
import partner1 from "@/public/mosaic.png";
import partner2 from "@/public/mandani.png";
import partner3 from "@/public/mgp.png";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            We identify communities in East Africa facing severe water scarcity and fund sustainable solutions,
            including borehole drilling and infrastructure development.
          </p>
        </div>

        {/* 4 tiles */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            { title: "We Build", text: "We construct and restore water systems such as deep wells, pipelines, and treatment plants to ensure access to clean and reliable water for those in need." },
            { title: "We Empower", text: "We train local residents in borehole maintenance and pump repair, establish water committees, and promote community-led management for self-reliance." },
            { title: "We Educate", text: "We empower communities through workshops on water hygiene, conservation, and maintenance, ensuring long-term sustainability and better health outcomes." },
            { title: "We Nourish", text: "By providing access to clean water, we enable healthier lives, reduce waterborne diseases, and create opportunities for growth, education, and economic development." },
          ].map((card) => (
            <div key={card.title} className="rounded-lg bg-blue-600 px-5 py-6 text-white">
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm/6 opacity-90">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full h-full"
              // Replace with your real video URL
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
              title="Samawada video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Partners */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Our Partners
          </p>
          <div className="mt-6 grid grid-cols-3 gap-10 justify-items-center max-w-3xl mx-auto">
            <Image src={partner1} alt="Partner 1" width={160} height={160} className="h-20 w-auto" />
            <Image src={partner2} alt="Partner 2" width={160} height={160} className="h-20 w-auto" />
            <Image src={partner3} alt="Partner 3" width={160} height={160} className="h-20 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
