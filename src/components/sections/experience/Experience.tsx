import { Link } from "react-router-dom";
import { Timeline } from "@/components/ui/timeline";
import { igzl, martinl } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import Avatar from "@/components/ui/avatar";
import tualo from "../../../assets/tualo.svg";
import yacobian from "../../../assets/yacobian.svg";
import diarc from "../../../assets/diarc.svg";
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
import MongoDB from "@/components/icons/Mongoose";
import igz from "../../../assets/igz.png";
import ma from "../../../assets/ma.png";

const Experience = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const experienceData = [
    {
      title: t.dates.may2025Current,
      content: (
        <div>
          <div className="flex items-center gap-3 max-lg:flex-col max-lg:items-start">
            <div className="flex items-center gap-2">
              <h4 className="max-sm:text-xl text-3xl text-neutral-800 dark:text-neutral-200">
                {t.experience.freelancerTeam}
              </h4>
              <div className="flex items-center">
                <Avatar
                  url={igz}
                  name="Ignacio Zanotto"
                  role={t.experience.projectManager}
                  linkedin={igzl}
                />
                <div className="-translate-x-2">
                  <Avatar
                    url={ma}
                    name="Martín Alturria"
                    role={t.experience.backendDeveloper}
                    linkedin={martinl}
                  />
                </div>
              </div>
            </div>
            <h4 className="lg:block hidden text-3xl text-neutral-800 dark:text-neutral-200">
              |
            </h4>
            <h4 className="max-lg:mb-2 max-sm:text-xl text-3xl textgradient">
              {t.experience.frontendDeveloper}
            </h4>
          </div>
          <p className="max-sm:text-sm text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t.experience.realEstateDescription}
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4 max-sm:text-sm">
            <p className="font-medium">{t.experience.keyContributions}</p>
            <li>{t.experience.contributions.contract}</li>
            <li>{t.experience.contributions.reactQuery}</li>
            <li>{t.experience.contributions.dashboards}</li>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
          <HTML5 width={37} height={37} />
            <CSS width={37} height={37} />
            <TailwindCSS width={37} height={37} />
            <TypeScript width={37} height={37} />
            <ReactIcon width={37} height={37} />
            <ReactQuery width={37} height={37} />
            <ZustandIcon width={37} height={37} />
          </div>
        </div>
      ),
    },
    {
      title: t.dates.march2025,
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img
              src={yacobian}
              alt="Yacobian"
              className="w-8 h-8 max-xl:hidden"
            />
            <div className="max-sm:text-xl text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-xl:flex-col">
              <div className="flex items-center gap-2">
                <Link to="https://yacobian.es/" target="_blank">
                  Yacobian
                </Link>{" "}
                <span>{t.experience.freelancer}</span>
                <span className="xl:block hidden">|</span>
              </div>
              <span className="textgradient">
                {t.experience.frontendDeveloper}
              </span>
            </div>
          </div>
          <p className="max-sm:text-sm text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t.experience.realEstateCompany}
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4 max-sm:text-sm">
            <p className="font-medium">{t.experience.keyContributions}</p>
            <li>{t.experience.contributions.yacobian1}</li>
            <li>{t.experience.contributions.yacobian2}</li>
          </ul>
          <div className="flex  flex-wrap items-center gap-2">
            <HTML5 width={37} height={37} />
            <CSS width={37} height={37} />
            <TailwindCSS width={37} height={37} />
            <TypeScript width={37} height={37} />
            <Nextjs width={37} height={37} />
            <Supabase width={37} height={37} />
          </div>
        </div>
      ),
    },
    {
      title: t.dates.april2024Feb2025,
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={tualo} alt="Tualo" className="w-8 h-8 max-lg:hidden" />
            <div className="max-sm:text-xl text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-lg:flex-col">
              <Link to="https://www.tualo.mx/" target="_blank">
                Tualo
              </Link>{" "}
              <span className="lg:block hidden">|</span>
              <span className="textgradient">
                {t.experience.fullstackDeveloper}
              </span>
            </div>
          </div>
          <p className="max-sm:text-sm text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t.experience.fintechDescription}
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4 max-sm:text-sm">
            <p className="font-medium">{t.experience.keyContributions}</p>
            <li>{t.experience.contributions.tualoLed}</li>
            <li>{t.experience.contributions.tualoAI}</li>
            <li>{t.experience.contributions.tualoIntegration}</li>
            <li>{t.experience.contributions.tualoCharts}</li>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <HTML5 width={37} height={37} />
            <CSS width={37} height={37} />
            <TailwindCSS width={37} height={37} />
            <TypeScript width={37} height={37} />
            <Nextjs width={37} height={37} />
            <Supabase width={37} height={37} />
            <OpenAiIcon width={37} height={37} />
          </div>
        </div>
      ),
    },
    {
      title: t.dates.april2024,
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={diarc} alt="Diarc" className="w-8 h-8 max-lg:hidden" />
            <div className="max-sm:text-xl text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-lg:flex-col">
              <Link to="https://diarc-studio.vercel.app/" target="_blank">
                Diarc Studio
              </Link>{" "}
              <span className="lg:block hidden">|</span>
              <span className="textgradient">
                {t.experience.fullstackDeveloper}
              </span>
            </div>
          </div>
          <p className="max-sm:text-sm text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t.experience.diarcDescription}
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4 max-sm:text-sm">
            <p className="font-medium">{t.experience.keyContributions}</p>
            <li>{t.experience.contributions.diarcFigma}</li>
            <li>{t.experience.contributions.diarcArchitecture}</li>
            <li>{t.experience.contributions.diarcAnimations}</li>
            <li>{t.experience.contributions.diarcAdmin}</li>
            <li>{t.experience.contributions.diarcSEO}</li>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <HTML5 width={37} height={37} />
            <CSS width={37} height={37} />
            <TailwindCSS width={37} height={37} />
            <TypeScript width={37} height={37} />
            <Nextjs width={37} height={37} />
            <MongoDB width={37} height={37} />
          </div>
        </div>
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
