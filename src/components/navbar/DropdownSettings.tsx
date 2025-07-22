import {  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageToggle } from "@/components/LanguageToggle";
import { SettingsIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
