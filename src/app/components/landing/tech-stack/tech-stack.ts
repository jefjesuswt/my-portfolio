import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';

interface TechLogo {
  name: string;
  src: string;
}

@Component({
  selector: 'landing-tech-stack',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="my-24 max-w-5xl mx-auto">
      <div
        class="w-full overflow-hidden mb-16"
        [style.mask-image]="
          'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        "
      >
        <div class="animate-scroll-x">
          @for (logo of techLogos; track $index) {
            <div
              role="img"
              [attr.aria-label]="logo.name"
              class="h-10 w-10 aspect-square mx-6
                     bg-gray-300 hover:bg-teal-300 transition-colors duration-300
                     mask-no-repeat mask-center mask-contain"
              [style.mask-image]="'url(' + logo.src + ')'"
              [style.-webkit-mask-image]="'url(' + logo.src + ')'"
            ></div>
          }

          @for (logo of techLogos; track $index) {
            <div
              role="img"
              aria-hidden="true"
              class="h-10 w-10 aspect-square mx-6
                     bg-gray-300 hover:bg-teal-300 transition-colors duration-300
                     mask-no-repeat mask-center mask-contain"
              [style.mask-image]="'url(' + logo.src + ')'"
              [style.-webkit-mask-image]="'url(' + logo.src + ')'"
            ></div>
          }
        </div>
      </div>

      <h2
        class="text-3xl font-bold mb-12 text-center bg-linear-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent
               invisible-start"
        animateOnScroll="fade-up"
      >
        &gt; cat ./tech-stack.log
      </h2>

      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="invisible-start" animateOnScroll="fade-up" [style.animation-delay]="'100ms'">
          <pre class="text-teal-300 text-sm select-none" aria-hidden="true">[ FRONTEND ]</pre>
          <ul class="mt-2 text-gray-400 text-lg leading-loose">
            <li>Angular</li>
            <li>TypeScript</li>
            <li>RxJS</li>
            <li>Tailwind CSS</li>
            <li>PrimeNG</li>
          </ul>
        </div>
        <div class="invisible-start" animateOnScroll="fade-up" [style.animation-delay]="'300ms'">
          <pre class="text-emerald-400 text-sm select-none" aria-hidden="true">[ BACKEND ]</pre>
          <ul class="mt-2 text-gray-400 text-lg leading-loose">
            <li>NestJS</li>
            <li>Node.js</li>
            <li>MongoDB / Mongoose</li>
            <li>PostgreSQL</li>
            <li>Redis / Valkey</li>
            <li>JWT</li>
          </ul>
        </div>
        <div class="invisible-start" animateOnScroll="fade-up" [style.animation-delay]="'500ms'">
          <pre class="text-sky-400 text-sm select-none" aria-hidden="true">[ DEVOPS & TOOLS ]</pre>
          <ul class="mt-2 text-gray-400 text-lg leading-loose">
            <li>AWS</li>
            <li>Docker</li>
            <li>Cloudflare R2</li>
            <li>Bun</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class TechStack {
  // Lista de logos (sin cambios)
  techLogos: TechLogo[] = [
    { name: 'Angular', src: 'assets/icons/angular.svg' },
    { name: 'TypeScript', src: 'assets/icons/typescript.svg' },
    { name: 'RxJS', src: 'assets/icons/rxjs.svg' },
    { name: 'Tailwind CSS', src: 'assets/icons/tailwind.svg' },
    { name: 'PrimeNG', src: 'assets/icons/primeng.svg' },
    { name: 'NestJS', src: 'assets/icons/nestjs.svg' },
    { name: 'Node.js', src: 'assets/icons/nodejs.svg' },
    { name: 'MongoDB', src: 'assets/icons/mongodb.svg' },
    { name: 'PostgreSQL', src: 'assets/icons/postgresql.svg' },
    { name: 'Redis', src: 'assets/icons/redis.svg' },
    { name: 'JWT', src: 'assets/icons/jwt.svg' },
    { name: 'AWS', src: 'assets/icons/aws.svg' },
    { name: 'Docker', src: 'assets/icons/docker.svg' },
    { name: 'Cloudflare', src: 'assets/icons/cloudflare.svg' },
    { name: 'Bun', src: 'assets/icons/bun.svg' },
    { name: 'Git', src: 'assets/icons/git.svg' },
  ];
}
