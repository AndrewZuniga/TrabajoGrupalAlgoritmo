//Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
const read=require('prompt-sync')();
const write=console.log
//ANALISIS DE REQUERIMIENTO
//Ent:nomb1=""(leer),nomb2=""(leer)
//Pro:  si(nomb1===nomb2)entonces
//          escribir"El nombre mayor es:"+nomb1
//      sino si(nomb1<nomb2)entonces
//          escribir"El nombre mayor es:"+nomb2
//      sino 
//          escribir"nomb1+" y "+nomb2+" son iguales."
//Sal:escribir mensaje
//ALGORITMO MAYOR
//Inicio
//declarar nomb1=0,nomb2=0
//Escribir "Ingrese un numero:"
//Leer nomb1
//Escribir "Ingrese otro numero:"
//Leer numb2
//si(nomb1===nomb2)entoces 
//    escribir(nomb1+" y "+nomb2+" son iguales")
//sino si(nomb1>nomb2)entoces
//    escribir(nomb1+", es el mayor.")
//sino entonces
//    escribir(nomb2+", es el mayor.")
//Fin algoritmo
//Crea funcion
function mayor(){
    let nomb1=0,nomb2=0
    nomb1=read("Ingrese un nombre:")
    nomb2=read("Ingrese otro nombre:")
    nomb1=nomb1.toLowerCase()
    nomb2=nomb2.toLowerCase()
    if(nomb1===nomb2) {
        write(nomb1+" y "+nomb2+" son iguales")
    } else if (nomb1>nomb2) {
        write(nomb1+", es el mayor.")
    }else {
        write(nomb2+", es el mayor.")
    }
}
mayor()