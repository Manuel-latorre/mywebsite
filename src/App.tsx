import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "@/components/ui/sonner";

// Componentes críticos - above the fold
import Navbar from "./components/navbar/Navbar";
import Mobilenav from "./components/navbar/Mobilenav";
import Presentation from "./components/sections/presentation/Presentation";

// Componentes estáticos - cargados inmediatamente
import Experience from "./components/sections/experience/Experience";
import Skills from "./components/sections/skills/Skills";
import ContactForm from "./components/sections/contact/ContactForm";
import Footer from "./components/sections/footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        
        {/* Componentes críticos */}
        <Navbar />
        <Mobilenav />
        <Presentation />
        
        {/* Componentes estáticos - cargados inmediatamente */}
        <Experience />
        <Skills />
        <ContactForm />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;