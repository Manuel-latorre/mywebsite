import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/navbar/Navbar"
import Presentation from "./components/sections/presentation/Presentation"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-dvh w-full bg-background text-foreground transition-colors duration-300">
        <Navbar />
        
        {/* <main className="">
          <BentoGrid />
        </main> */}
        
          <Presentation />
      </div>
    </ThemeProvider>
  )
}

export default App
