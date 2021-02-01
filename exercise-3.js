    const input=document.querySelector('#input');
    const output=document.querySelector('#output');

    const buttonEncode = document.querySelector('#button-encode');
    buttonEncode.addEventListener('click', event => {
            output.value=encodeURIComponent(input.value);
    });
    const buttonDecode = document.querySelector('#button-decode');
    buttonDecode.addEventListener('click', event => {
            output.value=decodeURIComponent(input.value);
    });
