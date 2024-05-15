const read=require('prompt-sync')();
const write=console.log
//Resolver: 2 *(4 – 10 + 8)/2* 36 *(1/2)
//ANALISIS DE REQUERIMIENTO
//ENT:nada
//PRO:2 *(4 – 10 + 8)/2* 36 *(1/2)
//SAL:
function resolver(){
    let total=0
    total=2*(4-10+8)/2*36*(1/2)
    write("El resultado de la operacion es:"+total)
}
resolver()