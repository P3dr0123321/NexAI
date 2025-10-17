import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(59, 130, 246, 0.05), rgba(255, 255, 255, 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌐 Language Switcher in the top-right corner */}
      <div className="absolute top-5 right-5 z-20">
        <LanguageSwitcher />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          {/* Brand name */}
          <h1 className="mb-8 text-6xl font-extrabold leading-none tracking-tight text-primary md:text-8xl">
            {t("brand")}
          </h1>

          {/* Main slogan */}
          <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {t("heroTitleA")}{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("heroTitleB")}
            </span>
          </h2>

          {/* Subtitle / description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("heroSubtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              {t("ctaPrimary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
