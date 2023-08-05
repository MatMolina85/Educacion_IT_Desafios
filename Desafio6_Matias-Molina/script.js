

var cantidadDeGatos  = prompt ('EJERCICIO A. Ingrese la cantidad de gatos: ');

for (i = 1 ; i <= cantidadDeGatos; i++) {
    var gatos = (i % 3 === 1)?'😺':(i % 3 === 2)?'😸':'😹';
    console.log ("EJERCICIO A : Gato#"+ (i) +": " + gatos);
}







