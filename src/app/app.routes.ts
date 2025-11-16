import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me-page/about-me-page').then((m) => m.AboutMePage),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog-page/blog-page').then((m) => m.BlogPage),
  },
];
