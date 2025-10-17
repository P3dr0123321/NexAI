import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/lib/supabaseClient";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.project) {
      toast({
        title: t("contact.validation.missingTitle"),
        description: t("contact.validation.missingDesc"),
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t("contact.validation.invalidEmailTitle"),
        description: t("contact.validation.invalidEmailDesc"),
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          project: formData.project.trim(),
          lang: i18n.resolvedLanguage || "en",
        },
      ]);

      if (error) {
        console.error(error);
        toast({
          title: "Oops!",
          description: "Não conseguimos enviar agora. Tente novamente em instantes.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: t("contact.success.title"),
        description: t("contact.success.desc"),
      });
      setFormData({ name: "", email: "", project: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro inesperado",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contact.form.placeholders.name")}
                  className="w-full"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("contact.form.placeholders.email")}
                  className="w-full"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  {t("contact.form.project")}
                </label>
                <Textarea
                  id="project"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder={t("contact.form.placeholders.project")}
                  className="w-full min-h-[120px]"
                  disabled={loading}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Enviando..." : t("contact.form.submit")}
              </Button>
            </form>
          </div>

          <div className="animate-slide-up space-y-8" style={{ animationDelay: "100ms" }}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t("contact.sidebar.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("contact.sidebar.desc")}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>hello@example.com</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("contact.sidebar.follow")}</h4>
              <div className="flex gap-3">
                {[{ icon: Linkedin, href: "#" }].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
