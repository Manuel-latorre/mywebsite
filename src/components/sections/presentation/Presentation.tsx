import { motion } from "framer-motion";
import {
  containerVariants,
  slideInLeft,
  slideInRight,
  slideInUp,
  stackContainerVariants,
  stackItemVariants,
} from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import perfil from "../../../assets/perfil-profesional.jpg";
import SocialButton from "../../buttons/SocialButton";
import ContactButton from "@/components/buttons/ContactButton";
import MarqueeDemo from "./MarqueeProyects";
import Ripple from "@/components/ui/ripple";
import ResumeButton from "@/components/buttons/ResumeButton";
import React from "@/components/icons/ReactIcon";
import Nextjs from "@/components/icons/NextIcon";
import TailwindCSS from "@/components/icons/TailwindIcon";
import TypeScript from "@/components/icons/TypescriptIcon";
import HTML5 from "@/components/icons/HTMLIcon";
import CSS from "@/components/icons/CSSIcon";

const Presentation = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const mainStack = [
    {
      name: "React",
      icon: <React width={37} height={37}/>,
    },
    {
      name: "Next.js",
      icon: <Nextjs width={37} height={37}/>,
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindCSS width={37} height={37}/>,
    },
    {
      name: "TypeScript",
      icon: <TypeScript width={37} height={37}/>,
    },
    {
      name: "HTML",
      icon: <HTML5 width={37} height={37}/>,
    },
    {
      name: "CSS",
      icon: <CSS width={37} height={37}/>,
    },
  ];

  return (
    <motion.div
      id="aboutme"
      className="flex items-center w-full max-xl:px-6 mx-auto lg:justify-between min-h-dvh"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center w-full max-w-7xl mx-auto justify-between h-full max-lg:flex-col max-lg:justify-center">

      {/* Sección izquierda - Información personal */}
      <motion.div
        className="lg:w-1/2 w-full flex flex-col gap-4 h-96 lg:justify-between justify-center max-lg:items-center"
        variants={slideInLeft}
      >
        <div  >
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manuel Latorre
          </motion.h1>

          <motion.p
            className="text-3xl lg:text-5xl text-foreground/60 max-lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.presentation.frontendDeveloper.split(" ")[0]}{" "}
            <motion.span
              className="textgradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t.presentation.frontendDeveloper.split(" ")[1]}
            </motion.span>
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-2 max-lg:text-center"
          variants={slideInUp}
          transition={{ delay: 0.8 }}
        >
          <p className=" text-foreground/60 max-w-lg">
            {t.presentation.description
              .split("\n\n")
              .map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              ))}
          </p>
          <div className="hidden lg:flex items-center gap-2 text-foreground/60 text-sm border hover:border-orange-400 rounded-full px-4 py-1 w-fit">
            <Ripple />
            {t.presentation.currentStatus}
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <SocialButton />
          <ResumeButton/>
        </motion.div>
      </motion.div>

      {/* Sección derecha - Tarjetas */}
      <motion.div
        className="lg:flex flex-col gap-4 lg:w-1/2 h-96 w-full hidden"
        variants={slideInRight}
      >
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
            <h2 className="text-xl mb-2">{t.presentation.myExperience}</h2>
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
            <span className="text-xl text-center">
              {language === "en" ? "Got an idea?" : "¿Tienes una idea?"}
            </span>
            <motion.div
              className="flex flex-col pt-2 pb-3.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.span
                className="textgradient text-xl"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                {t.presentation.lets}
              </motion.span>
              <motion.span
                className="ml-8 textgradient text-xl"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {t.presentation.bringIt}
              </motion.span>
              <motion.span
                className="ml-20 textgradient text-xl"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                {t.presentation.toLife}
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
      </div>
    </motion.div>
  );
};

export default Presentation;
