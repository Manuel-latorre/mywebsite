
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";

type SkillKey = 'proactive' | 'autodidact' | 'teamwork' | 'problemSolving' | 'communication' | 'adaptability' | 'timeManagement' | 'leadership' | 'collaboration' | 'analyticalThinking';

const Badge = ({ skillKey }: { skillKey: SkillKey }) => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  
  return (
    <span className="px-3 py-1 rounded-full w-fit bg-primary/20 border border-dashed hover:border-[#C75305] transition-all duration-300">
      {t.skills[skillKey]}
    </span>
  )
}

export default Badge