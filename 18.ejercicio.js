const read=require('prompt-sync')();
const write=console.log
//Pedir al usuario un número y mostrar si es múltiplo de 3 y par
//ANALISIS DE REQUERIMIENTO
//Ent:numer=0(leer)
//Pro:Si((numer%3===0)&&(numer%2===0))entonces
//      Escribir numer+" es multiplo de 3 y par."
//    Sino entonces
//      Escribir numer+" no es multiplo de 3 y par."
//    Finsi
//Sal: escribir mensaje
//ALGORTIMO MULTIPLO
//Inicio
//declarar numer=0
//Escribir "Ingrese un numero:"
//Leer numer
//Converti numer a entero con parseInt
//  Si((numer%3===0)&&(numer%2===0))entonces
//      Escribir numer+" es multiplo de 3 y par."
//  Sino entonces
//      Escribir numer+" no es multiplo de 3 y par."
//  Finsi
//Fin algoritmo
//Crea la funcion
function multiplo(){
    let numer=0
    numer=read("Ingrese un numero:")
    numer=parseInt(numer)
    if((numer%3===0)&&(numer%2===0)){
        write(numer+", es multiplo de 3 y par.")
    }else{
        write(numer+", no es multiplo de 3 y par.")
    }
}
multiplo()