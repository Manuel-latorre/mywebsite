import { lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

// Componentes críticos - above the fold
import Navbar from "./components/navbar/Navbar";
import Mobilenav from "./components/navbar/Mobilenav";
import Presentation from "./components/sections/presentation/Presentation";

// Componentes lazy - below the fold
const Experience = lazy(() => import("./components/sections/experience/Experience"));
const Skills = lazy(() => import("./components/sections/skills/Skills"));
const ContactForm = lazy(() => import("./components/sections/contact/ContactForm"));
const Footer = lazy(() => import("./components/sections/footer/Footer"));

// Skeleton optimizado
const SectionSkeleton = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
      </div>
    </div>
  </div>
);

// Componente wrapper para carga progresiva
const LazySection = ({ 
  children, 
  fallback = <SectionSkeleton /> 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    rootMargin: '100px 0px',
    threshold: 0.1,
  });

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        <div className="h-96" />
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        
        {/* Componentes críticos */}
        <Navbar />
        <Mobilenav />
        <Presentation />
        
        {/* Componentes lazy con carga progresiva */}
        <LazySection>
          <Experience />
        </LazySection>
        
        <LazySection>
          <Skills />
        </LazySection>
        
        <LazySection>
          <ContactForm />
        </LazySection>
        
        <LazySection>
          <Footer />
        </LazySection>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;