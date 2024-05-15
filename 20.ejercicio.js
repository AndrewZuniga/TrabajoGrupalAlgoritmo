const read=require('prompt-sync')();
const write=console.log
//Pedir al usuario un número y mostrar si es mayor a 0 y menor o igual a 100
//ANALISIS DE REQUERIMIENTO
//Ent:numer=0(leer)
//Pro:Si ((numer>0)&&(numer<=100)) entonces
//      Escribir number+" es mayor a 0 y menor o igual a 100"
//    Sino entonces
//      Escribir numer+" es menor a 0 o mayor a 100"
//    Finsi
//Sal:escribir mensaje
//ALGORITMO COMPARAR
//Inicio
//declarar number=0
//Leer prompt sync
//Escribir console.log
//Funcion comprobar
//declarar numer=0
//numer=leer"Ingrese un numero:"
//Convertir a numer en un numero punto flotante con parseFloat
//  Si ((numer>0)&&(numer<=100)) entonces
//      Escribir number+" es mayor a 0 y menor o igual a 100"
//  Sino entoces
//      Escribir numer+"es menor a 0 o mayor a 100" 
//  Finsi
//Fin
//Funcion
function comparar(){
    let numer=0
    numer=read("Ingrese un numero:")
    numer=parseFloat(numer)
    if((numer>0)&&(numer<=100)){
        write(numer+", es mayor a 0 y menor a igual a 100.")
    }else{
        write(numer+", es menor a 0 o mayor a 100.")
    }
}
comparar()
