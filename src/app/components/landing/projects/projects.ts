import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { LanguageService } from '../../../services/language.service';
import { projectsData } from '../../../data/landing/projects/projects.data';

@Component({
  selector: 'landing-projects',
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="my-24 max-w-5xl mx-auto invisible-start" animateOnScroll="fade-up">
      <h2
        class="text-3xl font-bold mb-12 text-center bg-linear-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent
               lang-text"
        [class.lang-text-fading]="isChanging()"
        [innerHTML]="currentData().title"
      ></h2>

      <div class="grid md:grid-cols-2 gap-8">
        @for (project of projects(); track project.id) {
          <div
            [class]="
              'border p-6 rounded-lg bg-gray-900/50 invisible-start transition-colors ' +
              project.borderColor +
              ' ' +
              project.hoverBorderColor
            "
            [animateOnScroll]="project.animation"
          >
            <pre
              aria-hidden="true"
              [class]="'select-none whitespace-pre-wrap ' + project.preColor + ' lang-text'"
              [class.lang-text-fading]="isChanging()"
              >{{ project.preAscii }}</pre
            >
            <p
              [class]="'mt-4 text-gray-400 ' + (project.descriptionClass || '') + ' lang-text'"
              [class.lang-text-fading]="isChanging()"
            >
              {{ project.description }}
            </p>
            <div class="flex gap-4 mt-6 items-center">
              @if (project.githubUrl && !project.isRepoPrivate) {
                <a
                  [href]="project.githubUrl"
                  target="_blank"
                  [class]="'lang-text ' + (project.linkClass || 'text-sky-400 hover:text-teal-300')"
                  [class.lang-text-fading]="isChanging()"
                >
                  {{ linkTexts().github }}
                </a>
              }
              @if (project.isRepoPrivate) {
                <span class="text-gray-500 lang-text" [class.lang-text-fading]="isChanging()">
                  {{ linkTexts().privateRepo }}
                </span>
              }
              @if (project.demoUrl) {
                <a
                  [href]="project.demoUrl"
                  target="_blank"
                  [class]="'lang-text ' + (project.linkClass || 'text-sky-400 hover:text-teal-300')"
                  [class.lang-text-fading]="isChanging()"
                >
                  {{ linkTexts().demo }}
                </a>
              }
            </div>
          </div>
        } @empty {
          <p class="text-gray-500 md:col-span-2 text-center">No hay proyectos para mostrar.</p>
        }
      </div>
    </section>
  `,
})
export class Projects {
  private langService = inject(LanguageService);
  private lang = this.langService.currentLang;

  isChanging = this.langService.isChanging;

  currentData = computed(() => projectsData[this.lang()]);
  projects = computed(() => this.currentData().projects);
  linkTexts = computed(() => this.currentData().links);
}
