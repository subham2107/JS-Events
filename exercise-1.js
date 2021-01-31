const button = document.querySelector('#some-button');
button.addEventListener('click', event => {
event.target.value++;
});
