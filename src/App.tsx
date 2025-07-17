import { ThemeProvider } from "./contexts/ThemeContext";import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./components/sections/presentation/Presentation";
import Experience from "./components/sections/experience/Experience";
import Skills from "./components/sections/skills/Skills";
import ContactForm from "./components/sections/contact/ContactForm";
import { Toaster } from "@/components/ui/sonner";
import Mobilenav from "./components/navbar/Mobilenav";
import { BackgroundLines } from "./components/ui/background-lines";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        <BackgroundLines>
          <Navbar />
          <Mobilenav />
          <Presentation />
          <Experience />
          <Skills />
          <ContactForm />
        </BackgroundLines>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
