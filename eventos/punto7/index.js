const lista = document.querySelector('.list');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const btn = document.getElementById('boton'); 



  


let peliculaUno = document.querySelector('#peliUno');
let peluculaDos = document.querySelector('#peliDos');
let peliculaTres = document.querySelector('#peliTres');
let peliculaCuatro = document.querySelector('#peliCuatro');
let peliculaCinco = document.querySelector('#peliCinco');







btn.addEventListener('click', (e)=> {

  e.preventDefault();

  let listaPeliculas=  
  `<li id="peliUno">${inception}</li>
    <li id="peliDos">${theButterFlyEffect}</li>
    <li id="peliTres">${eternalSunshineOfTheSM}</li>
    <li id="peliCuatro">${blueVelvet}</li>
    <li id="peliCinco">${split}</li>`;
  
  lista.innerHTML = lista.innerHTML + listaPeliculas;
 

});



lista.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log(e.target.id);

  switch (e.target.id) {
    case 'peliUno':
      alert(`Estas a punto de ve ${inception}`);
      
      break;

    case 'peliDos':
      alert(`Estas a punto de ve ${theButterFlyEffect}`);
        
      break;  
    
    case 'peliTres':
      alert(`Estas a punto de ve ${eternalSunshineOfTheSM}`);
        
      break;
        
    case 'peliCuatro':
      alert(`Estas a punto de ve ${blueVelvet}`);
          
      break; 

    case 'peliCuatro':
      alert(`Estas a punto de ve ${blueVelvet}`);
            
      break; 

      case 'peliCinco':
        alert(`Estas a punto de ve ${split}`);
              
        break;            
  
    default: console.log('Intentelo de nuevo')
      break;
  }
});
