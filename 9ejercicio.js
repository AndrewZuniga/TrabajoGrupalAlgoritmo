//9.Calculadora de sueldo con aumento: 
//Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá.
// Calcula y muestra el nuevo salario después del aumento
// Analisis de requerimiento
// Entrada:salario actual=0(leer),porcentaje de aumento=0(leer),nuevo salario(calcular)
// proceso: salario anual+  aumento = nuevo salario
// salida:nuevo salario
// Algoritmo
//  Declarar salario anual =0,aumento=0,nuevo salario=0
//     solicitar "ingrese salario anual"
//       Leer el salario anual
//      Solicitar "ingrese el porcentaje de aumento"
//       Leer el porcentaje de aumento
// Calcular el aumento aplicando el porcentaje al salario actual:
// Nuevo salario = salario actual + (salario anual * (porcentaje de aumento / 100))
// Mostrar el nuevo salario calculado al usuario.
// Fin de Algoritmo
const read = require ("prompt-sync")();
const write = console.log 
function nuevosalario(){
    let salarioanual =0,aumento=0,nuevosalario=0
    salarioanual = parseFloat (read("ingrese su salario anual:"))
    aumento = parseFloat (read("ingrese el aumento:"))
    nuevosalario = salarioanual*(aumento / 100)+salarioanual
    console.log (salarioanual,aumento,nuevosalario);
}
nuevosalario()