let year = document.getElementById('edad');
const button = document.getElementById('btn');

button.addEventListener('click', calcularEdad);


function calcularEdad(){
let edad = year.value;
const horas = 8760;
let horasVividas =edad * horas;


console.log(`Usted a vivido ${horasVividas} horas`);
}