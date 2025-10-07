import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then(m => m.CardPage)
  },
  {
    path: 'card-ver',
    loadComponent: () => import('./pages/card-ver/card-ver.page').then(m => m.CardVerPage)
  },
];
