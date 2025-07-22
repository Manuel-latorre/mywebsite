import ClaudeAI from "@/components/icons/ClaudeIcon";
import CSS from "@/components/icons/CSSIcon";
import Cursor from "@/components/icons/CursorIcon";
import Framer from "@/components/icons/FramerMotion";
import HTML5 from "@/components/icons/HTMLIcon";
import OpenAiIcon from "@/components/icons/OpenAiIcon";
import ReactQuery from "@/components/icons/ReactQueryIcon";
import TypeScript from "@/components/icons/TypescriptIcon";
import TailwindCSS from "@/components/icons/TailwindIcon";
import V0Icon from "@/components/icons/V0Icon";
import ZustandIcon from "@/components/icons/ZustandIcon";
import Badge from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import React from "@/components/icons/ReactIcon";
import JavaScript from "@/components/icons/JsIcon";
import Nextjs from "@/components/icons/NextIcon";
import Nodejs from "@/components/icons/Node";
import Expressjs from "@/components/icons/ExpressIcon";
import PostgreSQL from "@/components/icons/PostgreSQL";
import Supabase from "@/components/icons/SupabaseIcon";
import Vitest from "@/components/icons/VitestIcon";
import Git from "@/components/icons/GitIcon";
import Docker from "@/components/icons/DockerIcon";
import Vercel from "@/components/icons/VercelIcon";

const Skills = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  return (
    <section
      id="skills"
      className="min-h-dvh w-full mx-auto flex lg:items-start justify-center flex-col gap-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h2 className="title">{t.skills.title}</h2>

        <div className="flex flex-wrap gap-2 max-lg:justify-center max-lg:px-4">
          <HTML5 width={37} height={37}/>
          <CSS width={37} height={37}/>
          <TailwindCSS width={37} height={37}/>
          <TypeScript width={37} height={37}/>
          <JavaScript width={37} height={37}/>
          <React width={37} height={37}/>
          <Nextjs width={37} height={37}/>
          <Nodejs width={37} height={37}/>
          <Expressjs width={37} height={37}/>
          <PostgreSQL width={37} height={37}/>
          <Supabase width={37} height={37}/>
          <ReactQuery width={37} height={37} />
          <ZustandIcon width={37} height={37} />
          <Vitest width={37} height={37} />
          <Git width={37} height={37} />
          <Docker width={37} height={37} />
          <Vercel width={37} height={37} />
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
