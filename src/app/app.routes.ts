import { Route } from '@angular/router';
import { AuthGuard } from './auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'build',
    loadChildren: () =>
      import('modules/feature/build').then((c) => c.buildRoutes),
    canActivate: [AuthGuard],
  },
];
