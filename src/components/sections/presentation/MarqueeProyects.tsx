import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import diarc from '@/assets/diarc.svg'
import tualo from '@/assets/tualo.svg'
import yacobian from '@/assets/yacobian.svg'

const MarqueeDemo = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const reviews = [
    {
      name: "Diarc Studio",
      username: "@diarcstudio",
      body: t.marquee.diarcDescription,
      img: diarc,
    },
    {
      name: "Tualo",
      username: "@tualomx",
      body: t.marquee.tualoDescription,
      img: tualo,
    },
    {
      name: "Yacobian",
      username: "@yacobian.es",
      body: t.marquee.yacobianDescription,
      img: yacobian,
    }
  ];


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
     
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
