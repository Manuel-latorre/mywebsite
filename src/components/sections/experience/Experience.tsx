import Avatar from "@/components/ui/avatar";
import { Timeline } from "@/components/ui/timeline";
import { igz, igzl, martin, martinl } from "@/lib/utils";
import tualo from "../../../assets/tualo.svg";
import yacobian from "../../../assets/yacobian.svg";

const Experience = () => {
  const experienceData = [
    {
      title: "May 2025 - Current",
      content: (
        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-2xl text-neutral-800 dark:text-neutral-200">
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
            <h4 className="text-2xl text-neutral-800 dark:text-neutral-200">
              |
            </h4>
            <h4 className="text-2xl bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">
              Frontend Developer
            </h4>
          </div>
          <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
            System for a company dedicated to the real estate sector
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p>Principal features</p>
            <li>
              4-stage stepper with Zustand, validation with React Hook Form +
              Zod, role-protected routes, and state persistence.
            </li>
            <li>
              Various flows, including implementing optimistic updates with
              React Query.
            </li>
            <li>
              Dashboard with Recharts, persistent dynamic filters by
              date/currency, UI state management, and date range validation.
            </li>
          </ul>
          <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,react" />
        </div>
      ),
    },
    {
      title: "March 2025",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
          <img src={yacobian} alt="Yacobian" className="w-8 h-8"/>
          <h4 className="text-3xl text-neutral-800 dark:text-neutral-200">
            Yacobian - Freelancer | <span className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">Frontend Developer</span>
          </h4>
          </div>
          <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
            Company in Spain dedicated to the real estate sector
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p>Principal features</p>
            <li>
              Development of a mobile-first web application from Figma
              prototypes.
            </li>
            <li>
              Custom dashboard, offering flexibility and autonomy to the client
              in managing content through CRUD operations.
            </li>
          </ul>
          <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,react,supabase" />
        </div>
      ),
    },
    {
      title: "April 2024 - Feb 2025",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
          <img src={tualo} alt="Tualo" className="w-8 h-8"/>
          <h4 className="text-3xl text-neutral-800 dark:text-neutral-200">
            Tualo - <span className="bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent">Fullstack Developer</span>
          </h4>
          </div>
          <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
            Company in Mexico dedicated to managing finances
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <p>Principal features</p>
            <li>
              Automated reports using Artificial Intelligence (OpenAI API),
              reducing manual work by 80% and optimizing operational processes
            </li>
            <li>
              Integrated APIs Trigger.dev for
              workflow automation, and RESEND for transactional emails.
            </li>
            <li>Created dynamic charts (Recharts) from Excel files.</li>
          </ul>
          <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,typescript,react,supabase" />

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
