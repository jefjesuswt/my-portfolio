export interface AboutContent {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
}

const esData: AboutContent = {
  title: '&gt; sobre-mi.txt',
  p1: '¡Hola! Soy Jeffrey, un desarrollador de software de 27 años. Me especializo en construir aplicaciones web completas, robustas y escalables.',
  p2: 'Mi stack principal combina <strong class="text-teal-300">Angular</strong> en el frontend con <strong class="text-emerald-400">NestJS</strong> en el backend. Tengo sólida experiencia con <strong class="text-sky-400">TypeScript</strong>, bases de datos como <strong class="text-emerald-400">MongoDB</strong> y <strong class="text-sky-400">PostgreSQL</strong>, y despliegues en <strong class="text-teal-200">AWS</strong> y <strong class="text-emerald-200">Docker</strong>.',
  p3: 'Soy un desarrollador analítico, motivado por la curiosidad de entender sistemas complejos. Doy prioridad a escribir código <strong class="text-teal-300">limpio, mantenible</strong> y de <strong class="text-teal-300">alto rendimiento</strong>.',
  p4: 'Me apasiona el <strong class="text-sky-400">sector de media y entretenimiento</strong>. Actualmente estoy expandiendo mis habilidades en backend con <strong class="text-emerald-400">Go</strong> y explorando <strong class="text-teal-300">Astro</strong> y <strong class="text-emerald-200">Vue</strong> en el frontend.',
  p5: 'Busco unirme a un <strong class="text-teal-200">equipo o proyecto (fijo o freelance)</strong> donde pueda aportar, resolver problemas desafiantes y seguir creciendo profesionalmente.',
};

const enData: AboutContent = {
  title: '&gt; about-me.txt',
  p1: "Hi! I'm Jeffrey, a 27-year-old software developer. I specialize in building complete, robust, and scalable web applications.",
  p2: 'My main stack combines <strong class="text-teal-300">Angular</strong> on the frontend with <strong class="text-emerald-400">NestJS</strong> on the backend. I have solid experience with <strong class="text-sky-400">TypeScript</strong>, databases like <strong class="text-emerald-400">MongoDB</strong> and <strong class="text-sky-400">PostgreSQL</strong>, and deployments on <strong class="text-teal-200">AWS</strong> and <strong class="text-emerald-200">Docker</strong>.',
  p3: 'I am an analytical developer, driven by curiosity to understand complex systems. I prioritize writing <strong class="text-teal-300">clean, maintainable</strong>, and <strong class="text-teal-300">high-performance</strong> code.',
  p4: 'I am passionate about the <strong class="text-sky-400">media and entertainment sector</strong>. I am currently expanding my backend skills with <strong class="text-emerald-400">Go</strong> and exploring <strong class="text-teal-300">Astro</strong> and <strong class="text-emerald-200">Vue</strong> on the frontend.',
  p5: 'I am looking to join a <strong class="text-teal-200">team or project (full-time or freelance)</strong> where I can contribute, solve challenging problems, and continue to grow professionally.',
};

export const aboutData = {
  es: esData,
  en: enData,
};
