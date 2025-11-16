import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { aboutMeData } from '../../data/about-me/about-me.data';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-me-page.html',
})
export class AboutMePage {
  private langService = inject(LanguageService);
  private lang = this.langService.currentLang;

  // Inyectamos el signal de animación
  isChanging = this.langService.isChanging;

  // Creamos el signal computado que reacciona a los cambios
  content = computed(() => aboutMeData[this.lang()]);
}
