//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
//del número 2; Y si el numero 3 es divisor del numero4.
//Analisis de requerimiento
//entrada:num1=0(leer),num2=0(leer),num3=0(leer),num4=0(leer)
//proceso:calcular
//salida:mostrar resultado
// Algoritmo
//Declarar cuatro números: num1, num2, num3, num4.
//    Solicitar "ingrese num1"
//    Solicitar "ingrese num2"
//    Solicitar "ingrese num3"
//    Solicitar "ingrese num4"
//si el número num1 es divisor del número num3:
//Si el residuo es igual a 0,
// entonces num1 es divisor de num3.
//Si el residuo no es igual a 0, 
//entonces num1 no es divisor de num3.
//Verificar si el número num2 es el doble del número num4:
//Calcular el doble de num4.
//Si el doble de num4 es igual a num2
// entonces num2 es el doble de num4.
//Si el doble de num4 no es igual a num2
// entonces num2 no es el doble de num4.
//Fin Algoritmo
const read = require ("prompt-sync")();
const write = console.log 
function comprobarMitadDivisor() {
    let num1=0; let num2=0; let num3=0; let num4=0;
  num1 = parseFloat(read("ingrese un numero:")) 
  num2 = parseFloat(read("ingrese un numero:"))
  num3 = parseFloat(read("ingrese un numero:"))
  num4 = parseFloat(read("ingrese un numero:")) 
    if (num1 * 2 === num2) {
       write(num1 + " es la mitad de " + num2);
    } else {
       write(num1 + " no es la mitad de " + num2);
    }
    if (num4 % num3 === 0) {
        write(num3 + " es divisor de " + num4);
    } else {
        write(num3 + " no es divisor de " + num4);
    }
}
comprobarMitadDivisor()