import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CuentaService} from '../../../features/transacciones/services/cuenta.service';

@Component({
  selector: 'app-portal-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './portal-layout.html',
  styleUrl: './portal-layout.scss'
})
export class PortalLayout {
  cuentaService = inject(CuentaService);
}
