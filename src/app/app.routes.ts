import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('modules/feature/login').then((c) => c.loginRoutes),
  },
  {
    path: 'decks',
    loadChildren: () =>
      import('modules/feature/decks').then((c) => c.decksRoutes),
  },
  {
    path: 'build',
    loadChildren: () =>
      import('modules/feature/build').then((c) => c.buildRoutes),
  },
];
