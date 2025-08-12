import { Routes } from '@angular/router';
import {PortalLayout} from './layouts/components/portal-layout/portal-layout';
import {PortalHome} from './features/transacciones/pages/portal-home/portal-home';

export const routes: Routes = [
  {
    path: "portal",
    component: PortalLayout,
    children: [
      {
        path: '',
        component: PortalHome
      }
    ]
  }
];
