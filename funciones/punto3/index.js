

const calculoIva = () => {

    var  valorIva = 0.21, precio = 500000;

    valorIva = precio * valorIva ;

    console.log(valorIva),

    totalPago(precio, valorIva);

    

}

const totalPago = (valor, totalIva) => {
    
    var pagoTotal;

    var pagoTotal  = valor + totalIva;
    console.log(`El iva es de:  ${totalIva}, el valor sin iva es de ${valor}, EL total a pagar es de ${pagoTotal}`);

    
}

calculoIva();

