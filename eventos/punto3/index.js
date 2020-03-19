let parrafo  = document.querySelector('.paragraph');

parrafo.addEventListener('mouseover', function(){
    let paragraphNew = '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat recusandae mollitia voluptatibus, sunt veniam autem nisi eligendi est, deleniti ipsa cum similique, voluptate sed facilis officiis sint adipisci praesentium';

    parrafo.innerHTML = paragraphNew;
})