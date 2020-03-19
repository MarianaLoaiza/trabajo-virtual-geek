
let num1=3, num2= 89, num3=34, num4=9;

const suma = () => {

    let TotalSuma;

    TotalSuma= num1 + num2 + num3 + num4;

    console.log(TotalSuma);

   media(TotalSuma);

}

const media = (sumar) =>{
    const cantidadNumeros = 4;
    let totalMedia;

    totalMedia = sumar / cantidadNumeros;

    console.log(totalMedia);

    
}

suma();
media();

// const sumResult = sum(3, 4);