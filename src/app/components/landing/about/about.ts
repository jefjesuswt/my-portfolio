import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { LanguageService } from '../../../services/language.service';
import { aboutData } from '../../../data/landing/about/about.data';

@Component({
  selector: 'landing-about',
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="my-24 max-w-3xl mx-auto invisible-start" animateOnScroll="fade-up">
      <h2
        class="text-3xl font-bold mb-6 bg-linear-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent
               lang-text"
        [class.lang-text-fading]="isChanging()"
        [innerHTML]="content().title"
      ></h2>
      <div class="text-lg text-gray-400 leading-relaxed space-y-4">
        <p class="lang-text" [class.lang-text-fading]="isChanging()" [innerHTML]="content().p1"></p>
        <p class="lang-text" [class.lang-text-fading]="isChanging()" [innerHTML]="content().p2"></p>
        <p class="lang-text" [class.lang-text-fading]="isChanging()" [innerHTML]="content().p3"></p>
        <p class="lang-text" [class.lang-text-fading]="isChanging()" [innerHTML]="content().p4"></p>
        <p class="lang-text" [class.lang-text-fading]="isChanging()" [innerHTML]="content().p5"></p>
      </div>
    </section>
  `,
})
export class About {
  private langService = inject(LanguageService);
  private lang = this.langService.currentLang;

  isChanging = this.langService.isChanging;

  content = computed(() => aboutData[this.lang()]);
}
