import { getLinks } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import { useState, useEffect, useCallback, useMemo } from "react";

const Navbar = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const links = useMemo(() => getLinks(t), [t]);
  const [activeSection, setActiveSection] = useState<string>("");

  // Función de scroll inteligente que espera a que las secciones se carguen
  const smartScrollTo = useCallback((elementId: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        return true;
      }
      return false;
    };

    // Intentar scroll inmediato
    if (scrollToElement()) {
      return;
    }

    // Si no existe el elemento, scroll progresivo para cargar secciones lazy
    let attempts = 0;
    const maxAttempts = 50; // 5 segundos máximo
    
    const scrollAndWait = () => {
      attempts++;
      
      // Scroll hacia abajo para activar lazy loading
      const currentScroll = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Calcular posición aproximada basada en el ID de la sección
      let targetPosition = 0;
      switch(elementId) {
        case 'experience':
          targetPosition = windowHeight * 1.2;
          break;
        case 'skills':
          targetPosition = windowHeight * 2.2;
          break;
        case 'contact':
          targetPosition = windowHeight * 3.2;
          break;
        default:
          targetPosition = currentScroll + (windowHeight * 0.8);
      }

      // Scroll gradual para cargar componentes
      window.scrollTo({
        top: Math.min(targetPosition, documentHeight - windowHeight),
        behavior: 'smooth'
      });

      // Esperar y verificar si el elemento ya existe
      setTimeout(() => {
        if (scrollToElement()) {
          return; // Éxito
        }
        
        if (attempts < maxAttempts) {
          scrollAndWait();
        } else {
          console.warn(`No se pudo encontrar la sección: ${elementId}`);
        }
      }, 100);
    };

    scrollAndWait();
  }, []);

  const handleLinkClick = useCallback((
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    smartScrollTo(targetId);
  }, [smartScrollTo]);

  // Detectar sección activa solo para elementos que existen
  useEffect(() => {
    let intersectionEntries: { [key: string]: number } = {};
    let rafId: number;
    let observer: IntersectionObserver;

    const updateActiveSection = () => {
      const mostVisibleSection = Object.entries(intersectionEntries).reduce(
        (max, [id, ratio]) => ratio > max.ratio ? { id, ratio } : max,
        { id: "", ratio: 0 }
      );

      if (mostVisibleSection.id) {
        setActiveSection(`#${mostVisibleSection.id}`);
      }
    };

    const updateObserver = () => {
      // Limpiar observer anterior
      if (observer) {
        observer.disconnect();
      }

      const sectionIds = links.map((link: any) => link.href.replace("#", ""));
      const sections = sectionIds
        .map((id: any) => document.getElementById(id))
        .filter(Boolean);

      if (sections.length === 0) {
        // Reintentar en 500ms si no hay secciones cargadas
        setTimeout(updateObserver, 500);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id;
            if (entry.isIntersecting) {
              intersectionEntries[sectionId] = entry.intersectionRatio;
            } else {
              delete intersectionEntries[sectionId];
            }
          });

          if (rafId) {
            cancelAnimationFrame(rafId);
          }
          rafId = requestAnimationFrame(updateActiveSection);
        },
        {
          threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9],
          rootMargin: "-10% 0px -10% 0px"
        }
      );

      sections.forEach((section: any) => {
        if (section) {
          observer.observe(section);
        }
      });
    };

    // Iniciar observer
    updateObserver();

    // Reobservar cuando se agreguen nuevas secciones al DOM
    const mutationObserver = new MutationObserver(() => {
      updateObserver();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (observer) {
        observer.disconnect();
      }
      mutationObserver.disconnect();
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
          onClick={(e) => handleLinkClick(e, "#contact")}
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