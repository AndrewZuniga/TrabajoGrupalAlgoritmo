//14. Solicitar al usuario un número y mostrar si es positivo o negativo. 
//Analisis de requerimiento
//Entrada:numero=0(leer),mostrar
//Proceso:mostrar=numero
//Salida: mostrar
// Algoritmo
//Declarar numero=0,mostrar
//  solicitar "ingrese un numero"
// leer numero
// si (numero>0)
//  entonces "el numero es positivo"
// si no 
//   entonces "el numero es negativo"
// mostrar mensaje
// Fin de Algoritmo
const read = require ("prompt-sync")();
const write = console.log 
function positivo(){
  let numero=0,mostrar
  numero = parseFloat(read("ingrese un numero :"))
if (numero>0){
    console.log("el numero es positivo .")
}
else{
    console.log("el numero es negativo .")
}
}
positivo()