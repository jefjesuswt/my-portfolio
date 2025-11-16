import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Language, LanguageService } from '../../services/language.service';

// ... (Interfaces y Datos 'esData', 'enData' sin cambios) ...
export interface NavbarContent {
  home: string;
  about: string;
  projects: string;
  blog: string;
}
const esData: NavbarContent = {
  home: '&gt; inicio',
  about: '&gt; sobre-mi',
  projects: '&gt; proyectos',
  blog: '&gt; blog',
};
const enData: NavbarContent = {
  home: '&gt; home',
  about: '&gt; about-me',
  projects: '&gt; projects',
  blog: '&gt; blog',
};
export const navbarData = {
  es: esData,
  en: enData,
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class Navbar {
  private langService = inject(LanguageService);
  lang = this.langService.currentLang;
  isChanging = this.langService.isChanging;
  navText = computed(() => navbarData[this.lang()]);

  isMobileMenuVisible = signal(false);

  toggleMobileMenu() {
    // Simplemente invertimos el valor.
    this.isMobileMenuVisible.update((v) => !v);
  }

  closeMenuAndNavigate() {
    // Solo cerramos el menú.
    this.isMobileMenuVisible.set(false);
  }
  // --- FIN DE CAMBIOS ---

  setLang(newLang: Language) {
    this.langService.setLang(newLang);
  }
}
