import { useState, useEffect, useCallback } from 'react';

interface UseActiveSectionProps {
  links: Array<{ href: string; name: string }>;
}

export const useActiveSection = ({ links }: UseActiveSectionProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Función de scroll suave
  const smoothScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  const handleLinkClick = useCallback((
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    smoothScrollTo(targetId);
  }, [smoothScrollTo]);

  // Detectar sección activa
  useEffect(() => {
    const sectionIds = links.map(link => link.href.replace("#", ""));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    let intersectionEntries: { [key: string]: number } = {};
    let rafId: number;

    const updateActiveSection = () => {
      const mostVisibleSection = Object.entries(intersectionEntries).reduce(
        (max, [id, ratio]) => ratio > max.ratio ? { id, ratio } : max,
        { id: "", ratio: 0 }
      );

      if (mostVisibleSection.id) {
        setActiveSection(`#${mostVisibleSection.id}`);
      }
    };

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

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      sections.forEach((section: any) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [links]);

  return {
    activeSection,
    handleLinkClick,
    smoothScrollTo
  };
};