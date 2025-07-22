import { useState, useEffect } from "react";
import { BrainIcon, BriefcaseBusinessIcon, HouseIcon, MailIcon } from "lucide-react";
import DropdownSettings from "@/components/navbar/DropdownSettings";

const mobileLinks = [
  {
      icon: <HouseIcon className="w-6 h-6"/>,
      href: "#aboutme"
  },
  {
      icon: <BriefcaseBusinessIcon className="w-6 h-6"/>,
      href: "#experience"
  },
  {
      icon: <BrainIcon className="w-6 h-6"/>,
      href: "#skills"
  },
  {
      icon: <MailIcon className="w-6 h-6"/>,
      href: "#contact"
  }
]

const Mobilenav = () => {
  const links = mobileLinks;
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
    <nav className="z-50 fixed bottom-2 left-1/2 -translate-x-1/2 w-[97%] rounded-xl border bg-background/30 backdrop-blur-xl flex justify-between items-center px-4 py-2 sm:hidden">
      <div className="flex items-center gap-4 w-full justify-between">
        {mobileLinks.map((link: any) => {
          const isActive = activeSection === link.href;
          return (
            <a
              href={link.href}
              key={link.href}
              className={`transition-colors duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] p-2 rounded-lg"
                  : "text-foreground/60 hover:bg-gradient-to-r hover:from-[#C75305] hover:via-[#FE9400] hover:to-[#E34401] hover:bg-clip-text hover:text-transparent"
              }`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.icon}
            </a>
          );
        })}
      <DropdownSettings />
      </div>
    </nav>
  );
};

export default Mobilenav;
