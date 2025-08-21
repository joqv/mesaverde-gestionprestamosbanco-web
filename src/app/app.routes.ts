import { Routes } from '@angular/router';
import {PortalLayout} from './layouts/components/portal-layout/portal-layout';
import {PortalHome} from './features/transacciones/pages/portal-home/portal-home';
import {AuthGuard} from './core/auth/guards/auth.guard';
import { Login } from './features/authentication/componentes/login/login';

export const routes: Routes = [
  {
    path: "portal",
    component: PortalLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PortalHome
      }
    ]
  },
  {path: 'login', component: Login}
];
