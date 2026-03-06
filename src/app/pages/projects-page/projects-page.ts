import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { LanguageService } from '../../services/language.service';
import { projectsData } from '../../data/landing/projects/projects.data';

@Component({
  selector: 'app-projects-page',
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen py-32 px-4 max-w-4xl mx-auto flex flex-col items-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-16 text-center select-none bg-linear-to-r from-teal-300 via-emerald-400 to-sky-400 bg-clip-text text-transparent anim-fade-in">
        <span class="text-white">&gt; </span>{{ lang() === 'es' ? 'ls -l ./todos-mis-proyectos' : 'ls -l ./all-my-projects' }}
      </h1>

      <div class="flex flex-col gap-16 w-full">
        @for (project of projects(); track project.id) {
          <article
            [class]="
              'border p-8 md:p-10 rounded-xl bg-gray-900/60 backdrop-blur-xs invisible-start transition-all duration-300 ' +
              project.borderColor +
              ' ' +
              project.hoverBorderColor
            "
            [animateOnScroll]="project.animation"
          >
            <!-- Header -->
            <header class="mb-6">
              <pre
                aria-hidden="true"
                [class]="'text-lg md:text-xl font-mono select-none whitespace-pre-wrap mb-4 ' + project.preColor + ' lang-text'"
                [class.lang-text-fading]="isChanging()"
              >{{ project.preAscii }}</pre>

              <p
                [class]="'text-base md:text-lg text-gray-300 leading-relaxed ' + (project.descriptionClass || '') + ' lang-text'"
                [class.lang-text-fading]="isChanging()"
              >
                {{ project.description }}
              </p>
            </header>

            <!-- Features -->
            @if (project.features && project.features.length > 0) {
              <div class="mb-8">
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 lang-text" [class.lang-text-fading]="isChanging()">
                  {{ lang() === 'es' ? 'Características' : 'Features' }}
                </h4>
                <ul class="space-y-2">
                  @for (feature of project.features; track feature) {
                    <li class="flex items-start text-gray-400 lang-text" [class.lang-text-fading]="isChanging()">
                      <span [class]="'mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-current ' + project.preColor"></span>
                      <span>{{ feature }}</span>
                    </li>
                  }
                </ul>
              </div>
            }

            <!-- Technologies -->
            @if (project.technologies && project.technologies.length > 0) {
              <div class="mb-8 flex flex-wrap gap-2">
                @for (tech of project.technologies; track tech) {
                  <span class="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 border border-gray-700 text-gray-300">
                    {{ tech }}
                  </span>
                }
              </div>
            }

            <!-- Actions -->
            <footer class="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-800">
              @if (project.githubUrl && !project.isRepoPrivate) {
                <a
                  [href]="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="lang-text flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-colors border border-gray-700 bg-gray-800 hover:bg-gray-700 text-white"
                  [class.lang-text-fading]="isChanging()"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                  {{ linkTexts().github }}
                </a>
              }
              @if (project.isRepoPrivate) {
                <span class="lang-text flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-gray-500 border border-gray-800 bg-gray-900 cursor-not-allowed" [class.lang-text-fading]="isChanging()">
                  <svg class="w-5 h-5 mr-2 opacity-60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                  {{ linkTexts().privateRepo }}
                </span>
              }
              @if (project.demoUrl) {
                <a
                  [href]="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  [class]="'lang-text flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-colors border bg-transparent hover:bg-white/5 ' + (project.linkClass || project.preColor + ' border-current')"
                  [class.lang-text-fading]="isChanging()"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  {{ linkTexts().demo }}
                </a>
              }
            </footer>
          </article>
        } @empty {
          <p class="text-gray-500 text-center py-20">No hay proyectos para mostrar.</p>
        }
      </div>
    </div>
  `,
})
export class ProjectsPage {
  private langService = inject(LanguageService);
  lang = this.langService.currentLang;
  isChanging = this.langService.isChanging;

  currentData = computed(() => projectsData[this.lang()]);
  projects = computed(() => this.currentData().projects);
  linkTexts = computed(() => this.currentData().links);
}
