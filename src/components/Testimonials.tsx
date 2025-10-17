import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      nameKey: "testimonials.items.sarah.name",
      roleKey: "testimonials.items.sarah.role",
      contentKey: "testimonials.items.sarah.content",
      rating: 5,
    },
    {
      nameKey: "testimonials.items.michael.name",
      roleKey: "testimonials.items.michael.role",
      contentKey: "testimonials.items.michael.content",
      rating: 5,
    },
    {
      nameKey: "testimonials.items.emily.name",
      roleKey: "testimonials.items.emily.role",
      contentKey: "testimonials.items.emily.content",
      rating: 5,
    },
  ] as const;

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
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
                <p className="text-muted-foreground mb-6 italic">
                  “{t(testimonial.contentKey)}”
                </p>
                <div>
                  <div className="font-semibold">{t(testimonial.nameKey)}</div>
                  <div className="text-sm text-muted-foreground">
                    {t(testimonial.roleKey)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};