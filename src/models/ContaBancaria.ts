export class ContaBancaria {

  private _saldo: number;

  constructor(){
    this._saldo = 0;
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