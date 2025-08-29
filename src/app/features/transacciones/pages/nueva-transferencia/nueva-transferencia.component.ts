import {Component, inject} from '@angular/core';
import {CuentaService} from '../../services/cuenta.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nueva-transferencia',
  imports: [ReactiveFormsModule],
  templateUrl: './nueva-transferencia.component.html',
  styleUrl: './nueva-transferencia.component.scss'
})
export class NuevaTransferenciaComponent {

  private readonly _cuentaService = inject(CuentaService);

  nuevaTransferenciaForm: FormGroup;

  constructor(
    readonly fb: FormBuilder,
    readonly router: Router,
  ) {

    this.nuevaTransferenciaForm = this.fb.group({
      numeroCuentaDestino: ['', Validators.required]
    })

  }

  onSubmit() {

    console.log("valor nueva transferencia: ", this.nuevaTransferenciaForm.value);

    if (this.nuevaTransferenciaForm.invalid) {
      return;
    }

    this._cuentaService.obtenerCuentaDestino(this.nuevaTransferenciaForm.value)
      .subscribe({
        next: (data) => {
          console.log(data);
          this._cuentaService.cuentaDestino.set(data.data);
          console.log("nombre completo: ", this._cuentaService.cuentaDestino())
          this.router.navigate(['/portal/transferencias/solicitud-transferencia']);
        },
        error: (err) => {
          console.error('Error al obtener la cuenta destino', err)
        }
      });
  }

  onCancel(): void {
    this.router.navigate(['/portal/transferencias']);
  }
}
