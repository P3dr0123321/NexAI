import { Bot, Globe, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  // Normaliza qualquer retorno do i18n (string | object | array) em string[]
  const getFeatures = (key: string): string[] => {
    const v = t(key, { returnObjects: true }) as unknown;

    if (Array.isArray(v)) {
      // Ex.: ["Item A", "Item B"]
      return v.map(String);
    }
    if (v && typeof v === "object") {
      // Ex.: {0:"Item A",1:"Item B"} ou {a:"Item A", b:"Item B"}
      return Object.values(v as Record<string, unknown>).map(String);
    }
    if (typeof v === "string") {
      // Ex.: "Item único"
      return [v];
    }
    return [];
  };

  const services = [
    {
      icon: Bot,
      titleKey: "services.items.automation.title",
      descKey: "services.items.automation.desc",
      featuresKey: "services.items.automation.features",
    },
    {
      icon: Globe,
      titleKey: "services.items.webdev.title",
      descKey: "services.items.webdev.desc",
      featuresKey: "services.items.webdev.features",
    },
    {
      icon: Headphones,
      titleKey: "services.items.support.title",
      descKey: "services.items.support.desc",
      featuresKey: "services.items.support.features",
    },
  ] as const;

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const features: string[] = getFeatures(service.featuresKey);

            return (
              <Card
                key={index}
                className="border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-card/80 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-accent">
                    <service.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{t(service.titleKey)}</CardTitle>
                  <CardDescription className="text-base">{t(service.descKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
