import {Component, inject, OnInit} from '@angular/core';
import {CuentaService} from '../../services/cuenta.service';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solicitud-transferencia',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './solicitud-transferencia.component.html',
  styleUrl: './solicitud-transferencia.component.scss'
})
export class SolicitudTransferenciaComponent {
  _cuentaService = inject(CuentaService);

  solicitudTransferenciaForm: FormGroup;
  cuentasBancariasCliente: CuentaBancariaUsuario[] = [];

  constructor(
    readonly fb: FormBuilder,
    readonly router: Router
  ) {
    this.listarCuentasPorUsuario();
    this.solicitudTransferenciaForm = this.fb.group({
      monto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      cuentaOrigen: ['', [Validators.required]],
    });
  }

  listarCuentasPorUsuario(): void {
    this._cuentaService.obtenerCuentasPorUsuario()
      .subscribe({
        next: (data) => {
          this.cuentasBancariasCliente = data.data;
        },
        error: (err) => {
          console.error('Error al obtener las cuentas del usuario logueado', err)
        }
      })
  }

  onSubmit() {
    console.log("valor solicitud transferencia: ", this.solicitudTransferenciaForm.value);

    if (this.solicitudTransferenciaForm.invalid) {
      return;
    }

    const form = this.solicitudTransferenciaForm.value

    const solicitudTransferenciaRequest: ConfirmarTransferenciaRequest = {
      numeroCuentaOrigen: form.cuentaOrigen,
      numeroCuentaDestino: this._cuentaService.cuentaDestino()?.numeroCuenta,
      monto: form.monto,
      descripcion: form.descripcion,
    }

    this._cuentaService.procesarTransferencia(solicitudTransferenciaRequest)
      .subscribe({
        next: (data) => {
          console.log(data);
          this._cuentaService.transferencia.set(data.data);
          this.router.navigate(['/portal/transferencias/resumen-transferencia']);
        },
        error: (err) => {
          console.error('Error al procesar la transferencia', err)
        }
      });
  }

  onCancel(): void {
    this.router.navigate(['/portal/transferencias/nueva-transferencia']);
  }
}
