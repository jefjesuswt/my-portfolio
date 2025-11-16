import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { LanguageService } from '../../../services/language.service';
import { contactData } from '../../../data/landing/contact/contact.data';

@Component({
  selector: 'landing-contact',
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="my-24 text-center invisible-start" animateOnScroll="fade-up">
      <h2
        class="text-3xl font-bold mb-6 bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent
               lang-text"
        [class.lang-text-fading]="isChanging()"
        [innerHTML]="content().title"
      ></h2>

      <p class="text-lg text-gray-400 lang-text" [class.lang-text-fading]="isChanging()">
        {{ content().description }}
      </p>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-6 text-lg"
      >
        <a
          href="mailto:jefjesuswt@gmail.com"
          target="_blank"
          class="text-sky-400 hover:text-teal-300 underline
                 lang-text"
          [class.lang-text-fading]="isChanging()"
        >
          {{ content().email }}
        </a>
        <a
          href="https://github.com/jefjesuswt"
          target="_blank"
          class="text-sky-400 hover:text-teal-300 underline
                 lang-text"
          [class.lang-text-fading]="isChanging()"
        >
          {{ content().github }}
        </a>
      </div>
    </footer>
  `,
})
export class Contact {
  private langService = inject(LanguageService);
  private lang = this.langService.currentLang;

  isChanging = this.langService.isChanging;

  content = computed(() => contactData[this.lang()]);
}
