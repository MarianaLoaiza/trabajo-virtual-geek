let arr = [1,2,8,4,5];
let acomulador = 0 ;


arr.forEach(promedio =>{
    
    
    acomulador += acomulador + promedio;

    
})


let media = acomulador /5
document.write(`La media del primer array es de : ${media}   `);

////////////////////////////////////////////////////////////

let arrDos = [4,6,7,4,5,7];
let acomuladorDOs = 0 ;

const numbers = (arr_dos) =>{

    arr_dos.forEach(promedio =>{
    
    
        acomuladorDOs += acomuladorDOs + promedio;
    
        
    })

    let mediaSegundArr = acomuladorDOs / 6;
    document.write(`La media del segundo array es de : ${mediaSegundArr}`);
}




numbers(arrDos)