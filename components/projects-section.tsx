import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users } from "lucide-react"

const projects = [
  {
    title: "Mogadishu Water Initiative",
    location: "Mogadishu, Somalia",
    date: "2024",
    beneficiaries: "5,000 people",
    image: "/water-distribution-center-in-mogadishu-with-blue-w.jpg",
    description: "Establishing sustainable water distribution points in urban areas of Mogadishu.",
    status: "Active",
  },
  {
    title: "Rural Well Construction",
    location: "Gedo Region, Somalia",
    date: "2024",
    beneficiaries: "2,500 people",
    image: "/hand-pump-water-well-in-rural-somalia-with-women-c.jpg",
    description: "Building deep water wells in remote rural communities.",
    status: "Completed",
  },
  {
    title: "School Water Program",
    location: "Bay Region, Somalia",
    date: "2023",
    beneficiaries: "1,200 students",
    image: "/school-children-in-somalia-using-clean-water-facil.jpg",
    description: "Installing water systems in schools to improve education and health.",
    status: "Completed",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the communities we're transforming through sustainable water solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Active" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{project.beneficiaries}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-semibold bg-transparent">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
