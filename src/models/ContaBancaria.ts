export class ContaBancaria {

  private _saldo: number;
  private _numero: string;
  private _agencia: string;

  constructor(){
    this._saldo = 0;
    this._numero = '00000-0';
    this._agencia = '00000-0';

  }

  get numero(): string {
   return this._numero
  }

  set numero(valor: string) {
    const regex = /^\d{5}-\d{1}$/
    if(regex.test(valor)) {
      this._numero = valor
    }else{
      console.log('Formato do numero e invalido')
    }
  }

  get agencia(): string {
    return this._agencia
   }
 
   set agencia(valor: string) {
     const regex = /^\d{5}-\d{1}$/
     if(regex.test(valor)) {
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
}