let arr = ['Silvio (y los otros)', 'El vicio del poder', 'La favorita' ];

arr[arr.length]= 'Glass';

arr[0] = 'Velvet Buzzsaw';



arr.forEach((arrPeliculas) =>{
    document.write(`pelicula: ${arrPeliculas} <br>`);
})