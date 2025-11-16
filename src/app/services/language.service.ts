import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang = signal<Language>('es');

  currentLang = this.lang.asReadonly();

  private isChangingSignal = signal(false);

  isChanging = this.isChangingSignal.asReadonly();

  setLang(newLang: Language) {
    if (this.lang() === newLang) return;

    this.isChangingSignal.set(true);

    setTimeout(() => {
      this.lang.set(newLang);

      this.isChangingSignal.set(false);
    }, 300);
  }
}
