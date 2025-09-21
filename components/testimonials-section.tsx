import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Before Samawada came to our village, we had to walk 5 kilometers every day for water. Now our children can go to school instead of fetching water.",
    author: "Amina Hassan",
    role: "Community Leader",
    location: "Gedo Region, Somalia",
    image: "/portrait-of-somali-woman-community-leader--traditi.jpg",
  },
  {
    quote:
      "The clean water well has transformed our entire community. We've seen a dramatic decrease in waterborne diseases and our children are healthier.",
    author: "Dr. Mohamed Ali",
    role: "Local Health Worker",
    location: "Bay Region, Somalia",
    image: "/portrait-of-somali-male-doctor--medical-profession.jpg",
  },
  {
    quote:
      "Samawada didn't just build a well - they trained our community to maintain it. This ensures clean water for generations to come.",
    author: "Fatima Omar",
    role: "Well Maintenance Coordinator",
    location: "Mogadishu, Somalia",
    image: "/portrait-of-somali-woman-engineer--technical-worke.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Community Voices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear directly from the communities we serve about the impact of clean water access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-6" />

                <blockquote className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
