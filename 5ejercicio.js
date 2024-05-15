// 5.((8 > 2) || (932 < 23) ) && 4 == 2
// 4. (260 / 12 + 54 % 3 - 85 % 7)
// Ent:No hay entrada del usuario, los valores están definidos directamente en la expresión.
// Pro: ((8 > 2) || (932 < 23) ) && 4 == 2
// Sal: Un mensaje indicando si es verdadero o falso la expresión matemática.
// Pseudocódigo
// Algoritmo ecuacion2
// declarar resultado 
// resultado = ((8 > 2) || (932 < 23) ) && 4 == 2
// FinAlgoritmo 
// Escribir "El resultado de la expresión es", resultado
// Se crea la función:
function calcularExpresion2() {
    let resultado = (((8 > 2) || (932 < 23) ) && 4 == 2);
    console.log("El resultado de la expresión es:", resultado);
}
calcularExpresion2();