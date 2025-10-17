import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground text-center md:text-right">
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.links.privacy")}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.links.terms")}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.links.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
