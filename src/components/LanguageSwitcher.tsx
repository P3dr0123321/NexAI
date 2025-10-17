import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const flags: Record<string, JSX.Element> = {
  en: <ReactCountryFlag countryCode="GB" svg style={{ fontSize: "1.5em" }} />, // 🇬🇧 English
  pt: <ReactCountryFlag countryCode="PT" svg style={{ fontSize: "1.5em" }} />, // 🇵🇹 Portuguese
  fr: <ReactCountryFlag countryCode="FR" svg style={{ fontSize: "1.5em" }} />, // 🇫🇷 French
  es: <ReactCountryFlag countryCode="ES" svg style={{ fontSize: "1.5em" }} />, // 🇪🇸 Spanish
  de: <ReactCountryFlag countryCode="DE" svg style={{ fontSize: "1.5em" }} />, // 🇩🇪 German
  nl: <ReactCountryFlag countryCode="NL" svg style={{ fontSize: "1.5em" }} />, // 🇳🇱 Dutch
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || "en";

  const change = (lng: keyof typeof flags) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <span className="text-lg leading-none">{flags[current]}</span>
          <span className="hidden sm:inline">{current.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => change("en")} className="gap-2">
          <ReactCountryFlag countryCode="GB" svg style={{ fontSize: "1.25em" }} />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => change("pt")} className="gap-2">
          <ReactCountryFlag countryCode="PT" svg style={{ fontSize: "1.25em" }} />
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => change("fr")} className="gap-2">
          <ReactCountryFlag countryCode="FR" svg style={{ fontSize: "1.25em" }} />
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => change("es")} className="gap-2">
          <ReactCountryFlag countryCode="ES" svg style={{ fontSize: "1.25em" }} />
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => change("de")} className="gap-2">
          <ReactCountryFlag countryCode="DE" svg style={{ fontSize: "1.25em" }} />
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => change("nl")} className="gap-2">
          <ReactCountryFlag countryCode="NL" svg style={{ fontSize: "1.25em" }} />
          Nederlands
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
