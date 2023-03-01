export class ContaBancaria {

  private _saldo: number;
  private _numero: string;
  private _agencia: string;

  constructor(numero?: string, agencia?: string){
    this._saldo = 0;
    this._numero = this._validarNumero(numero!) ? numero!: '00000-0';
    this._agencia = this._validarAgencia(agencia!) ? agencia!: '0000-0';

  }

  get numero(): string {
   return this._numero
  }

  set numero(valor: string) {
    if(this._validarNumero(valor)) {
      this._numero = valor
    }else{
      console.log('Formato do numero e invalido')
    }
  }

  get agencia(): string {
    return this._agencia
   }
 
   set agencia(valor: string) {
     if(this._validarAgencia(valor)) {
       this._agencia = valor
     }else{
       console.log('Formato do numero e invalido')
     }
   }

  consultar(): number{
    return this._saldo;
  }

  depositar(valor: number): void {
    if(valor >=0) {
      this._saldo += valor;
    }else{
      console.log('Digite um valor valido');
    }
  }

  sacar(valor: number): void {
    if(valor >= 0 && valor <= this._saldo) {
      this._saldo -= valor;
    }else{
      console.log('Digite um valor valido');
    }
  }

  private _validarNumero(numero: string): boolean {
    const regex = /^\d{5}-\d{1}$/
    if(regex.test(numero)) {
      this._numero = numero
      return true
  }
  return false
}

private _validarAgencia(agencia: string): boolean {
  const regex = /^\d{4}-\d{1}$/
  if(regex.test(agencia)) {
    this._agencia = agencia
    return true
}
return false
}

}