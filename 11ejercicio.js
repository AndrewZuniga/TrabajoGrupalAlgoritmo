//11. Pedir al usuario un número y mostrar si es mayor o menor que 10.
//analisis de requerimiento 
// entrada:numero=0(leer),evaluar(proceso)
// proceso:evaluar=numero 
//salida:mostrar mensaje
// Algoritmo
// declarar numero=0,evaluar=0
//    solicitar "ingrese su numero:"
//    leer numero
//  si (numero>10)
//      entonces"el numero es mayor que 10"
//  si no 
//      entonces"el numero es menor que 10"
// Fin Algoritmo
const read = require ("prompt-sync")();
const write = console.log 
function evaluar(){
    let numero=0,evaluar=0
    numero= parseFloat(read("ingrese el numero :"))
if (numero>10){
    console.log("el numero ingresado es mayor que 10.")
} 
else {
   console.log("el numero ingresado es menor que 10.")
}
}
evaluar()