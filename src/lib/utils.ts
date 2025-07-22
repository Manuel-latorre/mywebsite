import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export const igz = "https://www.linkedin.com/in/igzt/"
export const martinl = "https://www.linkedin.com/in/martin-alturria/"


export const getLinks = (t: any) => [
    {
        name: t.nav.aboutMe,
        href: "#aboutme"
    },
    {
        name: t.nav.experience,
        href: "#experience"
    },
    {
        name: t.nav.skills,
        href: "#skills"
    },
    {
        name: t.nav.contact,
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



export const mobileLinks = (t: any) => [
    {
        name: t.nav.aboutMe,
        href: "#aboutme"
    },
    {
        name: t.nav.experience,
        href: "#experience"
    },
    {
        name: t.nav.skills,
        href: "#skills"
    },
    {
        name: t.nav.contact,
        href: "#contact"
    }
]