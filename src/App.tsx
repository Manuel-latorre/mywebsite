import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Presentation from "./components/sections/presentation/Presentation";
import { BackgroundLines } from "./components/ui/background-lines";
import Experience from "./components/sections/experience/Experience";
import Skills from "./components/sections/skills/Skills";

function App() {
  return (
    <ThemeProvider>
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
            <div className="text-center">
              <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">
                Contact
              </h2>
              <p className="text-xl text-foreground/60">
                This section is coming soon...
              </p>
            </div>
          </section>
        </div>
      </BackgroundLines>
    </ThemeProvider>
  );
}

export default App;
