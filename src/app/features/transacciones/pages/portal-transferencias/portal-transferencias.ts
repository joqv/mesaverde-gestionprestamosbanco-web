import {Component, inject, OnInit} from '@angular/core';
import {CuentaService} from '../../services/cuenta.service';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-portal-transferencias',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './portal-transferencias.html',
  styleUrl: './portal-transferencias.scss'
})
export class PortalTransferencias {

  cuentaService = inject(CuentaService);
  router = inject(Router);

  onCancel(): void {
    this.router.navigate(['/portal']);
  }
}
