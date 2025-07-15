import { Button } from "../ui/button"
import { ThemeToggle } from "../ThemeToggle"

const Navbar = () => {
    const links = [
        {
            name: "About me",
            href: "#aboutme"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        {
            name: "Skills",
            href: "#skills"
        },
        /* {
            name: "Projects",
            href: "#projects"
        }, */
        {
            name: "Contact",
            href: "#contact"
        }
    ]

    // Función para scroll suave personalizada (más compatible)
    const smoothScrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        smoothScrollTo(targetId);
    };

    return (
        <nav className="z-50 sticky top-5 rounded-full border bg-background/30 backdrop-blur-xl flex justify-between items-center pl-4 px-2 py-2 w-full max-w-6xl mx-auto">
            
            <div className="flex items-center gap-4">
                {
                    links.map((link) => (
                        <a 
                            href={link.href} 
                            key={link.name} 
                            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-300"
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))
                }
            </div>
            
            <div className="flex items-center gap-2">
            <Button className="cursor-pointer rounded-full border border-orange-400 bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#C75305] hover:via-[#FE9400] hover:to-[#E34401] hover:bg-clip-text hover:text-transparent">
                Let's talk
            </Button>
            <ThemeToggle/>
            </div>
        </nav>
    )
}

export default Navbar