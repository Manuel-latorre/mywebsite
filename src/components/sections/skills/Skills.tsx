import Badge from "@/components/ui/badge";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-dvh w-full max-w-7xl mx-auto flex items-start justify-center flex-col gap-10"
    >
      <h2 className="text-start text-6xl">Skills & Tools</h2>

      <div className="flex flex-wrap gap-2">
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
      </div>

      <div className="flex flex-wrap items-center gap-2">
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
