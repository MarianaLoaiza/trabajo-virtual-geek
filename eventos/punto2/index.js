
let nombres = document.querySelector('.nombre');
let boton = document.getElementById('btn');



boton.addEventListener('click', function() {
    let saludo = 'hola';
    let nombre = nombres.value;
    console.log(` ${saludo} ${nombre}`);
    
})