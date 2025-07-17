import type { Language } from "@/contexts/LanguageContext";

export const translations = {
  en: {
    // Navigation
    nav: {
      aboutMe: "About me",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      letsTalk: "Let's talk"
    },
    
    // Presentation Section
    presentation: {
        frontendDeveloper: "Frontend Developer",
        description:
          "I build modern and functional web applications, turning concepts into high-impact digital products.\n\nI have 2 years of frontend experience, working with both startups and freelance projects, where I apply best practices in UI/UX design, performance optimization, and scalable architecture. I stay continuously updated with new technologies to deliver efficient and sustainable solutions.",
        currentStatus: "Currently studying Systems Engineering.",
        myExperience: "My experience",
        lets: "Let's",
        bringIt: "Bring it",
        toLife: "To life",
        resumeButton: "Check out my resume"
      },
    
    // Experience Section
    experience: {
      title: "Experience",
      freelancerTeam: "Freelancer team",
      frontendDeveloper: "Frontend Developer",
      fullstackDeveloper: "Fullstack Developer",
      projectManager: "Project Manager",
      backendDeveloper: "Backend Developer",
      keyContributions: "Key contributions",
      freelancer: "- Freelancer",
      realEstateDescription: "End-to-end frontend development for a real estate management platform",
      realEstateCompany: "Real estate company based in Spain – corporate website and custom admin panel",
      fintechDescription: "Fintech startup based in Mexico – financial management platform",
      diarcDescription: "3D Art Outsourcing Studio specializing in Immersive Experiences, Metaverses, and Gaming – Single Page Application + Admin Panel",
      contributions: {
        contract: "Developed a 4-step contract creation flow with Zustand for state management, React Hook Form + Zod for robust validation, and protected routes based on user roles.",
        reactQuery: "Built complex user flows using React Query with optimistic UI updates, improving responsiveness and user experience.",
        dashboards: "Designed and implemented interactive dashboards with Recharts, persistent filters by date and currency, and date range validation with global state handling.",
        responsive: "Built fully responsive layouts with Tailwind CSS, ensuring seamless experiences across all devices.",
        animations: "Enhanced user experience with smooth animations using Framer Motion, including custom transitions and micro-interactions.",
        performance: "Optimized performance through code splitting, lazy loading, and efficient state management patterns.",
        yacobian1: "Built a responsive, mobile-first website based on Figma designs, ensuring performance and pixel-perfect implementation.",
        yacobian2: "Developed a custom admin dashboard with full CRUD capabilities, enabling non-technical users to manage site content autonomously.",
        tualoLed: "Led front-end development and contributed to full-stack tasks over a 1-year period, ensuring maintainability and performance across the platform.",
        tualoAI: "Financial report automation using AI agents (OpenAI API), achieving an 80% reduction in manual tasks and increased operational efficiency.",
        tualoIntegration: "Integrated Trigger.dev for scheduled workflows and RESEND for reliable transactional email delivery.",
        tualoCharts: "Built dynamic, user-friendly charts from Excel inputs using Recharts, enhancing data visualization and reporting.",
        diarcFigma: "Translated detailed Figma designs into a pixel-perfect, responsive Single Page Application using Next.js and Tailwind CSS.",
        diarcArchitecture: "Built a scalable component-based architecture with reusable UI elements and consistent design tokens.",
        diarcAnimations: "Implemented custom animations, scroll effects and responsive behaviors for an immersive user experience across devices.",
        diarcAdmin: "Developed a lightweight admin interface for content management, maintaining visual consistency with the public site.",
        diarcSEO: "Applied technical SEO best practices (semantic HTML, accessibility, performance optimization) for enhanced visibility."
      }
    },
    
    // Skills Section
    skills: {
      title: "Skills & Tools",
      // Soft Skills
      proactive: "proactive",
      autodidact: "autodidact", 
      teamwork: "teamwork",
      problemSolving: "problem solving",
      communication: "communication",
      adaptability: "adaptability",
      timeManagement: "time management",
      leadership: "leadership",
      collaboration: "collaboration",
      analyticalThinking: "analytical thinking"
    },
    
    // Experience Dates
    dates: {
      may2025Current: "May 2025 - Current",
      march2025: "March 2025", 
      april2024Feb2025: "April 2024 - Feb 2025",
      april2024: "April 2024"
    },
    
    // Marquee Projects
    marquee: {
      diarcDescription: "I developed their SPA and content manager with NextJs.",
      tualoDescription: "Work as a fullstack developer remotely for a year.",
      yacobianDescription: "I developed their Website and content manager with NextJs."
    },
    
    // Contact Section
    contact: {
      title: "Contact",
      subtitle: "Let's talk! Send me a message and I'll get back to you soon.",
      contactMe: "Contact me",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Hi Manuel, how are you? I'm interested in...",
        sending: "Sending...",
        sendMessage: "Send message",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Email is not valid",
          messageRequired: "Message is required",
          messageMinLength: "Message must be at least 10 characters long"
        },
        success: {
          title: "Message sent successfully!",
          description: "I'll get back to you soon. Thanks for reaching out!"
        },
        error: {
          title: "Error sending message",
          description: "Please try again or contact me directly."
        },
        configError: {
          title: "EmailJS is not configured",
          description: "Check your environment variables."
        }
      }
    },
    
    // Timeline
    timeline: {
      experience: "Experience"
    },

    // Footer
    footer: {
      description: "Transforming complex ideas into intuitive and scalable digital experiences.",
      quickLinks: "Quick Links",
      copyright: "Manuel Latorre."
    }
  },
  es: {
    // Navigation
    nav: {
      aboutMe: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
      letsTalk: "Hablemos"
    },
    
    // Presentation Section
    presentation: {
        frontendDeveloper: "Desarrollador Frontend",
        description:
          "Desarrollo aplicaciones web modernas y funcionales, transformando conceptos en productos digitales de alto impacto.\n\nCuento con 2 años de experiencia en frontend, trabajando tanto en startups como en proyectos freelance, donde he aplicado buenas prácticas de diseño UI/UX, optimización de rendimiento y arquitectura escalable. Me mantengo en constante actualización tecnológica para ofrecer soluciones eficientes y sostenibles.",
        currentStatus: "Actualmente estudiando Ingeniería en Sistemas.",
        myExperience: "Mi experiencia",
        lets: "Let's",
        bringIt: "Bring it",
        toLife: "To life",
        resumeButton: "Echa un vistazo a mi CV"
      },
    
    // Experience Section
    experience: {
      title: "Experiencia",
      freelancerTeam: "Equipo freelancer",
      frontendDeveloper: "Desarrollador Frontend",
      fullstackDeveloper: "Desarrollador Fullstack",
      projectManager: "Proyect Manager",
      backendDeveloper: "Desarrollador Backend",
      keyContributions: "Contribuciones clave",
      freelancer: "- Freelancer",
      realEstateDescription: "Desarrollo frontend integral para una plataforma de gestión inmobiliaria",
      realEstateCompany: "Empresa inmobiliaria con sede en España – sitio web corporativo y panel de administración personalizado",
      fintechDescription: "Startup fintech con sede en México – plataforma de gestión financiera",
      diarcDescription: "Estudio de Arte 3D especializado en Experiencias Inmersivas, Metaversos y Gaming – Aplicación de Página Única + Panel de Administración",
      contributions: {
        contract: "Desarrollé un flujo de creación de contratos de 4 pasos con Zustand para gestión de estado, React Hook Form + Zod para validación robusta, y rutas protegidas basadas en roles de usuario.",
        reactQuery: "Construí flujos de usuario complejos usando React Query con actualizaciones de UI optimistas, mejorando la capacidad de respuesta y experiencia del usuario.",
        dashboards: "Diseñé e implementé dashboards interactivos con Recharts, filtros persistentes por fecha y moneda, y validación de rangos de fecha con manejo de estado global.",
        responsive: "Construí layouts completamente responsivos con Tailwind CSS, asegurando experiencias fluidas en todos los dispositivos.",
        animations: "Mejoré la experiencia del usuario con animaciones suaves usando Framer Motion, incluyendo transiciones personalizadas y micro-interacciones.",
        performance: "Optimicé el rendimiento a través de división de código, carga diferida y patrones eficientes de gestión de estado.",
        yacobian1: "Construí un sitio web responsivo y mobile-first basado en diseños de Figma, asegurando rendimiento e implementación pixel-perfect.",
        yacobian2: "Desarrollé un panel de administración personalizado con capacidades CRUD completas, permitiendo a usuarios no técnicos gestionar el contenido del sitio de forma autónoma.",
        tualoLed: "Lideré el desarrollo frontend y contribuí a tareas full-stack durante un período de 1 año, asegurando mantenibilidad y rendimiento en toda la plataforma.",
        tualoAI: "Automatización de reportes financieros con agentes de IA (OpenAI API), logrando una reducción del 80% en tareas manuales y mayor eficiencia operativa.",
        tualoIntegration: "Integré Trigger.dev para flujos de trabajo programados y RESEND para entrega confiable de emails transaccionales.",
        tualoCharts: "Construí gráficos dinámicos y fáciles de usar a partir de inputs de Excel usando Recharts, mejorando la visualización de datos y reportes.",
        diarcFigma: "Traduje diseños detallados de Figma en una Aplicación de Página Única pixel-perfect y responsiva usando Next.js y Tailwind CSS.",
        diarcArchitecture: "Construí una arquitectura escalable basada en componentes con elementos UI reutilizables y tokens de diseño consistentes.",
        diarcAnimations: "Implementé animaciones personalizadas, efectos de scroll y comportamientos responsivos para una experiencia de usuario inmersiva en todos los dispositivos.",
        diarcAdmin: "Desarrollé una interfaz de administración ligera para gestión de contenido, manteniendo consistencia visual con el sitio público.",
        diarcSEO: "Apliqué mejores prácticas de SEO técnico (HTML semántico, accesibilidad, optimización de rendimiento) para mayor visibilidad."
      }
    },
    
    // Skills Section
    skills: {
      title: "Habilidades y Herramientas",
      // Soft Skills
      proactive: "proactivo",
      autodidact: "autodidacta",
      teamwork: "trabajo en equipo", 
      problemSolving: "resolución de problemas",
      communication: "comunicación",
      adaptability: "adaptabilidad",
      timeManagement: "gestión del tiempo",
      leadership: "liderazgo",
      collaboration: "colaboración",
      analyticalThinking: "pensamiento analítico"
    },
    
    // Experience Dates
    dates: {
      may2025Current: "Mayo 2025 - Actual",
      march2025: "Marzo 2025",
      april2024Feb2025: "Abril 2024 - Feb 2025", 
      april2024: "Abril 2024"
    },
    
    // Marquee Projects
    marquee: {
      diarcDescription: "Desarrollé su sitio web y gestor de contenido con NextJs.",
      tualoDescription: "Trabajé como desarrollador fullstack de forma remota durante un año.",
      yacobianDescription: "Desarrollé su sitio web y gestor de contenido con NextJs."
    },
    
    // Contact Section
    contact: {
      title: "Contacto",
      subtitle: "¡Hablemos! Envíame un mensaje y te responderé pronto.",
      contactMe: "Hablemos",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Hola Manuel, ¿cómo estás?, me interesa ...",
        sending: "Enviando...",
        sendMessage: "Enviar mensaje",
        errors: {
          nameRequired: "El nombre es requerido",
          emailRequired: "El email es requerido",
          emailInvalid: "El email no es válido",
          messageRequired: "El mensaje es requerido",
          messageMinLength: "El mensaje debe tener al menos 10 caracteres"
        },
        success: {
          title: "¡Mensaje enviado exitosamente!",
          description: "Te responderé pronto. Gracias por contactarme."
        },
        error: {
          title: "Error al enviar el mensaje",
          description: "Por favor, inténtalo de nuevo o contáctame directamente."
        },
        configError: {
          title: "EmailJS no está configurado",
          description: "Verifica tus variables de entorno."
        }
      }
    },
    
    // Timeline
    timeline: {
      experience: "Experiencia"
    },

    // Footer
    footer: {
      description: "Transformando ideas complejas en experiencias digitales intuitivas y escalables.",
      quickLinks: "Enlaces Rápidos",
      copyright: "Manuel Latorre."
    }
  }
};

export const useTranslations = (language: Language) => {
  return translations[language];
}; 