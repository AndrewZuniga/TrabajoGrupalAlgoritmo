const read = require('prompt-sync')();
const write = console.log
// 28. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
// descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
// aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
// monto final con el descuento con el IVA del 15%.

// Ent: precioTotal=0.0(Leer), cupon=0(Leer)
// Pro: Si precioTotal es mayor que 10 
//       Descuento = precioTotal - (precioTotal*(cupon/100))
//       preciofinal = Descuento + (precioTotal*0.15)
//      Sino
//       preciofinal = precioTotal  + (precioTotal*0.15)
//      FinSi
// Sal: Mensaje diciendo  el monto final con el descuento si es que cumple la condicion y con el IVA del 15%.
// Pseudocodigo 
// Algoritmo aprobar
//   declarar precioTotal=0.0, cupon=0
//   Escribir "Ingrese el precio del total de su compra: "
//   Leer precioTotal
//   Escribir "Ingrese el porcentajde de descuento de su cupon a aplicar: "
//   Leer cupon
//   Si precioTotal > 10 
//       precioTotal = precioTotal - (precioTotal*(cupon/100))
//   Sino
//       preciofinal = precioTotal  + (precioTotal*0.15)
//   FinSi
//   Escribir "EL monto final es" preciofinal
// FinAlgoritmo
// Se crea la funcion 
function TiendaCupon(){
    let precioTotal, cupon
    precioTotal = parseFloat(read("Ingrese el precio del total de su compra: "))
    cupon = parseInt(read("Ingrese el porcentajde de descuento de su cupon a aplicar: "))
    if (precioTotal > 10 ){
        precioTotal = precioTotal - (precioTotal*(cupon/100))
    } 
    preciofinal = precioTotal  + (precioTotal*0.15)
    write(`EL monto final es ${preciofinal}`)
}
TiendaCupon()