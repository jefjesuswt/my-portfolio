export interface ContactContent {
  title: string;
  description: string;
  email: string;
  github: string;
}

const esData: ContactContent = {
  title: '&gt; contacto.sh',
  description: '¿Interesado en colaborar? Hablemos.',
  email: '[ jefejsuswt@gmail.com ]',
  github: '[ GitHub/jefjesuswt ]',
};

const enData: ContactContent = {
  title: '&gt; contact.sh',
  description: "Interested in collaborating? Let's talk.",
  email: '[ jefejsuswt@gmail.com ]',
  github: '[ GitHub/jefjesuswt ]',
};

export const contactData = {
  es: esData,
  en: enData,
};
