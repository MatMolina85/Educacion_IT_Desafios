var cantidadDeGatos = prompt ( "EJERCICIO C. Ingrese la cantidad de gatos: ");
var cantidadDePasos = prompt ( "EJERCICIO C. Ingrese la cantidad de pasos: ");

for (i=1; i <= cantidadDeGatos; i++) {
    var gatos= (i % 2 === 1)? "🐈":"🐈⬛";
    var pasos = "";
   for(j=1; j<= cantidadDePasos;j++) {
    pasos += "🐾";
   }
    console.log ( "EJERCICIO C : Gato#" +(i)+ ": "+ gatos + pasos)
}
