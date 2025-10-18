import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation();

  // imagens e links ficam fora do i18n (não mudam por idioma)
  const members = [
    {
      key: "pedro",
      image: "pedro-grossi-vicq.jpeg",
      linkedin: "https://www.linkedin.com/in/pedro-grossi-vicq-3b499428a/",
    },
    {
      key: "miguel",
      image: "miguel-jerónimo.jpg",
      linkedin: "https://www.linkedin.com/in/miguel-jer%C3%B3nimo-ba24152b7/",
    },
    {
      key: "antonio",
      image: "antónio-maria-gonçalves.jpg",
      linkedin: "https://www.linkedin.com/in/ant%C3%B3nio-maria-gon%C3%A7alves-73b43430a/",
    },
  ] as const;

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("team.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m, index) => (
            <Card
              key={m.key}
              className="border-border hover:shadow-glow transition-all duration-300 bg-card/90 backdrop-blur animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <img
                  src={m.image}
                  alt={t(`team.members.${m.key}.name`)}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold mb-1">
                  {t(`team.members.${m.key}.name`)}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {t(`team.members.${m.key}.role`)}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(`team.members.${m.key}.desc`)}
                </p>

                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    LinkedIn →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
