let edad = prompt('Ingrese la edad de su perro');

const año1 = 15;
const año2 = 9;
const restoAños = (edad-3)* 5;

let totalAños;

const mostrarEdadPerro = document.querySelector('.title');



if(edad == 1){
    mostrarEdadPerro.innerHTML = `La edad de su perro es de ${año1} años`
}else if(edad == 2){
    totalAños = año1 + año2;
    mostrarEdadPerro.innerHTML = `La edad de su perro es de ${totalAños} años`

}else if(edad >3){
    totalAños = restoAños +  año1 + año2;
    mostrarEdadPerro.innerHTML = `La edad de su perro es de ${totalAños} años`

}