export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface CvContent {
  title: string;

  // Sections Headers
  heading_summary: string;
  heading_experience: string;
  heading_education: string;
  heading_skills: string;
  heading_certifications: string;

  // Data
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  certifications: string[];
}

// --- DATOS EN ESPAÑOL ---
const esData: CvContent = {
  title: '&gt; cat ./curriculum.md',

  heading_summary: '[ SUMMARY ]',
  summary: 'Próximo Ingeniero de Sistemas (10º semestre) con una base sólida en el ciclo de vida del desarrollo de software y gestión de bases de datos.',

  heading_experience: '[ EXPERIENCE ]',
  experience: [
    {
      role: 'Pasante',
      company: 'iGemas, C.A.',
      location: 'Barcelona, Anzoátegui',
      date: 'Nov 2025 - Ene 2026',
      achievements: [
        'Desarrollé un frontend de alto rendimiento para 5 sistemas web empresariales (gCon, gAdm, gHub, gBox, gInm) utilizando Angular 19+ y Tailwind CSS, implementando SSR (Server-Side Rendering) y Lazy Loading para optimizar la velocidad de la plataforma y el SEO.',
        'Automaticé los flujos de trabajo de despliegue y configuración arquitectando pipelines de CI/CD con Netlify y Bun, reemplazando procesos manuales con ciclos de lanzamiento optimizados y scripts de entorno Node.js personalizados.',
        'Gestioné entornos de desarrollo y producción en sistemas basados en Linux, utilizando herramientas CLI y una arquitectura basada en componentes para asegurar una alta reutilización de código y escalabilidad de la infraestructura.'
      ]
    }
  ],

  heading_education: '[ EDUCATION ]',
  education: [
    {
      institution: 'Instituto Universitario Politécnico "Santiago Mariño"',
      degree: 'Ingeniería de Sistemas',
      location: 'Barcelona, Anzoátegui',
      details: 'Materias relevantes: Economía, Programación, Estructuras de Datos, Optimización de Sistemas, etc.'
    }
  ],

  heading_skills: '[ SKILLS ]',
  skills: [
    {
      title: 'Technological Stack',
      items: ['TypeScript/JavaScript (ES6+)', 'Java', 'SQL', 'HTML5/CSS3', 'Angular 20+', 'NestJS', 'Vue/Nuxt', 'Hono/H3', 'RxJS', 'Tailwind CSS']
    },
    {
      title: 'Tools & DevOps',
      items: ['Bun', 'Node.js', 'Netlify', 'Linux CLI', 'CI/CD Pipelines', 'Git/GitHub', 'Jasmine/Karma']
    },
    {
      title: 'Soft Skills & Interests',
      items: ['Metodologías Ágiles (Scrum)', 'Resolución de Problemas', 'IoT (gHub)', 'Open Source', 'Arquitectura Backend']
    }
  ],

  heading_certifications: '[ CERTIFICATIONS ]',
  certifications: [
    'EF SET English Certificate (B2 Upper Intermediate). 2025',
    'Angular: De Cero a Experto: DevTalles. 2025',
    'Node.js: De Cero a Experto: DevTalles. 2025'
  ]
};

// --- DATOS EN INGLÉS ---
const enData: CvContent = {
  title: '&gt; cat ./resume.md',

  heading_summary: '[ SUMMARY ]',
  summary: 'Upcoming Systems Engineer (10th semester) with a solid foundation in the software development lifecycle and database management.',

  heading_experience: '[ EXPERIENCE ]',
  experience: [
    {
      role: 'Intern',
      company: 'iGemas, C.A.',
      location: 'Barcelona, Anzoátegui',
      date: 'Nov 2025 - Jan 2026',
      achievements: [
        'Developed a high-performance frontend for 5 enterprise web systems (gCon, gAdm, gHub, gBox, gInm) using Angular 19+ and Tailwind CSS, implementing SSR (Server-Side Rendering) and Lazy Loading to optimize platform speed and SEO.',
        'Automated deployment and configuration workflows by architecting CI/CD pipelines with Netlify and Bun, replacing manual processes with optimized release cycles and custom Node.js environment scripts.',
        'Managed development and production environments on Linux-based systems using CLI tools and a component-based architecture to ensure high code reusability and infrastructure scalability.'
      ]
    }
  ],

  heading_education: '[ EDUCATION ]',
  education: [
    {
      institution: 'Instituto Universitario Politécnico "Santiago Mariño"',
      degree: 'Systems Engineering',
      location: 'Barcelona, Anzoátegui',
      details: 'Relevant coursework: Economics, Programming, Data Structures, System Optimization, etc.'
    }
  ],

  heading_skills: '[ SKILLS ]',
  skills: [
    {
      title: 'Technological Stack',
      items: ['TypeScript/JavaScript (ES6+)', 'Java', 'SQL', 'HTML5/CSS3', 'Angular 20+', 'NestJS', 'Vue/Nuxt', 'Hono/H3', 'RxJS', 'Tailwind CSS']
    },
    {
      title: 'Tools & DevOps',
      items: ['Bun', 'Node.js', 'Netlify', 'Linux CLI', 'CI/CD Pipelines', 'Git/GitHub', 'Jasmine/Karma']
    },
    {
      title: 'Soft Skills & Interests',
      items: ['Agile Methodologies (Scrum)', 'Problem Solving', 'IoT (gHub)', 'Open Source', 'Backend Architecture']
    }
  ],

  heading_certifications: '[ CERTIFICATIONS ]',
  certifications: [
    'EF SET English Certificate (B2 Upper Intermediate). 2025',
    'Angular: Zero to Expert: DevTalles. 2025',
    'Node.js: Zero to Expert: DevTalles. 2025'
  ]
};

export const aboutMeData = {
  es: esData,
  en: enData,
};
