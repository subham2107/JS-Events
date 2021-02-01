const input=document.querySelector('#input');
const box=document.querySelector('#box');
input.addEventListener('input', event => {
box.style.backgroundColor=input.value;      
});

