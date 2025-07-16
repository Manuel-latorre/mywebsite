import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const igz = "https://media.licdn.com/dms/image/v2/D4D03AQHTBYkZbYpVmw/profile-displayphoto-shrink_200_200/B4DZRR2DP1GkAY-/0/1736539911903?e=1758153600&v=beta&t=oLvEdfIbe2arKWY6xJQyK4s_BGplHllJzdPPTA2DMP8"
export const igzl = "https://media.licdn.com/dms/image/v2/D4D03AQHTBYkZbYpVmw/profile-displayphoto-shrink_200_200/B4DZRR2DP1GkAY-/0/1736539911903?e=1758153600&v=beta&t=oLvEdfIbe2arKWY6xJQyK4s_BGplHllJzdPPTA2DMP8"

export const martin = "https://media.licdn.com/dms/image/v2/D4D03AQFKaJYhEC8p8w/profile-displayphoto-scale_200_200/B4DZe.zyyEH4AY-/0/1751252940321?e=1758153600&v=beta&t=zeLH55vEbcCmXiR2P8FUq33v5OiGXkfy92yokOn9NHc"
export const martinl= "https://www.linkedin.com/in/martin-alturria/"


export const links = [
    {
        name: "About me",
        href: "#aboutme"
    },
    {
        name: "Experience",
        href: "#experience"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Contact",
        href: "#contact"
    }
]


// Variantes de animación para el contenedor principal
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
        },
    },
}

// Variantes para elementos que entran desde la izquierda
export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
}

// Variantes para elementos que entran desde la derecha
export const slideInRight = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        },
    },
}

// Variantes para elementos que entran desde abajo
export const slideInUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
}

// Variantes para el stack de tecnologías
export const stackContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

export const stackItemVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

