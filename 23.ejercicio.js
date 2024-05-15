const read=require('prompt-sync')();
const write=console.log
// Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor $100. 
//ANALISIS DE REQUERIMIENTO
//Ent:precio=0,procentaje=0
//Pro:si(precio>100)entonces
//   porcentaje=porcentaje/100
//       escribir("El valor total es:"+(total=precio+(precio*porcentaje)))
//   sino si(precio<101)entonces
//       escribir("El valor total es:"+precio)
//   sino entonces
//      escribir("Ingrese los valores correctos.")
//finsi
//Sal:mostrar mensaje
//ALGORITMO APLICADO
//Inicio
//declarar precio=0,total=0,procentaje=0
//Escribir"Ingrese el precio del producto:"
//leer precio
//Escribir"Ingrese el procentaje del descuento del producto:"
//leer porcentaje
//si(precio>100)entonces
//  porcentaje=porcentaje/100
//  escribir("El valor total es:"+(total=precio+(precio*porcentaje)))
//sino si(precio<101)entonces
//  escribir("El valor total es:"+precio)
//sino entonces
//  escribir("Ingrese los valores correctos.")
//finsi
//fin algoritmo
function precio(){
    let precio=0,total=0,porcentaje=0
    precio=parseInt(read("Ingrese el precio del producto:"))
    porcentaje=parseInt(read("Ingrese el procentaje de descuento del producto:"))
if(precio>100){
    porcentaje=porcentaje/100
write("El valor total es:"+(total=precio+(precio*porcentaje)))
}else if(precio<101){
write("El valor total es:"+precio)
}else{
write("Ingrese los valores correctos.")
}
}
precio()