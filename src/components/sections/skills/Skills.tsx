import Cursor from "@/components/icons/CursorIcon";
import Framer from "@/components/icons/FramerMotion";
import ReactQuery from "@/components/icons/ReactQueryIcon";
import V0Icon from "@/components/icons/V0Icon";
import ZustandIcon from "@/components/icons/ZustandIcon";
import Badge from "@/components/ui/badge";

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:min-h-dvh w-full max-w-7xl mx-auto flex lg:items-start justify-center flex-col gap-10"
    >
      <h2 className="title">Skills & Tools</h2>

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
        <V0Icon width={37} height={37} />
        <Cursor width={37} height={37} />
        <Framer width={37} height={37} />
      </div>

      <div className="flex flex-wrap items-center gap-2 max-lg:justify-center max-lg:px-4">
        <Badge skill="proactive" />
        <Badge skill="autodidact" />
        <Badge skill="teamwork" />
        <Badge skill="problem solving" />
        <Badge skill="communication" />
        <Badge skill="adaptability" />
        <Badge skill="time management" />
        <Badge skill="leadership" />
        <Badge skill="collaboration" />
        <Badge skill="analytical thinking" />
      </div>
    </section>
  );
};

export default Skills;
