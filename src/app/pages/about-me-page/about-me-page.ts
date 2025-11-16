import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { aboutMeData } from '../../data/about-me/about-me.data';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="my-24 max-w-4xl mx-auto space-y-10
           text-lg text-gray-400 leading-relaxed"
    >
      <h1
        class="text-3xl font-bold mb-12 bg-linear-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent
             lang-text invisible-start"
        [class.lang-text-fading]="isChanging()"
        [innerHTML]="content().title"
        animateOnScroll="fade-up"
      ></h1>

      <section class="invisible-start" animateOnScroll="fade-up">
        <h2
          class="text-xl font-bold text-emerald-400 mb-4 lang-text font-mono"
          [class.lang-text-fading]="isChanging()"
          [innerHTML]="content().heading_origin"
        ></h2>
        <div class="space-y-4">
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_origin_1"
          ></p>
        </div>
      </section>

      <section class="invisible-start" animateOnScroll="fade-up">
        <h2
          class="text-xl font-bold text-emerald-400 mb-4 lang-text font-mono"
          [class.lang-text-fading]="isChanging()"
          [innerHTML]="content().heading_journey"
        ></h2>
        <div class="space-y-4">
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_journey_1"
          ></p>
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_journey_2"
          ></p>
        </div>
      </section>

      <section class="invisible-start" animateOnScroll="fade-up">
        <h2
          class="text-xl font-bold text-emerald-400 mb-4 lang-text font-mono"
          [class.lang-text-fading]="isChanging()"
          [innerHTML]="content().heading_philosophy"
        ></h2>
        <div class="space-y-4">
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_philosophy_1"
          ></p>
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_philosophy_2"
          ></p>
        </div>
      </section>

      <section class="invisible-start" animateOnScroll="fade-up">
        <h2
          class="text-xl font-bold text-emerald-400 mb-4 lang-text font-mono"
          [class.lang-text-fading]="isChanging()"
          [innerHTML]="content().heading_passions"
        ></h2>
        <div class="space-y-4">
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_passions_1"
          ></p>
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_passions_2"
          ></p>
          <p
            class="lang-text"
            [class.lang-text-fading]="isChanging()"
            [innerHTML]="content().p_passions_3"
          ></p>
        </div>
      </section>
    </article>
  `,
})
export class AboutMePage {
  private langService = inject(LanguageService);
  private lang = this.langService.currentLang;

  // Inyectamos el signal de animación
  isChanging = this.langService.isChanging;

  // Creamos el signal computado que reacciona a los cambios
  content = computed(() => aboutMeData[this.lang()]);
}
