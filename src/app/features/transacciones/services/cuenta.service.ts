import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environment/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  readonly _httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;
  cuentaDestino = signal<CuentaDestino | null>(null);
  cuentasOrigen = signal<CuentaBancariaUsuario[] | null>(null)
  transferencia = signal<TransferenciaExitosa | null>(null)

  obtenerCuentaDestino(request: any): Observable<NuevaTransferenciaResponse> {
    return this._httpClient.post<NuevaTransferenciaResponse>(`${this.baseUrl}/api/v1/cuentas/nueva-transferencia`, request);
  }

  obtenerCuentasPorUsuario(): Observable<any> {
    return this._httpClient.get<CuentaBancariaUsuarioResponse>(`${this.baseUrl}/api/v1/cuentas/cuentas-bancarias-usuario`);
  }

  procesarTransferencia(request: ConfirmarTransferenciaRequest): Observable<any> {
    return this._httpClient.post<ConfirmarTransferenciaRequest>(`${this.baseUrl}/api/v1/cuentas/confirmar-transferencia`, request)
  }
}
