import {  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../ThemeToggle";
import { LanguageToggle } from "../LanguageToggle";
import { SettingsIcon } from "lucide-react";

const DropdownSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SettingsIcon className="w-6 h-6 text-foreground/60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
            <LanguageToggle />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <ThemeToggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownSettings;
