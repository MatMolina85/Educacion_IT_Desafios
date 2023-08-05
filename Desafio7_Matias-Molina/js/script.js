var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var contenedor = document.getElementById("contenedor");
var caja = document.getElementById("caja");
var gatosSeguidos = 0;
var cajasAcumuladas = 0;
var ultimaCara = "";

boton1.onclick = function() {
  mostrarCara("🐱"); 
};

boton2.onclick = function() {
  mostrarCara("😸");
};

boton3.onclick = function() {
  mostrarCara("😹"); 
};

function mostrarCara(cara) {
  if (cara === ultimaCara) {
    gatosSeguidos++;

    if (gatosSeguidos === 5) {
      guardarEnCaja();
      resetearContador();
      contenedor.innerHTML = "";
    }
  } else {
    gatosSeguidos = 0;
    ultimaCara = cara;
  }
  contenedor.innerHTML += cara;
}

function guardarEnCaja() {
  cajasAcumuladas++;
  caja.innerHTML = "⬛".repeat(cajasAcumuladas);
}

function resetearContador() {
  gatosSeguidos = 0;
}

