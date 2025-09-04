"use client"

import ClaudeAI from "@/components/icons/ClaudeIcon"
import CSS from "@/components/icons/CSSIcon"
import Cursor from "@/components/icons/CursorIcon"
import Framer from "@/components/icons/FramerMotion"
import HTML5 from "@/components/icons/HTMLIcon"
import OpenAiIcon from "@/components/icons/OpenAiIcon"
import ReactQuery from "@/components/icons/ReactQueryIcon"
import TypeScript from "@/components/icons/TypescriptIcon"
import TailwindCSS from "@/components/icons/TailwindIcon"
import V0Icon from "@/components/icons/V0Icon"
import ZustandIcon from "@/components/icons/ZustandIcon"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/lib/translations"
import React from "@/components/icons/ReactIcon"
import JavaScript from "@/components/icons/JsIcon"
import Nextjs from "@/components/icons/NextIcon"
import Nodejs from "@/components/icons/Node"
import Expressjs from "@/components/icons/ExpressIcon"
import PostgreSQL from "@/components/icons/PostgreSQL"
import Supabase from "@/components/icons/SupabaseIcon"
import Vitest from "@/components/icons/VitestIcon"
import Git from "@/components/icons/GitIcon"
import Docker from "@/components/icons/DockerIcon"
import Vercel from "@/components/icons/VercelIcon"
import Vite from "@/components/icons/ViteIcon"
import NestJS from "@/components/icons/NestJsIcon"
import MongoDB from "@/components/icons/Mongoose"

const skillCategories = [
  {
    title: "Frontend",
    color: "",
    skills: [
      { name: "HTML5", icon: HTML5 },
      { name: "CSS3", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "TypeScript", icon: TypeScript },
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextjs },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "Framer Motion", icon: Framer },
      { name: "Vite", icon: Vite },
      { name: "Vitest", icon: Vitest },
      { name: "React Query", icon: ReactQuery },
      { name: "Zustand", icon: ZustandIcon },
    ],
  },
  {
    title: "Backend",
    color: "",
    skills: [
      { name: "Node.js", icon: Nodejs },
      { name: "Express.js", icon: Expressjs },
      { name: "NestJS", icon: NestJS },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "Supabase", icon: Supabase },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: Git },
      { name: "Docker", icon: Docker },
      { name: "Vercel", icon: Vercel },
    ],
  },
  {
    title: "AI Tools",
    color: "",
    skills: [
      { name: "OpenAI", icon: OpenAiIcon },
      { name: "Claude AI", icon: ClaudeAI },
      { name: "v0", icon: V0Icon },
      { name: "Cursor", icon: Cursor },
    ],
  },
]

const Skills = () => {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <section id="skills" className="min-h-dvh w-full mx-auto flex lg:items-start justify-center flex-col gap-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-4">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.skills.title}
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm p-6"
              style={{
                animationDelay: `${categoryIndex * 150}ms`,
              }}
            >

              <div className="relative z-10">
                <h3
                  className={`text-xl font-semibold mb-6`}
                >
                  {category.title === "Development Tools"
                    ? t.skills.developmentTools
                    : category.title === "AI Tools"
                    ? t.skills.aiTools
                    : category.title}
                </h3>

                <div className="grid grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl"
                      style={{
                        animationDelay: `${categoryIndex * 150 + skillIndex * 50}ms`,
                      }}
                    >
                      <div className="relative">
                        <skill.icon
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="text-xs font-medium text-center text-muted-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Skills
