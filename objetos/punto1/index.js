let estudiante = { 
    nombre: ['Susana', 'Rocio'],
    edad: [34, 25],
    carrera: ['periodista', 'Actriz'],
    

    
}

estudiante.run = (num) =>{
    document.write(`Esoy corriendo una maraton de ${num} kilometros`)
}

estudiante.run(50);

let mostrarSusana = `hola mi nombre es ${estudiante["nombre"][0]}, y tengo ${estudiante["edad"][0]}, y soy ${estudiante["carrera"][0]} `;
let mostrarRocio = `hola mi nombre es ${estudiante["nombre"][1]}, y tengo ${estudiante["edad"][1]}, y soy ${estudiante["carrera"][1]} `;

document.write(mostrarRocio);
document.write(mostrarSusana);
console.log()


  