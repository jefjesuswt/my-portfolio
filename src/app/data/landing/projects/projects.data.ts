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

  technologies?: string[];
  features?: string[];
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
    demoUrl: 'https://dicasagroup.com/',
    isRepoPrivate: true,
    technologies: ['Angular', 'SSR', 'Tailwind', 'NestJS', 'Redis', 'Cloudflare R2'],
    features: [
      'Gestión avanzada en el lado del servidor (SSR) para SEO optimizado.',
      'Autenticación robusta y control de acceso basado en roles (RBAC).',
      'Integración con servicios de almacenamiento en la nube para multimedia.',
    ],
  },
  {
    id: 'igemas',
    animation: 'slide-left',
    borderColor: 'border-teal-400/30',
    hoverBorderColor: 'hover:border-teal-400/60',
    preColor: 'text-teal-400',
    preAscii: `[PROYECTO] iGemas Frontend`,
    description:
      'Landing page principal y páginas CTA de productos para la plataforma web.',
    isRepoPrivate: true,
    demoUrl: 'https://igemas.com',
    technologies: ['Angular', 'Tailwind CSS', 'Web Scraping'],
    features: [
      'Frontend optimizado con la función principal de exhibición de productos y llamadas a la acción.',
      'Extracción de datos (Scraping) automatizada desde Trustpilot para mostrar reseñas reales de usuarios.',
      'Integración del estatus y disponiblidad de sistemas mediante la API / scraping de UptimeRobot.',
    ],
  },
  {
    id: 'notlin',
    animation: 'slide-left',
    borderColor: 'border-green-400/30',
    hoverBorderColor: 'hover:border-green-400/60',
    preColor: 'text-green-400',
    preAscii: `[PROYECTO] Notlin`,
    description: 'Clon minimalista de Notion construido con Nuxt, Nuxt UI Editor (Tiptap) con slash commands, base de datos Turso y un backend rápido en Bun.',
    githubUrl: 'https://github.com/jefjesuswt/notlin-nuxt',
    demoUrl: 'https://notlin.karin.rocks/',
    technologies: ['Nuxt 3', 'Nuxt UI', 'Tiptap', 'Bun', 'Turso', 'Drizzle ORM'],
    features: [
      'Editor de texto enriquecido interactivo con soporte para barra invertida (slash commands) personalizado.',
      'Backend ultra rápido desarrollado con Bun para manejo de APIs y sesión.',
      'Base de datos en el edge utilizando Turso para latencia nula.',
    ],
  },
  {
    id: 'tritio',
    animation: 'slide-left',
    borderColor: 'border-yellow-400/30',
    hoverBorderColor: 'hover:border-yellow-400/60',
    preColor: 'text-yellow-400',
    preAscii: `[PROYECTO] Tritio`,
    description: 'Framework web basado en h3, rápido y con opiniones. Ofrece tipado seguro de extremo a extremo.',
    githubUrl: 'https://github.com/jefjesuswt/tritio',
    technologies: ['TypeScript', 'h3', 'Zod', 'Node.js'],
    features: [
      'Core impulsado por unjs/h3 para rendimiento extremo en el servidor.',
      'Inferencia de tipos 100% segura para rutas y validaciones (estilo Elysia).',
      'Sistema de middlewares y hooks (Lifecycle manager) intuitivo y extensible.',
      'Agnóstico a motores de JavaScript (funciona en Bun, Node, Deno y Edge).',
    ],
  },
  {
    id: 'mako',
    animation: 'slide-left',
    borderColor: 'border-red-400/30',
    hoverBorderColor: 'hover:border-red-400/60',
    preColor: 'text-red-400',
    preAscii: `[PROYECTO] Mako`,
    description: 'Frontend para el emulador ShadPS4 construido con Tauri y Angular.',
    githubUrl: 'https://github.com/jefjesuswt/mako',
    technologies: ['Tauri', 'Rust', 'Angular', 'Tailwind CSS'],
    features: [
      'Aplicación de escritorio nativa, ligera y segura empaquetada con Tauri v2.',
      'Interfaz altamente reactiva basada en señales (Signals) de Angular.',
      'Integración con comandos nativos en Rust para manejo de archivos del emulador.',
      'Librería de componentes personalizada con enfoque en la experiencia de usuario (UX) gamer.',
    ],
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
    preAscii: `[PROJECT] Dicasa Frontend`,
    description:
      'Modern web app for real estate visualization. Includes gallery, filters, authentication, appointments, and property management (CRUD).',
    features: [
      'Advanced Server-Side Rendering (SSR) for optimized SEO.',
      'Robust authentication and Role-Based Access Control (RBAC).',
      'Cloud storage integration for seamless media uploads.',
    ],
  },
  {
    ...esData[1],
    preAscii: `[PROJECT] iGemas Frontend`,
    description:
      'Main landing page and product CTA pages for the web platform.',
    features: [
      'Highly optimized frontend focused on product showcasing and call-to-actions.',
      'Automated data scraping from Trustpilot to display real user reviews.',
      'System status and availability metrics integration via UptimeRobot scraping/API.',
    ],
  },
  {
    ...esData[2],
    preAscii: `[PROJECT] Notlin`,
    description: 'Minimalist Notion clone built with Nuxt, Nuxt UI Editor (Tiptap) with slash commands, Turso database, and a fast Bun backend.',
    features: [
      'Interactive rich-text editor with custom slash commands support.',
      'Ultra-fast backend developed with Bun for API and session handling.',
      'Edge Database using Turso for zero-latency queries.',
    ],
  },
  {
    ...esData[3],
    preAscii: `[PROJECT] Tritio`,
    description: 'The fast, opinionated h3 framework. Features end-to-end type safety.',
    features: [
      'Core powered by unjs/h3 for extreme server performance.',
      '100% type-safe inference for routes and validations (Elysia style).',
      'Intuitive and extensible middleware and hooks system (Lifecycle manager).',
      'JavaScript engine agnostic (runs on Bun, Node, Deno, and Edge).',
    ],
  },
  {
    ...esData[4],
    preAscii: `[PROJECT] Mako`,
    description: 'Frontend for ShadPS4 emulator built with Tauri and Angular.',
    features: [
      'Native, lightweight, and secure desktop app bundled with Tauri v2.',
      'Highly reactive user interface based on Angular Signals.',
      'Integration with native Rust commands for emulator file management.',
      'Custom component library focused on gamer User Experience (UX).',
    ],
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
