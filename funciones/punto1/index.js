let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
const btn = document.getElementById('boton');

btn.addEventListener('click', multiplica );

function multiplica(){
     let total =num1.value * num2.value; 
    console.log(total);
}