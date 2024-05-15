const read=require('prompt-sync')();
const write=console.log
//Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a
//ANALISIS DE REQUERIMIENTO
//ENT:constante b=8,constante a=5
//PRO:valor=2*b+a/2+4*b%a
//SAL:valor
function resolver(){
    const a=8
    const b=5
    let valor=0
    valor=2*b+a/2+4*b%a
    write("El resultado de la operacion es:"+valor)
}
resolver()