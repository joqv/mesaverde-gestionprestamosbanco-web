import { Routes } from '@angular/router';
import {PortalLayout} from './layouts/components/portal-layout/portal-layout';
import {AuthGuard} from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PortalLayout,
    canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'portal'},
      {
        path: 'portal',
        loadChildren: () => import('./features/transacciones/transacciones.routes').then(m => m.PORTAL_ROUTES)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/authentication/authentication.routes').then(m => m.AUTH_ROUTES)
  },
  {path: '**', redirectTo: ''}
];
