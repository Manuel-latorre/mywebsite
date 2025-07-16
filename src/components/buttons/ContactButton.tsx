import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const ContactButton = () => {
    return (
            <a href="#contact"
                className={cn(
                    "group/start relative w-full",
                    "flex items-center justify-between",
                    "p-3 rounded-xl",
                    "transition-all duration-300",
                    "bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-100",
                    "dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
                    "hover:from-orange-500/10 hover:from-0% hover:via-orange-500/5 hover:via-100% hover:to-transparent hover:to-100%",
                    "dark:hover:from-orange-500/20 dark:hover:from-0% dark:hover:via-orange-500/10 dark:hover:via-100% dark:hover:to-transparent dark:hover:to-100%",
                    "hover:scale-[1.02] hover:cursor-pointer"
                )}
            >
                <span className="text-sm font-medium text-zinc-900 dark:text-white transition-colors duration-300 group-hover/start:text-orange-600 dark:group-hover/start:text-orange-400">
                    Contact me
                </span>
                <div className="relative group/icon">
                    <div
                        className={cn(
                            "absolute inset-[-6px] rounded-lg transition-all duration-300",
                            "bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent",
                            "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                        )}
                    />
                    <ArrowRight className="relative z-10 w-4 h-4 text-orange-500 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
                </div>
            </a>
    )
}

export default ContactButton