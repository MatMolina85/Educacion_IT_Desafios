window.onload = function() {
    console.log("Contenido del DOM cargado");
  
    var textarea = document.getElementById("origen");
    textarea.value =  "Este contenido está listo para ser editado y pasarlo abajo.";
    var listaItems = document.getElementsByTagName("li");
    textarea.addEventListener("input", function() {
      var inputs = document.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
      }
      var btnFalta = document.querySelector("button[disabled]");
      btnFalta.disabled = false;
      textarea.value = " "
    });
  
    var btnReemplazar = document.getElementById("btn-reemplazar");
    btnReemplazar.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      destino.innerHTML = textarea.value;
      listaItems[5].innerHTML = "[Ok] " + listaItems[5].innerHTML;
    });
  
    var btnAgregar = document.querySelector(".btn-agregar");
    btnAgregar.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      destino.innerHTML += textarea.value;
      listaItems[6].innerHTML = "[Ok] " + listaItems[6].innerHTML;
    });
  
    var btnAgregar5Veces = document.querySelectorAll(".btn-agregar")[1];
    btnAgregar5Veces.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      for (let i = 0; i < 5; i++) {
        destino.innerHTML += textarea.value;
      }
      listaItems[7].innerHTML = "[Ok] " + listaItems[7].innerHTML;
    });
  
    var btnAgregar10Veces = document.querySelectorAll(".btn-agregar")[2];
    btnAgregar10Veces.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      for (let i = 0; i < 10; i++) {
        destino.innerHTML += textarea.value;
      }
      listaItems[8].innerHTML = "[Ok] " + listaItems[8].innerHTML;
    
    });
  
    var btnAgregarNVeces = document.querySelectorAll(".btn-agregar")[3];
    btnAgregarNVeces.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      var cantidad = prompt("Ingrese la cantidad de veces a agregar:");
      for (let i = 0; i < cantidad; i++) {
        destino.innerHTML += textarea.value;
      }
      listaItems[9].innerHTML = "[Ok] " + listaItems[9].innerHTML;;
    });
  
    var btnVaciar = document.querySelector(".btn-vaciar");
    btnVaciar.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      destino.innerHTML = " ";
      textarea.value = " "
      listaItems[11].innerHTML = "[Ok] " + listaItems[11].innerHTML;
    });
  
    var btnConvertirMayusculas = document.querySelector(".btn-convertir-a-mayusculas");
    btnConvertirMayusculas.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      destino.innerHTML = destino.innerHTML.toUpperCase();
      listaItems[12].innerHTML = "[Ok] " + listaItems[12].innerHTML;
    });
  
    var btnConvertirMinusculas = document.querySelector("button[disabled]");
    btnConvertirMinusculas.addEventListener("click", function() {
      var destino = document.getElementById("destino");
      destino.innerHTML = destino.innerHTML.toLowerCase();
      listaItems[13].innerHTML = "[Ok] " + listaItems[13].innerHTML;
    });
    
  
  };