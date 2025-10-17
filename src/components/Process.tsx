import { MessageSquare, Wrench, Rocket, LifeBuoy } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: MessageSquare,
      titleKey: "process.steps.consultation.title",
      descKey: "process.steps.consultation.desc",
    },
    {
      icon: Wrench,
      titleKey: "process.steps.development.title",
      descKey: "process.steps.development.desc",
    },
    {
      icon: Rocket,
      titleKey: "process.steps.launch.title",
      descKey: "process.steps.launch.desc",
    },
    {
      icon: LifeBuoy,
      titleKey: "process.steps.support.title",
      descKey: "process.steps.support.desc",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("process.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("process.subtitle")}
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
                  <div className="text-sm font-bold text-primary mb-2">
                    {t("process.stepLabel", { number: index + 1 })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};