import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "The automation solution they built saved us 20+ hours per week. ROI was immediate and impressive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLab",
      content: "Our new website increased conversions by 150%. Professional, responsive, and results-driven.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, FlowCo",
      content: "Their support is outstanding. They don't just build it and leave - they're true partners in our success.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-soft transition-all duration-300 animate-slide-up bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="h-16 w-16" />
              </div>
              <CardContent className="p-6 relative">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
