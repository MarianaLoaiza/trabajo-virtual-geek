
const lista = document.querySelector('.list');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


const btn = document.getElementById('boton');
  


btn.addEventListener('click', ()=> {

  let listaPeliculas=  
  `<li id="peliUno">${inception}</li>
    <li id="peliDos">${theButterFlyEffect}</li>
    <li id="peliTres">${eternalSunshineOfTheSM}</li>
    <li id="peliCuatro">${blueVelvet}</li>
    <li id="peliCinco">${split}</li>`;
  
  


  // peliculaUno.addEventListener('mouseover', hola);
  
  lista.innerHTML = lista.innerHTML + listaPeliculas;


  let peliculaUno = document.querySelector('#peliUno');
  let peluculaDos = document.querySelector('#peliDos');
  let peliculaTres = document.querySelector('#peliTres');
  let peliculaCuatro = document.querySelector('#peliCuatro');
  let peliculaCinco = document.querySelector('#peliCinco');


 
  peliculaUno.addEventListener('click', EventoPeliculas );
  peluculaDos.addEventListener('click', EventoPeliculas );
  peliculaTres.addEventListener('click', EventoPeliculas );
  peliculaCuatro.addEventListener('click', EventoPeliculas );
  peliculaCinco.addEventListener('click', EventoPeliculas );



});

const EventoPeliculas = (e) => {

  if(e.target.id = 'peliUno'){

    alert(`Estas a punto de ver ${inception}`);

 }else if(e.target.id = 'peliDos'){

  alert(`Estas a punto de ver ${theButterFlyEffect}`);

 }else if(e.target.id = 'peliTres') {

  alert(`Estas a punto de ver ${eternalSunshineOfTheSM}`);

 }else if(e.target.id = 'peliCuatro'){

  alert(`Estas a punto de ver ${blueVelvet}`);

 }else if(e.target.id = 'peliCinco'){

  alert(`Estas a punto de ver ${split}`);

 }
}



