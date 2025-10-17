import { Zap, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      titleKey: "about.features.speed.title",
      descKey: "about.features.speed.desc",
      delay: 0,
    },
    {
      icon: Target,
      titleKey: "about.features.precision.title",
      descKey: "about.features.precision.desc",
      delay: 100,
    },
    {
      icon: TrendingUp,
      titleKey: "about.features.scalability.title",
      descKey: "about.features.scalability.desc",
      delay: 200,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
