const read = require('prompt-sync')();
const write = console.log
// 27. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
// sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
// aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
// aplicado.

// Ent: sueldo=0.0(Leer), porcentaje=0(leer)
// Pro: Si sueldo es menor que 500
//       sueldo = sueldo + (sueldo*0.05)
//      FinSi
// Sal: Mensaje diciendo el sueldo esperado con el incremento aplicado si es que cumple la condicion.
// Pseudocodigo 
// Algoritmo aprobar
//   declarar sueldo=0.0, porcentaje = 0
//   Escribir "Ingrese su sueldo actual: "
//   Leer sueldo
//   Si sueldo < 500
//       sueldo = sueldo + (sueldo*0.05)
//   FinSi
//   Escribir "Su sueldo final es" sueldo
// FinAlgoritmo
// Se crea la funcion 
function SueldoAnual(){
    let sueldo, porcentaje
    sueldo = parseFloat(read("Ingrese su sueldo actual: "))
    porcentaje = parseInt(read("Ingrese el porcentaje de incremento salarial anual: "));
    if (sueldo < 500){
        sueldo = sueldo + (sueldo*0.05)
    }
    write(`Su sueldo final es ${sueldo}`)
}
SueldoAnual()