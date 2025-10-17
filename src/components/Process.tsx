import { MessageSquare, Wrench, Rocket, LifeBuoy } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We listen to your needs and analyze your current workflows to identify opportunities for improvement."
    },
    {
      icon: Wrench,
      title: "Development",
      description: "Our team builds custom solutions tailored to your specific requirements using the latest technologies."
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "We deploy your solution with minimal disruption, ensuring a smooth transition and proper training."
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description: "Continuous monitoring, optimization, and updates to ensure your systems perform at their best."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers results every time
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow relative z-10">
                    <step.icon className="h-10 w-10 text-accent-foreground" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-soft transition-all duration-300">
                  <div className="text-sm font-bold text-primary mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
