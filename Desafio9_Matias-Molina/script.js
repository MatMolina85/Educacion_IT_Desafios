// Declaracion de variables

let display = document.getElementById('display');
let botonNumero = document.querySelectorAll('.numero');
let botonOperador = document.querySelectorAll('.operador');
let botonIgual = document.getElementById('igual');
let numeroActual = '';
let operador = '';
let result = 0;

// Zona de ejecucion 

botonNumero.forEach(function(button) {
  button.addEventListener('click', () => {
    let numero = button.textContent;
    ingresoNumero(numero);
  });
});

botonOperador.forEach((button) => {
  button.addEventListener('click', () => {
    let operador = button.textContent;
    ingresoOperador(operador);
  });
});

botonIgual.addEventListener('click', calculo);
display.addEventListener('click', borrarDisplay);

function ingresoNumero(numero) {
  if ( numeroActual.length < 13){
  numeroActual += numero;
  display.value = numeroActual;
  }
}

function ingresoOperador(op) {
  operador = op;
  result = Number(numeroActual);
  numeroActual = '';
}

function calculo() {
  let segundoNumero = Number(numeroActual);
  switch (operador) {
    case '+':
      result += segundoNumero;
      break;
    case '-':
      result -= segundoNumero;
      break;
    case 'x':
      result *= segundoNumero;
      break;
    case '/':
      result /= segundoNumero;
      break;
  }
  display.value = result.toFixed(2);
  numeroActual = String(result);
  operador = '';
}

function borrarDisplay() {
  display.value = 0;
  numeroActual = '';
  operador = '';
  result = 0;
}