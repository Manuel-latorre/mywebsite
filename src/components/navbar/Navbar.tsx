import { getLinks } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const links = getLinks(t);
  const [activeSection, setActiveSection] = useState<string>("");

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

  // Detectar sección activa usando Intersection Observer mejorado
  useEffect(() => {
    const sectionIds = links.map((link: any) => link.href.replace("#", ""));
    const sections = sectionIds.map((id: any) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    let intersectionEntries: { [key: string]: number } = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            intersectionEntries[sectionId] = entry.intersectionRatio;
          } else {
            delete intersectionEntries[sectionId];
          }
        });

        // Encontrar la sección con mayor ratio de intersección
        const mostVisibleSection = Object.entries(intersectionEntries).reduce(
          (max, [id, ratio]) => ratio > max.ratio ? { id, ratio } : max,
          { id: "", ratio: 0 }
        );

        if (mostVisibleSection.id) {
          setActiveSection(`#${mostVisibleSection.id}`);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    sections.forEach((section: any) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section: any) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [links]);

  return (
    <nav className="z-50 sticky top-2 w-[97%] lg:top-5 rounded-xl lg:rounded-full border bg-background/30 backdrop-blur-xl flex justify-between items-center pl-4 px-2 py-2 lg:w-full lg:max-w-4xl max-sm:hidden mx-auto">
      <div className="flex items-center gap-4 max-sm:hidden">
        {links.map((link: any) => {
          const isActive = activeSection === link.href;
          return (
            <a
              href={link.href}
              key={link.name}
              className={`font-medium transition-colors duration-300 ${
                isActive
                  ? "textgradient"
                  : "text-foreground/60 hover:bg-gradient-to-r hover:from-[#C75305] hover:via-[#FE9400] hover:to-[#E34401] hover:bg-clip-text hover:text-transparent"
              }`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <a
          href="#contact"
          className="lg:block hidden px-4 py-1 cursor-pointer rounded-full border border-orange-400 textgradient"
        >
          {t.nav.letsTalk}
        </a>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
