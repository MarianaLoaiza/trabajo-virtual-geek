let saludar = document.querySelector('.saludo');
let boton = document.getElementById('btn');

boton.addEventListener('click', function(){
    
    saludar.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!'
});
