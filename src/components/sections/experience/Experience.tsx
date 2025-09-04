import { Timeline } from "@/components/ui/timeline";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import ReactQuery from "@/components/icons/ReactQueryIcon";
import ZustandIcon from "@/components/icons/ZustandIcon";
import OpenAiIcon from "@/components/icons/OpenAiIcon";
import TailwindCSS from "@/components/icons/TailwindIcon";
import Nextjs from "@/components/icons/NextIcon";
import HTML5 from "@/components/icons/HTMLIcon";
import CSS from "@/components/icons/CSSIcon";
import TypeScript from "@/components/icons/TypescriptIcon";
import Supabase from "@/components/icons/SupabaseIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import CardExperience from "./CardExperience";
import Vite from "@/components/icons/ViteIcon";
import Vitest from "@/components/icons/VitestIcon";
import FreelanceProyects from "./FreelanceProyects";
import JavaScript from "@/components/icons/JsIcon";

const Experience = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const experienceData = [
    {
      title: t.experience.favorcitoPeriod,
      content: (
        <CardExperience
          company={{
            name: t.experience.favorcito,
            logo: "",
            logoAlt: t.experience.favorcito,
          }}
          location={t.experience.favorcitoCountry}
          modality={t.experience.modality}
          role={t.experience.favorcitoRole}
          description={t.experience.favorcitoDescription}
          responsibilities={t.experience.favorcitoResponsibilities}
          technologies={[
            { icon: HTML5, width: 27, height: 27 },
            { icon: CSS, width: 27, height: 27 },
            { icon: TailwindCSS, width: 27, height: 27 },
            { icon: TypeScript, width: 27, height: 27 },
            { icon: JavaScript, width: 27, height: 27 },
            { icon: Nextjs, width: 27, height: 27 },
            { icon: ReactIcon, width: 27, height: 27 },
            { icon: ZustandIcon, width: 27, height: 27 },
          ]}
        />
      ),
    },
    {
      title: t.experience.freelanceTeamPeriod,
      content: (
        <CardExperience
          company={{
            name: t.experience.freelancerTeam,
            logo: "",
            logoAlt: t.experience.freelancerTeam,
          }}
          location={t.experience.freelancerTeamCountry}
          modality={t.experience.modality}
          role={t.experience.frontendDeveloper}
          description={t.experience.freelanceTeamDescription}
          responsibilities={t.experience.freelanceTeamResponsibilities}
          projects={<FreelanceProyects />}
          technologies={[
            { icon: HTML5, width: 27, height: 27 },
            { icon: CSS, width: 27, height: 27 },
            { icon: TailwindCSS, width: 27, height: 27 },
            { icon: TypeScript, width: 27, height: 27 },
            { icon: Nextjs, width: 27, height: 27 },
            { icon: ReactIcon, width: 27, height: 27 },
            { icon: Vite, width: 27, height: 27 },
            { icon: Vitest, width: 27, height: 27 },
            { icon: ReactQuery, width: 27, height: 27 },
            { icon: ZustandIcon, width: 27, height: 27 },
          ]}
        />
      ),
    },
    {
      title: t.experience.tualoPeriod,
      content: (
        <CardExperience
          company={{
            name: t.experience.tualoCompany,
            logo: "",
            logoAlt: t.experience.tualoCompany,
          }}
          location={t.experience.tualoCountry}
          modality={t.experience.modality}
          role={t.experience.tualoRole}
          description={t.experience.tualoDescription}
          responsibilities={t.experience.tualoResponsibilities}
          technologies={[
            { icon: HTML5, width: 27, height: 27 },
            { icon: CSS, width: 27, height: 27 },
            { icon: TailwindCSS, width: 27, height: 27 },
            { icon: Nextjs, width: 27, height: 27 },
            { icon: TypeScript, width: 27, height: 27 },
            { icon: Supabase, width: 27, height: 27 },
            { icon: OpenAiIcon, width: 27, height: 27 },
          ]}
        />
      ),
    },
    {
      title: t.experience.tuMejorAmigoPeriod,
      content: (
        <CardExperience
          company={{
            name: t.experience.tuMejorAmigoCompany,
            logo: "",
            logoAlt: t.experience.tuMejorAmigoCompany,
          }}
          location={t.experience.tuMejorAmigoCountry}
          modality={t.experience.modality}
          role={t.experience.tuMejorAmigoRole}
          description={t.experience.tuMejorAmigoDescription}
          responsibilities={t.experience.tuMejorAmigoResponsibilities}
          technologies={[
            { icon: CSS, width: 27, height: 27 },
            { icon: TypeScript, width: 27, height: 27 },
            { icon: ReactIcon, width: 27, height: 27 },
          ]}
        />
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-dvh w-full flex items-center justify-center px-4"
    >
      <Timeline data={experienceData} />
    </section>
  );
};

export default Experience;
