let obj ={
    firstName:'Mariana',
    lastName: 'Loaiza',
    age: 21,
    job: 'developer',

}

console.log(`Hola soy ${obj.firstName} ${obj.lastName}, tengo ${obj.age} y trabajo como ${obj.job}`);

obj.firstName = 'valery';
obj.age = obj.age + 1;

console.log(`Hola soy ${obj.firstName} ${obj.lastName}, tengo ${obj.age} y trabajo como ${obj.job}`);