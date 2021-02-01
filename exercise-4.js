const output=document.querySelector('#output');
const inputField = document.querySelector('#input');
inputField.addEventListener('input', event => {
output.innerHTML=inputField.value.length;       
});

