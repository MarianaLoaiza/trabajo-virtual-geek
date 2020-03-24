const mostrarTexto = document.getElementById('solucion');

let arr = ["A-tisket a-tasket A green and yellow basket",
            "Peter Piper picked a peck of pickled peppers", 
            "Absolutely Longer"]

              

 const tamaño = (cadena, numero) => 
 cadena.length > numero ?  document.write(cadena.slice(0, numero)+"... <br>" ) : document.write(cadena);

tamaño(arr[0], 8);
tamaño(arr[1],11);
tamaño(arr[2], 2);
