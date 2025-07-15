"use client";

/**
 * @author: @dorian_baffier
 * @description: Social Button
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Instagram, Linkedin, Link, GithubIcon } from "lucide-react";
import { motion } from "motion/react";

interface SocialButtonProps {
    className?: string;
}

export default function SocialButton({
    className,
}: SocialButtonProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const shareButtons = [
        { icon: GithubIcon, label: "Github" },
        { icon: Instagram, label: "Instagram" },
        { icon: Linkedin, label: "Linkedin" },
        { icon: Link, label: "Copy link" },
    ];

    const handleShare = (index: number) => {
        setActiveIndex(index);
        setTimeout(() => setActiveIndex(null), 300);
    };

    return (
        <div className="flex h-10 overflow-hidden">
            {shareButtons.map((button, i) => (
                <motion.button
                    type="button"
                    key={`share-${button.label}`}
                    aria-label={button.label}
                    onClick={() => handleShare(i)}
                    className={cn(
                        "h-10",
                        "w-10",
                        "flex items-center justify-center",
                        "bg-black dark:bg-white",
                        "text-white dark:text-black",
                        i === 0 && "rounded-l-md",
                        i === 3 && "rounded-r-md",
                        "border-r border-white/10 dark:border-black/10 last:border-r-0",
                        "hover:bg-gray-900 dark:hover:bg-gray-100",
                        "outline-none",
                        "relative overflow-hidden",
                        "transition-colors duration-200",
                        className
                    )}
                >
                    <motion.div
                        className="relative z-10"
                        animate={{
                            scale: activeIndex === i ? 0.85 : 1,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <button.icon className="w-4 h-4" />
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 bg-white dark:bg-black"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: activeIndex === i ? 0.15 : 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    />
                </motion.button>
            ))}
        </div>
    );
}
