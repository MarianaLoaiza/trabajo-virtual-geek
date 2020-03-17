let valorCuenta = 128;
let chupitoShake = 2;
const personas = 9;

let totalCuenta = valorCuenta - chupitoShake;

let cuentaIndividual =  totalCuenta / 9;

let cuentaAnita = cuentaIndividual + chupitoShake;

let total =  (cuentaIndividual *8) + cuentaAnita;

console.log(`Cada persona debe pagar ${cuentaIndividual} sin incluir a inita`);
console.log(`Anita debe pagar ${cuentaAnita}`);
console.log(`para un toal de ${total}`)