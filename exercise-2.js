const input=document.querySelector('#input');
const buttonMinus = document.querySelector('#button-minus');
buttonMinus.addEventListener('click', event => {
            input.value--;
});
const buttonPlus = document.querySelector('#button-plus');
buttonPlus.addEventListener('click', event => {
            input.value++;
});
