import { Routes } from '@angular/router';
import {PortalLayout} from './layouts/components/portal-layout/portal-layout';
import {PortalHome} from './features/transacciones/pages/portal-home/portal-home';
import {AuthGuard} from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PortalLayout,
    canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'portal'},
      {path: 'portal', component: PortalHome}
      //{path: 'empleado', component: EmpleadoComponent},
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/authentication/authentication.routes').then(m => m.AUTH_ROUTES)
  },
  {path: '**', redirectTo: ''}
];
