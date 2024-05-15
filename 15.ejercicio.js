const read=require('prompt-sync')();
const write=console.log
//Pedir al usuario dos números y mostrar si son iguales o diferentes. 
//ANALISIS DE REQUERIMIENTO
//Ent:numero=0,numero1=0
//Pro:si(numero==numero1)entonces
//      escribir(numero+" y "+numero1+" son iguales.")
//    sino entonces
//      escribir(numero+" y "+numero1+" son diferentes.")
//    finsi
//Sal:mostrar mensaje
//ALGORTIMO COMPARAR
//declarar numero=0,numero1=0
//Escribir "Ingrese un numero:"
//leer numero
//Convetir a decimal con parseFloat
//Escribir "Ingrese otro numero:"
//leer numero1
//Convetir a decimal con parseFloat
//si(numero==numero1)entonces
//  escribir(numero+" y "+numero1+" son iguales.")
//sino entonces
//  escribir(numero+" y "+numero1+" son diferentes.")
//finsi
//fin algortimo
function comparar(){
    let numero=0,numero1=0
    numero=read("Ingrese otro numero:")
    numero1=read("Ingrese otro numero:")
if(numero==numero1){
write(numero+" y "+numero1+" son iguales.")
}else{
write(numero+" y "+numero1+" son diferentes.")
}
}
comparar()