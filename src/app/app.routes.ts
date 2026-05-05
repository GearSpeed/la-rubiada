import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: ()=> import('./pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'hero',
        loadComponent: ()=> import('./pages/hero-page/hero-page')
      },
      {
        path: '**',
        redirectTo: 'hero'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
