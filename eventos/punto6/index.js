
const bakground = document.getElementById('color');
const bakgroundR = document.getElementsByClassName('r');
const bakgroundM = document.getElementsByClassName('m');

console.log('dcnsjkdcnjsd');


const letter = {
    m:77,
    r:82,
}

document.addEventListener('keyup', (e) =>{
    
    if(e.keyCode === letter.m){

        bakground.classList.remove('r'); 
         bakground.classList.add('m'); 

        console.log('m');

    }else if(e.keyCode === letter.r ){
        bakground.classList.remove('m'); 
        bakground.classList.add('r'); 

        console.log('r');
    }
})



