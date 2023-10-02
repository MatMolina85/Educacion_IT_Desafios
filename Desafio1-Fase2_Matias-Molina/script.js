var avanzar = document.querySelectorAll('button')[0];
var retroceder = document.querySelectorAll('button')[1];
var cartel = document.querySelectorAll('h2')[1];
var principal = document.querySelector('main')


let colores = [ 'red', 'green','blue','black'];

let contador= 1 ;


const cambiarColor = (color) => {
    principal.style.backgroundColor = color[contador];
    cartel.style.color = 'white'
    cartel.innerHTML = color[contador].toUpperCase() 
};

const sumarColor = (listas) => {
    nuevo = prompt('Ingrese nuevo color')
    listas.push(nuevo)
}

avanzar.addEventListener('click', () => {
    contador = (contador + 1 ) % colores.length;
    cambiarColor(colores)
   
})

var nvoColor = document.createElement( 'button');
nvoColor.id = 'nvocolor';
nvoColor.innerText = 'Agregar Color';
document.body.appendChild (nvoColor);

nvoColor.addEventListener('click', () => {
    sumarColor(colores)
})


retroceder.addEventListener('click', () => {
    contador = (contador - 1 + colores.length) % colores.length;
    cambiarColor(colores)

})

