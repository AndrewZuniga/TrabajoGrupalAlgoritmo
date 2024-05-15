const read=require('prompt-sync')();
const write=console.log
//Resolver: (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
//ANALISIS DE REQUERIMIENTO
//ENT:nada
//PRO:(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
//SAL:resultado
function realizar(){
    let resultado=0
    resultado=(5+3*2)+9>3*5*14%3
    write("El resultado de la operacion es:"+resultado)
}
realizar()