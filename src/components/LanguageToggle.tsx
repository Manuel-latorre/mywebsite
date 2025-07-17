import { motion } from "motion/react"
import { useLanguage } from "../contexts/LanguageContext"
import { LanguagesIcon } from "lucide-react"

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative sm:h-10 sm:w-10 w-full max-sm:p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center max-sm:justify-start transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="text-sm font-light text-foreground flex items-center justify-center gap-2" 
      >
        <LanguagesIcon className="w-5 h-5 sm:hidden" />
        <span className="sm:hidden">{language === "en" ? "English" : "Español"}</span>
        <span className="hidden sm:block">{language === "en" ? "EN" : "ES"}</span>
      </motion.div>
    </motion.button>
  )
} 