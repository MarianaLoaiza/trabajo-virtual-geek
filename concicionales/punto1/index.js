let userAvatar = document.getElementById('avatar');
const boton = document.getElementById('btn');

const contenedor = document.querySelector('.container');

const vacio = 'http://placehold.it/300x300';
var url = 'http://www.fillmurray.com/300/300';


boton.addEventListener('click', avatar);

function avatar(){
     if(userAvatar.value){
        contenedor.innerHTML = `<img src="${url}">`;
        console.log(userAvatar);
    }else{
        contenedor.innerHTML = `<img src="${vacio}">`;
         console.log(userAvatar.value);
     }
 }




