import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./components/sections/presentation/Presentation";
import { BackgroundLines } from "./components/ui/background-lines";
import Experience from "./components/sections/experience/Experience";
import Skills from "./components/sections/skills/Skills";
import ContactForm from "./components/sections/contact/ContactForm";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <BackgroundLines>
        <div className="min-h-dvh w-full bg-background text-foreground transition-colors duration-300">
          <Navbar />

          <Presentation />

          <Experience/>

          <Skills />

          <section
            id="contact"
            className="min-h-dvh w-full flex items-center justify-center"
          >
            <ContactForm />
          </section>
        </div>
      </BackgroundLines>
    </ThemeProvider>
  );
}

export default App;
