const read=require('prompt-sync')();
const write=console.log
//Solicitar al usuario un número y mostrar si es un número de un solo dígito
//ANALISIS DE REQUERIMIENTO
//Ent:numero=0(leer)
//Pro:si (numero>-10 && numero<10)entonces
//      escribir(numero+" es un numero de un solo digito.")
//    sino entonces
//      escribir(numero+" no es de un solo digito.")
//    finsi
//Sal:escribir mensaje
//ALGORITMO UNDIGITO
//declarar numero=0
//Escribir"Ingrese un numero"
//Leer numero
//  si (numero>-10 && numero<10)entonces
//    escribir(numero+" es un numero de un solo digito.")
//  sino entonces
//    escribir(numero+" no es de un solo digito.")
//  finsi
//fin algoritmo
//Crea funcion
function undigito(){
let numero=0
numero=read("Ingrese un numero:")
if (numero>-10 && numero<10){
    write(numero+" es un numero de un solo digito.")
}else {
    write(numero+" no es de un solo digito.")
}
}
undigito()
