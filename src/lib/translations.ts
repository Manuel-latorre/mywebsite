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

    // Freelance Proyects
    freelanceProyects: {
      viewSomeProyects: "View some proyects"
    },

    // Presentation Section
    presentation: {
      frontendDeveloper: "Fullstack Developer",
      description:
        "Fullstack Developer with +2 years of experience in end-to-end development of scalable, high-performance applications for startups and freelance projects. Specialized in React, Next.js, TypeScript, and Node.js with a strong focus on performance optimization, responsive design, and intuitive user experiences.",
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
      favorcito: "Favorcito",
      favorcitoCountry: "LATAM",
      favorcitoRole: "Frontend Developer",
      favorcitoPeriod: "August 2025 – Current",
      favorcitoDescription: "Currently working as a Frontend Developer",
      favorcitoResponsibilities: [
        "Responsible for web development",
        "Build and improve pages used by clients and students",
        "Focus on fast loading, responsive design, and ease of use",
        "Fix bugs and develop new features to grow the platform"
      ],
      freelancerTeam: "Freelance Team",
      freelancerTeamCountry: "Argentina",
      modality: "Remote",
      frontendDeveloper: "Fullstack Developer",
      fullstackDeveloper: "Fullstack Developer",
      keyContributions: "Key contributions",
      freelancer: "- Freelancer",
      freelanceTeamDescription: "I work as a front-end developer contributing to the creation of products such as CMS platforms, websites, and control panels for global clients.",
      freelanceTeamPeriod: "March 2025 – Current",
      freelanceTeamResponsibilities: [
        "Develop interfaces following Atomic Design principles to ensure consistency and scalability.",
        "Collaborate closely with the Design team by translating Figma designs into high-quality, responsive code.",
        "Delivered several CRUD platforms applying SOLID principles to ensure scalability, maintainability, and excellent performance.",
        "Achieved significant improvements and several manual tasks were reduced for customers through these solutions."
      ],
      tualoCompany: "Tualo",
      tualoCountry: "Mexico",
      tualoRole: "Fullstack Developer",
      tualoPeriod: "April 2024 – Feb 2025",
      tualoDescription: "As a full-stack developer at Tualo, I contributed to the development of the dashboard responsible for managing the financial data of the clients' companies.",
      tualoResponsibilities: [
        "Led the frontend development, focusing on integrating report automation, implementing interactive data visualizations, and creating the user interface for clients to access their monthly financial reports.",
        "Developed dynamic charts using Recharts based on uploaded Excel files and integrated OpenAI API for automated report generation, along with building the user dashboard for report access.",
        "Reduced manual reporting tasks by 80%, leading to a significant improvement in operational efficiency and enhanced data-driven decision-making for clients."
      ],
      tuMejorAmigoCompany: "Tu Mejor Amigo",
      tuMejorAmigoCountry: "Mexico",
      tuMejorAmigoRole: "Frontend Developer",
      tuMejorAmigoPeriod: "Nov 2023 – March 2024",
      tuMejorAmigoDescription: "As a Frontend Developer at Tu Mejor Amigo, I was responsible for crafting intuitive and engaging user interfaces.",
      tuMejorAmigoResponsibilities: [
        "I implemented core functionalities for data management using standard API methods and ensured seamless interaction with the application's database.",
        "Delivered a fluid and responsive user experience, significantly improving data management and application performance."
      ],
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
    },

    // Skills Section
    skills: {
      title: "Technologies & Tools",
      developmentTools: "Development Tools",
      aiTools: "AI Tools",
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
      yacobianDescription: "I developed their Website and content manager with NextJs.",
      favorcitoDescription: "Currently working as a Frontend Developer"
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

    // Freelance Proyects
    freelanceProyects: {
      viewSomeProyects: "Ver algunos proyectos"
    },


    // Presentation Section
    presentation: {
      frontendDeveloper: "Desarrollador Fullstack",
      description:
        "Cuento con +2 años de experiencia en el desarrollo end-to-end de aplicaciones escalables y de alto rendimiento en startups y proyectos freelance. Especializado en React, Next.js, TypeScript y Node.js con un fuerte enfoque en optimización de rendimiento, diseño responsivo y experiencias de usuario intuitivas.",
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
      favorcito: "Favorcito",
      favorcitoCountry: "LATAM",
      favorcitoRole: "Desarrollador Frontend",
      favorcitoPeriod: "Agosto 2025 – Actualidad",
      favorcitoDescription: "Actualmente trabajando como Desarrollador Frontend",
      favorcitoResponsibilities: [
        "Encargado del desarrollo web",
        "Crear y mejorar las páginas utilizadas por clientes y estudiantes",
        "Enfocado en velocidad de carga, diseño responsivo y facilidad de uso",
        "Resolver bugs y desarrollar nuevas funciones para el crecimiento de la plataforma"
      ],
      freelancerTeam: "Freelance Team",
      freelancerTeamCountry: "Argentina",
      modality: "Remoto",
      frontendDeveloper: "Desarrollador Fullstack",
      fullstackDeveloper: "Desarrollador Fullstack",
      projectManager: "Proyect Manager",
      backendDeveloper: "Desarrollador Backend",
      keyContributions: "Contribuciones clave",
      freelancer: "- Freelancer",
      freelanceTeamDescription: "Trabajo como desarrollador frontend contribuyendo a la creación de productos como plataformas CMS, sitios web y paneles de control para clientes globales.",
      freelanceTeamPeriod: "Marzo 2025 – Actual",
      freelanceTeamResponsibilities: [
        "Desarrollo interfaces siguiendo principios de Atomic Design para garantizar consistencia y escalabilidad.",
        "Colaboro estrechamente con el equipo de Diseño traduciendo diseños de Figma en código de alta calidad y responsivo.",
        "Entregué varias plataformas CRUD aplicando principios SOLID para asegurar escalabilidad, mantenibilidad y excelente rendimiento.",
        "Se lograron mejoras significativas y se redujeron varias tareas manuales para los clientes a través de estas soluciones."
      ],
      tualoCompany: "Tualo",
      tualoCountry: "Mexico",
      tualoRole: "Desarrollador Fullstack",
      tualoPeriod: "Abril 2024 – Feb 2025",
      tualoDescription: "Como desarrollador fullstack en Tualo, contribuí al desarrollo del dashboard encargado de gestionar los datos financieros de las empresas clientes.",
      tualoResponsibilities: [
        "Lideré el desarrollo frontend, enfocándome en la integración de automatización de reportes, implementación de visualizaciones de datos interactivas y creación de la interfaz para que los clientes accedan a sus reportes financieros mensuales.",
        "Desarrollé gráficos dinámicos usando Recharts a partir de archivos Excel subidos e integré la API de OpenAI para la generación automatizada de reportes, además de construir el dashboard de usuario para el acceso a reportes.",
        "Reduje las tareas manuales de reportes en un 80%, logrando una mejora significativa en la eficiencia operativa y una mejor toma de decisiones basada en datos para los clientes."
      ],
      tuMejorAmigoCompany: "Tu Mejor Amigo",
      tuMejorAmigoCountry: "Mexico",
      tuMejorAmigoRole: "Desarrollador Frontend",
      tuMejorAmigoPeriod: "Nov 2023 – Marzo 2024",
      tuMejorAmigoDescription: "Como Desarrollador Frontend en Tu Mejor Amigo, fui responsable de crear interfaces de usuario intuitivas y atractivas.",
      tuMejorAmigoResponsibilities: [
        "Implementé funcionalidades principales para la gestión de datos usando métodos estándar de API y aseguré una interacción fluida con la base de datos de la aplicación.",
        "Entregué una experiencia de usuario fluida y responsiva, mejorando significativamente la gestión de datos y el rendimiento de la aplicación."
      ],
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
    },

    // Skills Section
    skills: {
      title: "Tecnologías y Herramientas",
      subtitle: "Tecnologías y herramientas que uso para dar vida a ideas",
      developmentTools: "Herramientas de desarrollo",
      aiTools: "Herramientas de IA",
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
      yacobianDescription: "Desarrollé su sitio web y gestor de contenido con NextJs.",
      favorcitoDescription: "Actualmente trabajo como Desarrollador Frontend."
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