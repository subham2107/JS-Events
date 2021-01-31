const output=document.querySelector('#some-output');
const inputField = document.querySelector('#some-input');
inputField.addEventListener('input', event => {
output.innerHTML=inputField.value.length;       
});

