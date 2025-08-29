import {Component, inject} from '@angular/core';
import {CuentaService} from '../../services/cuenta.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resumen-transferencia',
  imports: [],
  templateUrl: './resumen-transferencia.component.html',
  styleUrl: './resumen-transferencia.component.scss'
})
export class ResumenTransferenciaComponent {
  _cuentaService = inject(CuentaService);
  router = inject(Router)

  onPortal(): void {
    this.router.navigate(['/portal']);
  }

  onNuevaTransferencia(): void {
    this.router.navigate(['/portal/transferencias/nueva-transferencia']);
  }
}
