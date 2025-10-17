import { Zap, Target, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help businesses save time, reduce costs, and scale through intelligent automation 
            and modern web solutions designed for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Speed & Efficiency",
              description: "Streamline operations with automated workflows that work 24/7"
            },
            {
              icon: Target,
              title: "Precision & Accuracy",
              description: "Eliminate human error and ensure consistent, reliable results"
            },
            {
              icon: TrendingUp,
              title: "Scalable Growth",
              description: "Build solutions that grow with your business needs"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
