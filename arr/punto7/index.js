let peliculaFavorita1 = document.getElementById('peliculaUno');
let peliculaFavorita2 = document.getElementById('peliculaDos');
let submit = document.getElementById('btn');

submit.addEventListener('click', () => {
let peliculaUno = peliculaFavorita1.value;
let peliculaDos = peliculaFavorita2.value;
    
    let arr = [];

    arr[arr.length] = peliculaUno;
    arr[arr.length] = peliculaDos;

    console.log(arr);

    iterar(arr);

})


const iterar = (arreglo) => {
    for(const e of arreglo){
        document.write(` A mí también me encantó ${e}! Tenemos mucho en común, humana.<br> `)
    }
}