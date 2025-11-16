/**
 * Define la estructura de un proyecto
 */
export interface Project {
  id: string;
  animation: 'slide-left' | 'slide-right';

  borderColor: string;
  hoverBorderColor: string;
  preColor: string;
  linkClass?: string;

  githubUrl?: string;
  demoUrl?: string;
  isRepoPrivate?: boolean;

  preAscii: string;
  description: string;
  descriptionClass?: string;
}

export interface LinkTexts {
  github: string;
  demo: string;
  privateRepo: string;
}

// --- DATOS EN ESPAÑOL ---

const esLinkTexts: LinkTexts = {
  github: '[GitHub]',
  demo: '[Demo en Vivo]',
  privateRepo: '[GitHub (Privado)]',
};

const esData: Project[] = [
  {
    id: 'dicasa-fe',
    animation: 'slide-left',
    borderColor: 'border-teal-300/30',
    hoverBorderColor: 'hover:border-teal-300/60',
    preColor: 'text-teal-300',
    preAscii: `[PROYECTO] Dicasa Frontend`,
    description:
      'App web moderna para visualización de inmuebles. Incluye galería, filtros, autenticación, citas y gestión (CRUD) de propiedades.',
    githubUrl: 'https://github.com/jefjesuswt/dicasa-frontend',
    demoUrl: 'https://dicasagroup.netlify.app/',
  },
  {
    id: 'dicasa-be',
    animation: 'slide-right',
    borderColor: 'border-emerald-400/30',
    hoverBorderColor: 'hover:border-emerald-400/60',
    preColor: 'text-emerald-400',
    preAscii: `[PROYECTO] Dicasa Backend`,
    description:
      'API REST escalable con NestJS. Maneja JWT, RBAC, caché con Redis, subida de imágenes a Cloudflare R2 y envío de correos.',
    githubUrl: 'https://github.com/jefjesuswt/dicasa-backend',
  },
  {
    id: 'dicasa-an',
    animation: 'slide-left',
    borderColor: 'border-sky-400/30',
    hoverBorderColor: 'hover:border-sky-400/60',
    preColor: 'text-sky-400',
    preAscii: `[PROYECTO] Dicasa Analytics`,
    description:
      'Servicio de backend con NestJS para analíticas: rastreo de visitas, sesiones, métricas de engagement y monitoreo de seguridad.',
    githubUrl: 'https://github.com/jefjesuswt/dicasa-analytics',
  },
  {
    id: 'wott',
    animation: 'slide-right',
    borderColor: 'border-gray-700/50',
    hoverBorderColor: 'hover:border-gray-600/60',
    preColor: 'text-gray-500',
    descriptionClass: 'text-gray-500 italic',
    linkClass: 'text-sky-400/50 hover:text-teal-300/50',
    preAscii: `[PROYECTO] Wott Player`,
    description: '(WIP) Reproductor de música usando Angular y youtubei.js. Aún en desarrollo...',
    githubUrl: 'https://github.com/jefjesuswt/wott-player',
  },
  {
    id: 'igemas',
    animation: 'slide-left',
    borderColor: 'border-teal-400/30',
    hoverBorderColor: 'hover:border-teal-400/60',
    preColor: 'text-teal-400',
    preAscii: `[PROTOTIPO] iGemas Frontend`,
    description:
      'Prototipo de frontend para la plataforma iGemas, una suite de 5 sistemas web (gCon, gAdm, gHub, etc.). Construido con Angular, SSR y Tailwind.',
    isRepoPrivate: true,
    demoUrl: 'https://igemas.netlify.app/',
  },
];

// --- DATOS EN INGLÉS ---

const enLinkTexts: LinkTexts = {
  github: '[GitHub]',
  demo: '[Live Demo]',
  privateRepo: '[GitHub (Private)]',
};

const enData: Project[] = [
  {
    ...esData[0],
    preAscii: `[PROJECT] Dicasa Frontend `,
    description:
      'Modern web app for real estate visualization. Includes gallery, filters, authentication, appointments, and property management (CRUD).',
  },
  {
    ...esData[1],
    preAscii: `[PROJECT] Dicasa Backend`,
    description:
      'Scalable REST API with NestJS. Handles JWT, RBAC, Redis caching, image uploads to Cloudflare R2, and email sending.',
  },
  {
    ...esData[2],
    preAscii: `[PROJECT] Dicasa Analytics`,
    description:
      'Backend service with NestJS for analytics: tracking visits, sessions, engagement metrics, and security monitoring.',
  },
  {
    ...esData[3],
    preAscii: `[PROJECT] Wott Player`,
    description: '(WIP) Music player using Angular and youtubei.js. Still in development...',
  },
  {
    ...esData[4],
    preAscii: `[PROTOTYPE] iGemas Frontend`,
    description:
      'Frontend prototype for the iGemas platform, a suite of 5 web systems (gCon, gAdm, gHub, etc.). Built with Angular, SSR, and Tailwind.',
  },
];

export const projectsData = {
  es: {
    title: '&gt; ls -l ./proyectos-publicos',
    projects: esData,
    links: esLinkTexts,
  },
  en: {
    title: '&gt; ls -l ./public-projects',
    projects: enData,
    links: enLinkTexts,
  },
};
