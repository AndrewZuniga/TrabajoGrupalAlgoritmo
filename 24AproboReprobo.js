const read = require('prompt-sync')();
const write = console.log
// 24.Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a 40 y menor a 60 se queda para recuperación caso contario pierde la materia.
// Ent: nota=0.0(Leer)
// Pro: Si nota es mayor igual que 60
//       Escribir "Aprobó"
//      Si nota es mayor que 40 y nota es menor que 60
//       Escribir "Va a recuperacion"
//      Sino 
//       Escribir "Reprobó"
// Sal: Mensaje diciendo si aprobo o si reprobo o si fue a recuperacion
// Pseudocodigo 
// Algoritmo aprobar
//   declarar nota=0.0
//   Escribir "Ingrese la nota de su examen:"
//   Leer nota
//   Si nota >= 60
//    Escribir "Aprobó"
//   Sino Si nota > 40 y nota < 60
//    Escribir "Va a recuperacion"
//   Sino 
//    Escribir "Reprobó"
//   FinSi
// FinAlgoritmo
// Se crea la funcion 
function aprobar(){
    let nota 
    nota = parseFloat(read("Ingrese la nota de su examen:"))
    if (nota >= 60){
        write("Aprobó")
    }else if(nota > 40 && nota < 60){
        write("Va a recuperacion")
    }else{
        write("Reprobó")
    }
}
aprobar()
