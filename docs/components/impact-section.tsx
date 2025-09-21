import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Users, Heart, Zap } from "lucide-react"

const impacts = [
  {
    icon: Droplets,
    title: "Clean Water Access",
    description: "Every $50 provides clean water access for a family of 5 for an entire month",
    stat: "50,000+",
    label: "People with clean water",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Building sustainable infrastructure that empowers local communities",
    stat: "120+",
    label: "Wells constructed",
  },
  {
    icon: Heart,
    title: "Health Improvement",
    description: "Reducing waterborne diseases and improving overall community health",
    stat: "85%",
    label: "Reduction in illness",
  },
  {
    icon: Zap,
    title: "Economic Growth",
    description: "Freeing up time for education and economic activities",
    stat: "15+",
    label: "Communities transformed",
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how your donations create lasting change in East African communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <impact.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="text-3xl font-bold text-primary mb-2">{impact.stat}</div>
                <div className="text-sm text-muted-foreground mb-4">{impact.label}</div>

                <h3 className="text-xl font-semibold text-foreground mb-4">{impact.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
