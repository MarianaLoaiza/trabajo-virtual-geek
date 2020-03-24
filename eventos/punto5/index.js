
const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

const quitar = document.querySelector('.favorite');


isra.addEventListener('click', () =>{
    
    isra.classList.add('teacher--selected');

    
  
    
})

tuerto.addEventListener('click', ()=> {

    
    tuerto.classList.add('teacher--selected');


   
   
})

nasi.addEventListener('click', ()=> {

    
    nasi.classList.add('teacher--selected');
   
   
})

quitar.addEventListener('click', ()=> {
let quita = "quitar"
    quitar.innerHTML =  quita;


})

