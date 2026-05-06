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
        path: 'details',
        loadComponent: ()=> import('./pages/detail-page/detail-page')
      },
      {
        path: 'itinerary',
        loadComponent: ()=> import('./pages/itinerary-page/itinerary-page')
      },
      {
        path: 'gallery',
        loadComponent: ()=> import('./pages/gallery-page/gallery-page')
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
