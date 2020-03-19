
const plusOneButtonElement = document.querySelector('.button__add-one');
​
function handlePlusOneButton(event) {
  // Recogemos el elemento sobre el que pusimos el listener
  // y lo asignamos a una constante
  const buttonElement = event.currentTarget;
  buttonElement.innerHTML = parseInt(buttonElement.innerHTML) + 1;
}
​
plusOneButtonElement.addEventListener('click', handlePlusOneButton);