let confimarBorder = document.getElementById('confimarBorder-box');
let caja = document.getElementById('anchoBox');
let valorPadding = document.getElementById('valPadding');
let valorBorder = document.getElementById('mediasBorder');
let btn = document.getElementById('boton');

btn.addEventListener('click', function (){
    let confirmacionBorder = confimarBorder.value;
    let anchoCaja =parseInt(caja.value);
    let padding = parseInt(valorPadding.value);
    let border = parseInt(valorBorder.value);

        let totalCaja;

        


    if(confirmacionBorder == 'true' || confirmacionBorder === 'si'){

        totalCaja = anchoCaja +padding+border

    }else{

        totalCaja = anchoCaja;
    }
    console.log(`La dimension de un elemento es de : ${totalCaja} `)
})


