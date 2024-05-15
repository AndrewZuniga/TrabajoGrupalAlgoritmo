//8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar sies positivo par o impar múltiplo de 7.
// analisis de requerimiento 
//Entrada:numero=0(leer),mostrar(proceso)
//proceso:Si el número es < -20
//         entonces: "El número es negativo y menor que 20".
// Si no, 
//         entonces: "El número es positivo y par".
// Si el número es positivo e impar y múltiplo de 7
//       entonces "El número es positivo, impar y múltiplo de 7".
// Si el número es positivo e impar pero no múltiplo de 7
//       entonces "El número es positivo, impar pero no múltiplo de 7".
//salida: mostrar el resultado
// Algoritmo
//   declarar numero=,mostrar=0
//     Escribir "ingrese su numero"
//     leer numero
//Si el número es < -20
//         entonces: "El número es negativo y menor que -20".
// Si no, 
//         entonces: "El número es positivo y par".
// Si el número es positivo e impar y múltiplo de 7
//       entonces "El número es positivo, impar y múltiplo de 7".
// Si el número es positivo e impar pero no múltiplo de 7
//       entonces "El número es positivo, impar pero no múltiplo de 7".
//     escribir el resultado
// FinAlgoritmo
const read = require ("prompt-sync")();
const write = console.log 
function mostrar(){
    let numero=0,mostrar=0
    numero = parseFloat(read("ingrese un numero:"))
    if (numero < -20) {
        console.log("El número es negativo y menor que -20");
    } else { 
        if (numero > 0) {
            if (numero % 2 === 0) {
                console.log("El número es positivo y par");
            } else if (numero % 7 === 0) {
                console.log("El número es positivo, impar y múltiplo de 7");
            } else {
                console.log("El número es positivo, impar pero no múltiplo de 7");
            }
        } else {
            console.log("El número es igual o mayor que -20 pero no negativo");
        }
    }
    
}
mostrar()