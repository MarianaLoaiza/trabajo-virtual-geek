const title = document.querySelector('.users');
let usuario = prompt('Ingrese el nombre');
let name = 'mariana';



if(usuario === name ){
    title.innerHTML = `Bienvenida ${usuario}`
}else{
    title.innerHTML = `Lo sineto ${usuario} no esta registrado`
}