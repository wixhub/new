import { Routes } from '@angular/router';
import { Charts } from './features/charts/charts';
import { Powered } from './features/powered/powered';

export const routes: Routes = [
  // Redirect root path to /dashboard
  { path: '', redirectTo: '/charts', pathMatch: 'full' },

  { path: 'charts', component: Charts },

  { path: 'powered', component: Powered },

  // Wildcard route to handle 404s by redirecting to home
  { path: '**', redirectTo: '/charts', pathMatch: 'full' },
];
