import { ContaBancaria } from "./models/contaBancaria";

const conta1 = new ContaBancaria();
let saldoAtual: number = conta1.consultar();
console.log('Saldo inicial: ' + saldoAtual);

//
conta1.depositar(50);
saldoAtual= conta1.consultar();
console.log('Saldo atual: ' + saldoAtual);

conta1.depositar(120);
saldoAtual= conta1.consultar();
console.log('Saldo atual: ' + saldoAtual);

conta1.depositar(170);
saldoAtual= conta1.consultar();
console.log('Saldo atual: ' + saldoAtual);

//
conta1.sacar(200);
saldoAtual= conta1.consultar();
console.log('Saldo atual: ' + saldoAtual);

conta1.sacar(50);
saldoAtual= conta1.consultar();
console.log('Saldo atual: ' + saldoAtual);

conta1.sacar(1000);
