// --------------Zona de declaracion---------------//



let zona1 = document.querySelectorAll('input')[0];
let zona2 = document.querySelectorAll('input')[1];
let zona3 = document.querySelectorAll('input')[2];
let div1 = document.querySelectorAll('div')[0];
let div2 = document.querySelectorAll('div')[1];
let div3 = document.querySelectorAll('div')[2];


// Se genera la cancelacion de eventos por fuera de los Div //


['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event => {
    document.addEventListener(event, e => e.preventDefault());
});



//  -----------------Zona de funciones -----------------//


function cargarFile(input, div) {
    input.addEventListener('change', () => {

    const valorInput = input;

    const imagen = input.files[0].name;
    console.log(imagen);

    cargarImagen(imagen, div);

    div.addEventListener('click', ()=>{
        valorInput.click();
    })


});
}



function cargarImagen(imagen, div) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', imagen + '?' + Date.now());
    xhr.responseType = 'blob';
    xhr.addEventListener('load', () => {
    if (xhr.status == 200) {
        let imagenBlob = xhr.response;
        console.log(imagenBlob);
        const url = URL.createObjectURL(imagenBlob);
        console.log(url);

        div.innerHTML = '<img src="' + url + '" alt="">';

    }
});
    xhr.send();
}

function dropImage(div) {
    div.addEventListener('drop', e => {
    e.preventDefault();
    console.log('Solté el recurso en la zona de drop');

    const imagen = e.dataTransfer.files[0].name;
    console.log(imagen);

    cargarImagen(imagen, div);
});
}



dropImage(div1);
dropImage(div2);
dropImage(div3);

cargarFile(zona1, div1);
cargarFile(zona2, div2);
cargarFile(zona3, div3);
