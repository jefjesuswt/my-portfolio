// Define la estructura del contenido
export interface AboutMeContent {
  title: string;
  // Sección 1: Origen
  heading_origin: string;
  p_origin_1: string;
  // Sección 2: El Viaje
  heading_journey: string;
  p_journey_1: string;
  p_journey_2: string;
  // Sección 3: Filosofía
  heading_philosophy: string;
  p_philosophy_1: string;
  p_philosophy_2: string;
  // Sección 4: Pasiones
  heading_passions: string;
  p_passions_1: string;
  p_passions_2: string;
  p_passions_3: string;
}

// --- DATOS EN ESPAÑOL ---
const esData: AboutMeContent = {
  title: '&gt; cat ./sobre-mi.md',

  heading_origin: '[ Origen: La pasión por experimentar ]', // <== CAMBIO AQUÍ
  p_origin_1:
    'Mi pasión por la tecnología nació a los 4 años con una PS1. Pero mi interés nunca fue solo jugar; era la curiosidad por "cacharrear": investigar por horas cómo hackear consolas, correr *homebrew* y entender cómo funcionaban las cosas por dentro. Esa curiosidad innata fue lo que me llevó a la Ingeniería de Sistemas.',

  heading_journey: '[ El Viaje: Hiato y Regreso ]',
  p_journey_1:
    'Inicié mis estudios en 2015, pero en 2017 la vida me llevó por otro camino. Hice un hiato y estuve viviendo en Buenos Aires. Regresé a Venezuela en 2022.',
  p_journey_2:
    'En 2023 tomé una decisión consciente: retomar mis estudios y dedicarme por completo a esta pasión. Aunque la universidad me dio una base, gran parte de mi stack moderno (Angular, NestJS) lo he forjado de forma autodidacta, especialmente gracias a la claridad de mentores como Fernando Herrera (DevTalles).',

  heading_philosophy: '[ Filosofía: Código Abierto y Libertarianismo ]',
  p_philosophy_1:
    'Me considero un libertario, y esa filosofía resuena con mi forma de ver la tecnología. Soy un firme creyente y usuario del <strong class="text-teal-300/80">código abierto.</strong>',
  p_philosophy_2:
    'Veo el open-source no solo como un modelo de desarrollo, sino como una postura moral sobre la libertad y la colaboración.',

  heading_passions: '[ Intereses y Enfoque ]',

  p_passions_1:
    'Mis pasatiempos son un reflejo de mi personalidad. Disfruto de los desafíos inmersivos que invitan a la <strong class="text-teal-300/80">exploración</strong> y a la resolución de problemas de forma creativa.',

  p_passions_2:
    'Por otro lado, me atraen los retos de alta dificultad que requieren <strong class="text-teal-300/80">paciencia y un alto nivel de persistencia</strong>, reforzando mi filosofía de perseverar hasta dominar el sistema.',

  p_passions_3:
    'El hilo conductor en todo —el código, mi filosofía, mis intereses— es mi <strong class="text-teal-300/80">interés por lo complejo</strong>. Me motiva analizar sistemas difíciles y no conformarme con conclusiones obvias, aplicando esta <strong class="text-teal-300/80">perseverancia</strong> en todos mis proyectos.',
};

const enData: AboutMeContent = {
  title: '&gt; cat ./about-me.md',

  heading_origin: '[ Origin: The Joy of "Tinkering" ]',
  p_origin_1:
    'My passion for technology began at age 4 with a PS1. But my interest was never just about playing; it was the curiosity for "tinkering": spending hours researching how to hack consoles, run homebrew, and understand how things worked inside. That innate curiosity is what led me to Systems Engineering.',

  heading_journey: '[ The Journey: Hiatus and Return ]',
  p_journey_1:
    'I started my studies in 2015, but in 2017 life took me down a different path. I took a hiatus and lived in Buenos Aires. I returned to Venezuela in 2022.',
  p_journey_2:
    'In 2023, I made a conscious decision: to resume my studies and dedicate myself fully to this passion. Although university gave me a foundation, much of my modern stack (Angular, NestJS) has been self-taught, especially thanks to the clarity of mentors like Fernando Herrera (DevTalles).',

  heading_philosophy: '[ Philosophy: Open Source ]',
  p_philosophy_1:
    'I consider myself a libertarian, and that philosophy resonates with how I see technology. I am a firm believer in and user of <strong class="text-teal-300/80">open-source.</strong>',
  p_philosophy_2:
    'I see open-source not just as a development model, but as a moral stance on freedom and collaboration.',

  // --- SECCIÓN ACTUALIZADA ---
  heading_passions: '[ Interests & Focus ]', // <== CAMBIO AQUÍ

  p_passions_1:
    'My hobbies are a reflection of my personality. I enjoy immersive challenges that encourage <strong class="text-teal-300/80">exploration</strong> and creative problem-solving.',

  p_passions_2:
    'On the other hand, I am drawn to high-difficulty challenges that require <strong class="text-teal-300/80">patience and a high level of persistence</strong>, reinforcing my philosophy of persevering until I master the system.',

  p_passions_3:
    'The common thread in everything—the code, my philosophy, my interests—is my <strong class="text-teal-300/80">interest in the complex</strong>. I am driven to analyze difficult systems and not settle for obvious conclusions, applying this <strong class="text-teal-300/80">perseverance</strong> to all my projects.',
};

export const aboutMeData = {
  es: esData,
  en: enData,
};
