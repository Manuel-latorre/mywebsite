import { motion } from "framer-motion"
import React from "@/components/icons/ReactIcon"
import perfil from "../../../assets/perfil-profesional.png"
import SocialButton from "./SocialButton"
import Nextjs from "@/components/icons/NextIcon"
import TailwindCSS from "@/components/icons/TailwindIcon"
import TypeScript from "@/components/icons/TypescriptIcon"
import ReactQuery from "@/components/icons/ReactQueryIcon"
import FramerMotion from "@/components/icons/FramerMotion"
import ContactButton from "@/components/buttons/ContactButton"
import MarqueeDemo from "./MarqueeProyects"
import Ripple from "@/components/ui/ripple"

const Presentation = () => {
    const mainStack = [
        {
            name: "React",
            icon: <React />,
        },
        {
            name: "Next.js",
            icon: <Nextjs />,
        },
        {
            name: "Tailwind CSS",
            icon: <TailwindCSS />,
        },
        {
            name: "TypeScript",
            icon: <TypeScript />,
        },
        {
            name: "React Query",
            icon: <ReactQuery />,
        },
        {
            name: "Framer Motion",
            icon: <FramerMotion />,
        },
    ]

    // Variantes de animación para el contenedor principal
    const containerVariants = {
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
    const slideInLeft = {
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
    const slideInRight = {
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
    const slideInUp = {
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
    const stackContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const stackItemVariants = {
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

    return (
        <motion.div
            id="aboutme"
            className="flex items-center w-full max-xl:px-6 xl:max-w-7xl mx-auto lg:justify-between h-dvh max-lg:flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Sección izquierda - Información personal */}
            <motion.div className="lg:w-1/2 w-full flex flex-col gap-4 h-96 lg:justify-between justify-center max-lg:items-center" variants={slideInLeft}>
                <div>
                <motion.h1
                    className="lg:text-7xl text-5xl max-lg:text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Manuel Latorre
                </motion.h1>

                <motion.p
                    className="text-5xl text-foreground/60 max-lg:text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Frontend{" "}
                    <motion.span
                        className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Developer
                    </motion.span>
                </motion.p>
                </div>

                <motion.div className="flex flex-col gap-2 max-lg:text-center" variants={slideInUp} transition={{ delay: 0.8 }}>
                    <p className="lg:text-lg text-foreground/60 max-w-lg">
                        I build beautiful, functional web experiences that turn ideas into reality. With 2 years of experience and a passion for clean design, I'm always learning and pushing creative boundaries. <br />
                    </p>
                    <div className="hidden lg:flex items-center gap-2 text-foreground/60 text-sm border hover:border-orange-400 rounded-full px-4 py-1 w-fit">
                        <Ripple />
                        Currently studying Systems Engineering.
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <SocialButton />
                </motion.div>
            </motion.div>

            {/* Sección derecha - Tarjetas */}
            <motion.div className="lg:flex flex-col gap-4 lg:w-1/2 h-96 w-full hidden" variants={slideInRight}>
                {/* Fila superior */}
                <motion.div
                    className="flex items-center gap-4 w-full h-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.div
                        className="w-[70%] h-full border rounded-2xl p-4"
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#FE9400",
                            transition: { duration: 0.3 },
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-xl mb-2">My recent experiences</h2>
                        <MarqueeDemo />
                    </motion.div>

                    <motion.div
                        className="w-[30%] h-full rounded-2xl hover:border hover:border-orange-400 transition-all ease-in-out duration-700 overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            rotate: 2,
                            transition: { duration: 0.3 },
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <img
                            src={perfil || "/placeholder.svg"}
                            alt="Manuel Latorre"
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* Fila inferior */}
                <motion.div
                    className="flex items-center gap-4 w-full h-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {/* Tarjeta de contacto */}
                    <motion.div
                        className="w-[30%] h-full border rounded-2xl p-2 flex flex-col justify-between"
                        whileHover={{
                            scale: 1.02,
                            borderColor: "#FE9400",
                            transition: { duration: 0.3 },
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <span className="text-xl text-center">Got an idea?</span>
                        <motion.div
                            className="flex flex-col pt-2 pb-3.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <motion.span
                                className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent text-xl"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.3 }}
                            >
                                Let's
                            </motion.span>
                            <motion.span
                                className="ml-8 bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent text-xl"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                Bring it
                            </motion.span>
                            <motion.span
                                className="ml-20 bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent text-xl"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            >
                                To life
                            </motion.span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                        >
                            <ContactButton />
                        </motion.div>
                    </motion.div>

                    {/* Grid de tecnologías */}
                    <motion.div
                        className="w-[70%] h-full rounded-2xl flex flex-col gap-4"
                        variants={stackContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="grid grid-cols-3 gap-2 items-center justify-center h-full"
                            variants={stackContainerVariants}
                        >
                            {mainStack.map((stack, index) => (
                                <motion.div
                                    key={stack.name}
                                    className="flex flex-col gap-2 h-full items-center justify-center p-2 border rounded-2xl hover:border-orange-400 transition-all ease-in-out duration-700"
                                    variants={stackItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                        borderColor: "#FE9400",
                                        boxShadow: "0 10px 25px rgba(254, 148, 0, 0.2)",
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.2 + index * 0.1,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        {stack.icon}
                                    </motion.div>
                                    <p className="text-sm">{stack.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Presentation
