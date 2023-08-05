var cantidadDeGatos = prompt ( "EJERCICIO B Ingrese la cantidad de gatos: ");
var cantidadDePasos = prompt ( "EJERCICIO B Ingrese la cantidad de pasos: ");

for (i=1; i <= cantidadDeGatos; i++) {
    var pasos = "";
   for(j=1; j<= cantidadDePasos;j++) {
    pasos += "🐾";
   }
    console.log ( "EJERCICIO B : Gato#" +(i)+ ": "+ "🐈"+ pasos)

}
