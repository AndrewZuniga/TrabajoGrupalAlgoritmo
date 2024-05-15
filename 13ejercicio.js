//13. Pedir al usuario un número y mostrar si es par o impar.
// analisis de requerimiento
// entrada:numero=0(leer),residuo
// proceso:residuo=numero
// salida:mostrar resultado
// algoritmo
// declarar numero=0,residuo
//   solicitar "ingrese un numero:"
// leer numero
// si (numero %2 ==0)
//    entonces "el numero es par."
// si no
//   entonces "el numero es impar."
// mostrar resultado
// fin Algoritmo
const read = require ("prompt-sync")();
const write = console.log 
function par(){
 let numero=0,residuo
 numero=parseFloat(read("ingrese un numero :"))
if (numero%2==0){
    console.log("el numero es par")
}
else{
    console.log("el numero es impar .")
}
}
par()