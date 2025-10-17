import { Bot, Globe, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automation Solutions",
      description: "Streamline your workflows with custom automation. From CRM integrations to AI agents, we build systems that save you hours every day.",
      features: ["Workflow Automation", "CRM Integration", "AI Agents", "Data Processing"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, responsive websites built to convert. From landing pages to e-commerce platforms, we create digital experiences that drive results.",
      features: ["Responsive Design", "E-commerce", "SEO Optimization", "Custom Features"]
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Your success is our priority. We provide continuous maintenance, optimization, and updates to keep your systems running smoothly.",
      features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization", "Technical Support"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to transform how you do business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-accent">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
