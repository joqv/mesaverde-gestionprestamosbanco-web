import {Routes} from '@angular/router';
import {PortalTransferencias} from './portal-transferencias/portal-transferencias';
import {NuevaTransferenciaComponent} from './nueva-transferencia/nueva-transferencia.component';
import {SolicitudTransferenciaComponent} from './solicitud-transferencia/solicitud-transferencia.component';
import {ResumenTransferenciaComponent} from './resumen-transferencia/resumen-transferencia.component';

export const TRANSFERENCIA_ROUTES: Routes = [
  {
    path: '',
    component: PortalTransferencias
  },
  {
    path: 'nueva-transferencia', component: NuevaTransferenciaComponent
  },
  {
    path: 'solicitud-transferencia', component: SolicitudTransferenciaComponent
  },
  {
    path: 'resumen-transferencia', component: ResumenTransferenciaComponent
  },
  {
    path: '', redirectTo: 'nueva-transferencia', pathMatch: 'full'
  }
]
