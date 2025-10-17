import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      categoryKey: "portfolio.projects.ecommerce.category",
      titleKey: "portfolio.projects.ecommerce.title",
      descKey: "portfolio.projects.ecommerce.desc",
    },
    {
      categoryKey: "portfolio.projects.website.category",
      titleKey: "portfolio.projects.website.title",
      descKey: "portfolio.projects.website.desc",
    },
    {
      categoryKey: "portfolio.projects.crm.category",
      titleKey: "portfolio.projects.crm.title",
      descKey: "portfolio.projects.crm.desc",
    },
    {
      categoryKey: "portfolio.projects.saas.category",
      titleKey: "portfolio.projects.saas.title",
      descKey: "portfolio.projects.saas.desc",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-background/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <ExternalLink className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-accent mb-2">
                  {t(project.categoryKey)}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(project.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};