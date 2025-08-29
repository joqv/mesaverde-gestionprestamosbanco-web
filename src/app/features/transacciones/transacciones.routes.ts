import {Routes} from '@angular/router';
import {PortalHome} from './pages/portal-home/portal-home';


export const PORTAL_ROUTES: Routes = [
  {
    path: '',
    component: PortalHome
  },
  {
    path: 'transferencias',
    loadChildren: () => import('./pages/transferencias.routes').then(t => t.TRANSFERENCIA_ROUTES)
  }
];

export default PORTAL_ROUTES;
