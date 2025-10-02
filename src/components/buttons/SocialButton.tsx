import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";

interface SocialButtonProps {
    className?: string;
}

export default function SocialButton({
    className,
}: SocialButtonProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const socialLinks = [
        { 
            icon: <GithubIcon width={24} height={24}/>, 
            label: "Github", 
            href: "https://github.com/manuel-latorre",
            color: "bg-zinc-800",
            hoverColor: ""
        },
     
        { 
            icon: <LinkedInIcon width={24} height={24} fill="#fff"/>, 
            label: "LinkedIn", 
            href: "https://www.linkedin.com/in/manuel-latorre-fullstack/",
            color: "bg-zinc-800",
            hoverColor: "group-hover:text-white "
        },
    ];

    return (
        <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
                <motion.a
                    key={`social-${social.label}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.label} profile`}
                    className={cn(
                        "group relative flex items-center justify-center",
                        "w-12 h-12 rounded-xl",
                        "bg-gray-100 dark:bg-zinc-900",
                        "border border-gray-200 dark:border-zinc-700",
                        "transition-all duration-300 ease-out",
                        "hover:scale-110 hover:shadow-lg",
                        "hover:border-transparent",
                        social.color,
                        className
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className={cn(
                            "relative z-10 transition-colors duration-300",
                            "text-gray-600 dark:text-gray-300",
                            social.hoverColor
                        )}
                        animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                    >
                        {social.icon}
                    </motion.div>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: hoveredIndex === index 
                                ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                                : "transparent"
                        }}
                    />

                    
                </motion.a>
            ))}
        </div>
    );
}
