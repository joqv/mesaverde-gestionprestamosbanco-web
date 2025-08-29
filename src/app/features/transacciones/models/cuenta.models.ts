interface NuevaTransferenciaRequest {
  numeroCuentaDestino: string;
}

interface CuentaDestino {
  nombreCompleto: string,
  numeroCuenta: string,
  moneda: string,
  saldoActual: string;
}

interface NuevaTransferenciaResponse {
  data: CuentaDestino;
}

interface CuentaBancariaUsuario {
  "id": number,
  "simboloMoneda": string,
  "numeroCuenta": string,
  "saldo": number
}

interface CuentaBancariaUsuarioResponse {
  data: CuentaBancariaUsuario[]
}

interface ConfirmarTransferenciaRequest {
  "numeroCuentaOrigen": string,
  "numeroCuentaDestino"?: string,
  "monto": number,
  "descripcion": string
}

interface TransferenciaExitosa {
  "numeroCuentaOrigen": string,
  "nombreMonedaOrigen": string,
  "nombreCompletoOrigen": string,
  "numeroCuentaDestino": string,
  "nombreMonedaDestino": string,
  "nombreCompletoDestino": string,
  "simboloMoneda": string,
  "monto": number,
  "descripcion": string,
  "numeroTransaccion": number,
  "fechaHora": string
}

interface ConfirmarTransferenciaResponse {
  data: TransferenciaExitosa
}

