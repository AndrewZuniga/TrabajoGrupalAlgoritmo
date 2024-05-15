//12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad. 
// analisis de requerimiento
// entrada:edad=0(leer),evaluar(proceso)
// proceso:evaluar=edad
// salida:mostrar resultado
// Algoritmo
// Declarar edad=0,evaluar=0
//    solicitar "ingrese su edad :"
// si (edad=>18)
//  entonces("Este joven es mayor de edad.")
// sino
//   entonces("este joven es menor de edad.")
//   finsi
// Fin de Algoritmo
const read = require ("prompt-sync")();
const write = console.log 
function mayordeedad(){
    let edad=0,evaluar=0
 edad=parseFloat(read("Porfavor ingrese su edad :"))
 if(edad>18){
    console.log("usted ya es mayor de edad.")
 }
 else{
    console.log("usted es menor de edad.")
 }
}
mayordeedad()