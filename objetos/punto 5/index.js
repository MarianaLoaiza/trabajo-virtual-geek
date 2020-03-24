const input = document.getElementById('input');

console.dir(input);

// value
// El valor inicial del control. Este atributo es opcional y permite definir el valor que se enviará por este elemento 
// 

// nodeName
// Devuelve el nombre del nodo actual, en forma de cadena.

// Un navegador web crea una representación interna del código HTML como un árbol de nodos 
// y a esto lo denominamos DOM (Document Object Model). 
// Los nodos se pueden clasificar en diferentes tipos, 
// dentro de los cuales los principales tipos son: document, element, text y “otros”.

// required HTML5
// Este atributo especifica que el usuario debe llenar el control antes de enviarlo al formulario.
//  No puede ser usado cuando el atributo type es hidden, image, o de tipo botón (submit, reset, o button).
//  Las pseudo-clases :optional y :required se aplicarán al campo según sea apropiado.