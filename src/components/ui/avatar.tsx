import {  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              className="w-4 h-4"
            />
            {name}
          </a>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Avatar;
