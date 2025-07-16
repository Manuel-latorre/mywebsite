import Avatar from "@/components/ui/avatar";
import { Timeline } from "@/components/ui/timeline";
import { igz, igzl, martin, martinl } from "@/lib/utils";
import tualo from "../../../assets/tualo.svg";
import yacobian from "../../../assets/yacobian.svg";
import diarc from "../../../assets/diarc.svg";
import ReactQuery from "@/components/icons/ReactQueryIcon";
import ZustandIcon from "@/components/icons/ZustandIcon";

import { Link } from "react-router-dom";

const Experience = () => {
  const experienceData = [
    {
      title: "May 2025 - Current",
      content: (
        <div>
          <div className="flex items-center gap-3 max-lg:flex-col max-lg:items-start">
            <div className="flex items-center gap-2">
              <h4 className="text-3xl text-neutral-800 dark:text-neutral-200">
                Freelancer team
              </h4>
              <div className="flex items-center">
                <Avatar
                  url={igz}
                  name="Ignacio Zanotto"
                  role="Project Manager"
                  linkedin={igzl}
                />
                <div className="-translate-x-2">
                  <Avatar
                    url={martin}
                    name="Martín Alturria"
                    role="Backend Developer"
                    linkedin={martinl}
                  />
                </div>
              </div>
            </div>
            <h4 className="lg:block hidden text-3xl text-neutral-800 dark:text-neutral-200">
              |
            </h4>
            <h4 className="max-lg:mb-2 text-3xl bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">
              Frontend Developer
            </h4>
          </div>
          <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            End-to-end frontend development for a real estate management
            platform
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p className="font-medium">Key contributions</p>
            <li>
              Developed a 4-step contract creation flow with Zustand for state
              management, React Hook Form + Zod for robust validation, and
              protected routes based on user roles.
            </li>
            <li>
              Built complex user flows using React Query with optimistic UI
              updates, improving responsiveness and user experience.
            </li>
            <li>
              Designed and implemented interactive dashboards with Recharts,
              persistent filters by date and currency, and date range validation
              with global state handling.
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,react" />
            <ReactQuery width={37} height={37} />
            <ZustandIcon width={37} height={37} />
          </div>
        </div>
      ),
    },
    {
      title: "March 2025",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={yacobian} alt="Yacobian" className="w-8 h-8 max-xl:hidden" />
            <div className="text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-xl:flex-col">
              <div className="flex items-center gap-2">
                <Link to="https://yacobian.es/" target="_blank">
                  Yacobian
                </Link>{" "}
                <span>- Freelancer</span>
                <span className="xl:block hidden">|</span>
              </div>
              <span className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </div>
          </div>
          <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Real estate company based in Spain – corporate website and custom
            admin panel
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p className="font-medium">Key contributions</p>
            <li>
              Built a responsive, mobile-first marketing website based on Figma
              designs, ensuring performance and pixel-perfect implementation.
            </li>
            <li>
              Developed a custom admin dashboard with full CRUD capabilities,
              enabling non-technical users to manage site content autonomously.
            </li>
          </ul>
          <div className="flex  flex-wrap items-center gap-2">
            <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,nextjs,supabase" />
          </div>
        </div>
      ),
    },
    {
      title: "April 2024 - Feb 2025",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={tualo} alt="Tualo" className="w-8 h-8 max-lg:hidden" />
            <div className="text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-lg:flex-col">
              <Link to="https://www.tualo.mx/" target="_blank">
                Tualo
              </Link>{" "}
              <span className="lg:block hidden">|</span>
              <span className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">
                Fullstack Developer
              </span>
            </div>
          </div>
          <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Fintech startup based in Mexico – financial management platform
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p className="font-medium">Key contributions</p>
            <li>
              Led front-end development and contributed to full-stack tasks over
              a 1-year period, ensuring maintainability and performance across
              the platform.
            </li>
            <li>
              Automated financial report generation using OpenAI’s API, reducing
              manual workload by 80% and streamlining internal operations.
            </li>
            <li>
              Integrated Trigger.dev for scheduled workflows and RESEND for
              reliable transactional email delivery.
            </li>
            <li>
              Built dynamic, user-friendly charts from Excel inputs using
              Recharts, enhancing data visualization and reporting.
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,nextjs,supabase" />
          </div>
        </div>
      ),
    },
    {
      title: "April 2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={diarc} alt="Diarc" className="w-8 h-8 max-lg:hidden" />
            <div className="text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-lg:flex-col">
              <Link to="https://diarc-studio.vercel.app/" target="_blank">
                Diarc Studio
              </Link>{" "}
              <span className="lg:block hidden">|</span>
              <span className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">
                Fullstack Developer
              </span>
            </div>
          </div>
          <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            3D Art Outsourcing Studio specializing in Immersive Experiences,
            Metaverses, and Gaming – Single Page Application + Admin Panel
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p className="font-medium">Key contributions</p>
            <li>
              Translated detailed Figma designs into a pixel-perfect, responsive
              Single Page Application using Next.js and Tailwind CSS.
            </li>
            <li>
              Built a scalable component-based architecture with reusable UI
              elements and consistent design tokens.
            </li>
            <li>
              Implemented custom animations, scroll effects and responsive
              behaviors for an immersive user experience across devices.
            </li>
            <li>
              Developed a lightweight admin interface for content management,
              maintaining visual consistency with the public site.
            </li>
            <li>
              Applied technical SEO best practices (semantic HTML,
              accessibility, performance optimization) for enhanced visibility.
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,nextjs,supabase" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-dvh w-full flex items-center justify-center"
    >
      <Timeline data={experienceData} />
    </section>
  );
};

export default Experience;
