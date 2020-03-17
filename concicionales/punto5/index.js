'use strict';
let password = prompt('ingrese la contraseña');

let contraseña = "123456";
const activableSection=document.querySelector('div');

// Si contiene la clase .success
if (password === contraseña ) {
    if(activableSection.classList.contains('success')){
        activableSection.innerHTML='<h1>CORRECTO</h1><p>Los datos son correctos</p>';
    }
    
}else if (password == contraseña) { // Sino
    activableSection.classList.remove('success');
    activableSection.classList.add('warning');
    activableSection.innerHTML='<h1>AVISO</h1><p>Tenga cuidado</p>';

} else { // Sino
    activableSection.classList.remove('success');
    activableSection.classList.add('error');
    activableSection.innerHTML='<h1>ERROR</h1><p>Ha surgido un error</p>';
 }
