const read = require('prompt-sync')();
const write = console.log
// 29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
// del bono de antigüedad del empleado aplicando el 3% del salario por el número de
// años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
// antigüedad es de cero. Se pide mostrar el salario y el bono de antigüedad.

// Ent: salarioActual=0.0(Leer), aniosAntiguedad=0(Leer), BonoAntiguedad=0.0(Calcular)
// Pro: Si aniosAntiguedad es mayor que 3 
//       BonoAntiguedad = aniosAntiguedad*0.03*salarioActual
//      FinSi
// Sal: Mensaje con el Salario y bono de antigüedad
// Pseudocodigo 
// Algoritmo aprobar
//   declarar salarioActual=0.0, aniosAntiguedad=0, BonoAntiguedad=0.0
//   Escribir "Ingrese su salario actual: "
//   Leer salarioActual
//   Escribir "Ingrese la cantidad de años de antigüedad: "
//   Leer aniosAntiguedad
//   Si aniosAntiguedad > 3 
//       BonoAntiguedad = aniosAntiguedad*0.03*salarioActual
//   FinSi
//   Escribir "Su salario es", salarioActual
//   Escribir "Su bono de antiguedad es",BonoAntiguedad
// FinAlgoritmo
// Se crea la funcion 
function SalarioBono(){
    let salarioActual, anioAntiguedad, bonoAntiguedad = 0.0
    salarioActual = parseFloat(read("Ingrese su salario actual: "))
    anioAntiguedad = parseInt(read("Ingrese la cantidad de años de antigüedad: "))
    if (anioAntiguedad > 3){
        bonoAntiguedad = salarioActual * 0.03 * anioAntiguedad;
    }
    write(`Su salario es ${salarioActual}`);
    write(`Su bono de antigüedad es ${bonoAntiguedad}`);
}
SalarioBono()