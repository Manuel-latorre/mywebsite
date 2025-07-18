import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useTranslations } from "@/lib/translations";
import { getLinks } from "@/lib/utils";

export default function Footer() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const links = getLinks(t);

  // Función para scroll suave personalizada (más compatible)
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    smoothScrollTo(targetId);
  };

  return (
    <footer className="text-gray-300 border-t ">
      <div className="flex items-start justify-around py-12 max-sm:flex-col max-sm:items-start max-sm:justify-start max-sm:gap-12 max-sm:px-6">
        {/* Columna 1: Información de la Empresa y Redes Sociales */}
        <div className="space-y-4">
          <h3 className="text-lg textgradient font-medium">Manuel Latorre</h3>
          <p className="text-sm max-w-sm">
            {translations[language].footer.description}
          </p>
          <div className="flex space-x-4">
            <Link
              to="https://github.com/Manuel-latorre"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/manuel-latorre-frontend-developer/"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" fill="#fff" />
            </Link>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-2">
          <h3 className="text-lg textgradient font-medium">{translations[language].footer.quickLinks}</h3>
          <nav className="space-y-2">
            {links.map((link: any) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm hover:text-white"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Sección de Copyright */}
      <div className="max-sm:pb-24 border-t flex flex-col items-center justify-center h-full py-6 text-center text-sm ">
        &copy; {new Date().getFullYear()} {translations[language].footer.copyright}
      </div>
    </footer>
  );
}
