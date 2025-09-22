// components/projects-section.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

type Project = {
  id: string;
  title: string;
  summary: string;
  status: "Active" | "Completed";
  location: string;
  year: number;
  people: number;
};

const projects: Project[] = [
  {
    id: "mogadishu-water-initiative",
    title: "Mogadishu Water Initiative",
    summary:
      "Establishing sustainable water distribution points in urban areas of Mogadishu.",
    status: "Active",
    location: "Mogadishu, Somalia",
    year: 2024,
    people: 5000,
  },
  {
    id: "rural-well-construction",
    title: "Rural Well Construction",
    summary:
      "Building deep water wells in remote rural communities.",
    status: "Completed",
    location: "Gedo Region, Somalia",
    year: 2024,
    people: 2500,
  },
  {
    id: "school-water-program",
    title: "School Water Program",
    summary:
      "Installing water systems in schools to improve education and health.",
    status: "Completed",
    location: "Bay Region, Somalia",
    year: 2023,
    people: 1200,
  },
];

function StatusPill({ status }: { status: Project["status"] }) {
  const styles =
    status === "Active"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-sky-100 text-sky-700";
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Projects</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Discover the communities we’re transforming through sustainable water solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.id} className="border-border bg-card shadow-sm">
              <CardHeader className="space-y-2">
                <StatusPill status={p.status} />
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-4">
                <p>{p.summary}</p>

                <div className="space-y-2 text-foreground/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 opacity-70" />
                    <span>{p.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 opacity-70" />
                    <span>{p.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 opacity-70" />
                    <span>{p.people.toLocaleString()} people</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <Button
            asChild
            size="sm"
            className="btn-caps bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer"
          >
            {/* Replace href with a real page when you add it, e.g. /projects */}
            <Link href="/#projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
