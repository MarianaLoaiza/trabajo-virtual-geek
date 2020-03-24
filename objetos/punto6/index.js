let btnAumentar = document.getElementById('btn_aumentar');
let btnDisminuir = document.getElementById('btn_disminuir');


let contador={
    valorInicial: 0,
    valorMaximo: 50,
    valorActual:0,
    valorMinimo:0,
    aumentarValor: 1,
    disminuirvalor: 1,

}



btnAumentar.addEventListener('click', (e) => {
    if(contador.valorActual < contador.valorMaximo){
        contador.aumentarValor  = 1;
        contador.valorActual = contador.valorActual+ contador.aumentarValor;

        console.log(contador.valorActual);
    }
})

btnDisminuir.addEventListener('click', (e) => {
    if(contador.valorActual <= contador.valorMaximo){
        contador.disminuirvalor  = 1;
        contador.valorActual = contador.valorActual - contador.disminuirvalor;

        console.log(contador.valorActual);
    }
})


