const read=require('prompt-sync')();
const write=console.log
//Solicitar al usuario un número y mostrar si es divisible por 2 o impar
//ANALISIS DE REQUERIMIENTO
//Ent:numer=0(leer)
//Pro:Si(numer%2===0)entonces
//      Escribir(numer+" es divisible para 2")
//    Sino entonces
//      Escribir(numer+"es un numero impar")
//    Finsi
//Sal:escribir mensaje
//ALGORITMO DIVISIBLE
//Inicio
//declarar numer=0
//Escribir "Ingrese un numero:"
//Leer numer
//Converti numer a entero con parseInt
//  Si(numer%2===0)entonces
//      Escribir(numer+" es divisible para 2")
//  Sino entonces
//      Escribir(numer+" es un nmuero impar")
//  Finsi
//Fin
//Crea la funcion
function divisible(){
    let numer=0
    numer=read("Ingrese un numero:")
    numer=parseFloat(numer)
    if(numer%2===0){
        write(numer+", es divisible para 2.")
    } else {
        write(numer+", es un numero impar.")
    }
}
divisible()