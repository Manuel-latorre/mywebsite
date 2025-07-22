import {  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LinkedInIcon from "@/components/icons/LinkedinIcon";

const Avatar = ({
  url,
  name,
  role,
  linkedin,
}: {
  url: string;
  name: string;
  role: string;
  linkedin: string;
}) => {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger asChild>
          <img src={url} className="w-6 h-6 rounded-full" alt={name} />
        </TooltipTrigger>
        <TooltipContent className="flex flex-col items-center justify-center gap-2">
          <p>{role}</p>
          <a className="flex items-center gap-1 pb-1" href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon width={16} height={16} fill="#0A66C2" />
            {name}
          </a>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Avatar;
