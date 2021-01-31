const input=document.querySelector('#some-input');
const box=document.querySelector('#box');
input.addEventListener('input', event => {
box.style.backgroundColor=input.value;      
});

