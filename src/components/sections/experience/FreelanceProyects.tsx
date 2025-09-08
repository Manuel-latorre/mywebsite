import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { bdi, diarc, vittanut, yacobian } from "@/lib/images";
import { useTranslations } from "@/lib/translations";

const proyects = [
  {
    name: "Yacobian",
    logo: yacobian,
    link: "https://yacobian.es/",
  },
  {
    name: "Diarc Studio",
    logo: diarc,
    link: "https://diarc-studio.vercel.app/",
  },
  {
    name: "BDI",
    logo: bdi,
    link: "https://bdistand.narvaez.com.ar/",
  },
  {
    name: "Vittanut",
    logo: vittanut,
    link: "https://www.vittanut.com/",
  },
];

export default function FreelanceProyects() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="mb-4 cursor-pointer" variant="outline">
          {t.freelanceProyects.viewSomeProyects}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {proyects.map((proyect) => (
          <DropdownMenuItem key={proyect.name}>
            <img
              loading="lazy"
              decoding="async"
              src={proyect.logo}
              alt={proyect.name}
            />
            <a href={proyect.link} target="_blank" rel="noopener noreferrer">
              {proyect.name}
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
