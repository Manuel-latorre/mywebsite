import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const ResumeButton = () => {
  const { language } = useLanguage();

  return (
    <a 
      href="/Manuel-Latorre-Frontend.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 cursor-pointer bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] h-12 rounded-xl text-white text-base font-medium hover:translate-y-[-2px] transition-all duration-300 ease-out"
    >
        {translations[language].presentation.resumeButton}
    </a>
  );
};

export default ResumeButton;
