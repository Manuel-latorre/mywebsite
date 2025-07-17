import ClaudeAI from "@/components/icons/ClaudeIcon";
import Cursor from "@/components/icons/CursorIcon";
import Framer from "@/components/icons/FramerMotion";
import OpenAiIcon from "@/components/icons/OpenAiIcon";
import ReactQuery from "@/components/icons/ReactQueryIcon";
import V0Icon from "@/components/icons/V0Icon";
import ZustandIcon from "@/components/icons/ZustandIcon";
import Badge from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";

const Skills = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  return (
    <section
      id="skills"
      className="min-h-dvh w-full mx-auto flex lg:items-start justify-center flex-col gap-10 bg-gray-50/5 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <h2 className="title">{t.skills.title}</h2>

<div className="flex flex-wrap gap-2 max-lg:justify-center max-lg:px-4">
  <img
    src="https://skillicons.dev/icons?i=html"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=css"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=tailwindcss"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=typescript"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=javascript"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=react"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=nextjs"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=nodejs"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=express"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=postgresql"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=supabase"
    className="hover:scale-105 transition-all duration-300"
  />
  <ReactQuery width={37} height={37} />
  <ZustandIcon width={37} height={37} />
  <img
    src="https://skillicons.dev/icons?i=vitest"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=git"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=docker"
    className="hover:scale-105 transition-all duration-300"
  />
  <img
    src="https://skillicons.dev/icons?i=vercel"
    className="hover:scale-105 transition-all duration-300"
  />
  <OpenAiIcon width={37} height={37} />
  <ClaudeAI width={37} height={37} />
  <V0Icon width={37} height={37} />
  <Cursor width={37} height={37} />
  <Framer width={37} height={37} />
</div>

<div className="flex flex-wrap items-center gap-2 max-lg:justify-center max-lg:px-4">
  <Badge skillKey="proactive" />
  <Badge skillKey="autodidact" />
  <Badge skillKey="teamwork" />
  <Badge skillKey="problemSolving" />
  <Badge skillKey="communication" />
  <Badge skillKey="adaptability" />
  <Badge skillKey="collaboration" />
  <Badge skillKey="analyticalThinking" />
</div>
      </div>
    </section>
  );
};

export default Skills;
