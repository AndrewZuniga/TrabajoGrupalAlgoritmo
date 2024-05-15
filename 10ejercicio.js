//10.El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de
//sus clientes, para esto considera que:
//Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
//Si tiene tipo 2 el aumento será del $200
//Si tiene tipo 3, el aumento será del $300
//Para cualquier otro tipo será del 500
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
//crédito que tendrá una persona en su tarjeta considerando que después del aumento
//se tendrá que subir 10% adicionales a todas las tarjetas
// Analisis de requerimiento
// entrada: credito(leer), tipoTarjeta(leer)
  // proceso: si tipo==1 credito = credito +100
           // sino si tipo == 2 credito = credito + 200
           // sino si tipo == 3 credito = credito + 300
           // sino credito = credito + 500
           // finsi
           // credito = credito + credito*0.10
// salida: escribir credito
//Algoritmo
// Declarar credito=0,tipotarjeta=0
//     solicitar "ingrese el tipo de tarjeta:"
//    leer tipo de tarjeta
// si tipo==1 credito = credito +100
//  sino si tipo == 2 credito = credito + 200
//  sino si tipo == 3 credito = credito + 300
//  sino credito = credito + 500
//  finsi
//credito = credito + credito*0.10
//mostrar el credito
//  Fin de Algoritmo
const read=require('prompt-sync')();
 const write=console.log
function creditodetarjeta(){
     let tarjeta=0,credito=0
     tarjeta=parseInt(read("Ingrese el tipo de tarjeta que tiene:"))
     if(tarjeta==1){
     credito=100+(100*0.10)
     write("El aumento del límite del crédito de su tarjeta es:"+credito)
     }
     if(tarjeta==2){
     credito=200+(200*0.10)
     write("El aumento del límite del crédito de su tarjeta es:"+credito)
     }
     if(tarjeta==3){
     credito=300+(300*0.10)
     write("El aumento del límite del crédito de su tarjeta es:"+credito)
     }
     if(tarjeta>3){
     credito=500+(500*0.10)
     write("El aumento del límite del crédito de su tarjeta es:"+credito)
      }
      }
   creditodetarjeta()