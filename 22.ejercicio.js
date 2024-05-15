const read=require('prompt-sync')();
const write=console.log
//Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.  
//ANALISIS DE REQUERIMIENTO
//Ent:monto=0(leer),anio=0(leer),IVAA=0.15(leer),IVAAA=0.12(leer),total(leer)
//Pro:si(anio<2024)entonces
//      escribir("El pocentaje de IVA a aplicar es: 12%, por lo que el total a pagar es:"+(total=monto+(monto*0.12)))
//   finsi
//   si(anio>=2024){
//      escribir("El pocentaje de IVA a aplicar es: 15%, por lo que el total a pagar es:"+(total1=monto+(monto*0.15)))
//   finsi
//Sal:mostrar mensaje
//ALGORITMO APLICADO
//Inicio
//declararmonto=0,anio=0,total=0,total1=0,const IVAA=0.15,const IVAAA=0.12
//Escribir "Ingrese el monto total de su factura:"
//Lee "monto"
//Escribir"Ingrese el año de la factura"
//leer anio
//Convertir a monto en un numero punto flotante con parseFloat
//Convertir a anio a entero con parseInt
//   si(anio<2024)entonces
//      escribir("El pocentaje de IVA a aplicar es: 12%, por lo que el total a pagar es:"+(total=monto+(monto*0.12)))
//   finsi
//   si(anio>=2024){
//      escribir("El pocentaje de IVA a aplicar es: 15%, por lo que el total a pagar es:"+(total1=monto+(monto*0.15)))
//   finsi
//Fin algoritmo
function aplicado(){
    let monto=0,anio=0,total=0,total1=0
    const IVAA=0.15
    const IVAAA=0.12
    monto=read("Ingrese el monto total de su factura:")
    anio=read("Ingrese el año de la factura:")
    monto=parseFloat(monto)
    anio=parseInt(anio)
    if(anio<2024){
        write("El pocentaje de IVA a aplicar es: 12%, por lo que el total a pagar es:"+(total=monto+(monto*0.12)))
    }
    if(anio>=2024){
    write("El pocentaje de IVA a aplicar es: 15%, por lo que el total a pagar es:"+(total1=monto+(monto*0.15)))
    }
}
aplicado()
