const lista = document.querySelector('.list');
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Lura';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';


lista.innerHTML = `<img src="${thirdDogImage}"><h1> ${thirdDogName}</h1> 
<img src="${firstDogImage}"> <h1> ${firstDogName} </h1> 
<img src="${secondDogImage}"> <h1> ${secondDogName} </h1>`;