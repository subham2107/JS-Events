    const input=document.querySelector('#some-input');
    const output=document.querySelector('#some-output');

    const buttonEncode = document.querySelector('#button-encode');
    buttonEncode.addEventListener('click', event => {
            output.value=encodeURIComponent(input.value);
    });
    const buttonDecode = document.querySelector('#button-decode');
    buttonDecode.addEventListener('click', event => {
            output.value=decodeURIComponent(input.value);
    });
