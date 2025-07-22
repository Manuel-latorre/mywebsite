import { Moon, Sun } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "@/contexts/ThemeContext"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative sm:h-10 sm:w-10 w-full max-sm:p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center max-sm:justify-start transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          /* rotate: theme === "dark" ? 180 : 0, */
          scale: theme === "dark" ? 1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="text-sm font-light text-foreground flex items-center justify-center gap-2"
      >
        {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="text-sm font-light text-foreground sm:hidden">{theme === "light" ? "Light" : "Dark"}</span>
      </motion.div>
    </motion.button>
  )
}
