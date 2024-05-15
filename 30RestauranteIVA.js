const read = require('prompt-sync')();
const write = console.log
// 30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
// que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
// descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
// muestra el monto final con el descuento aplicado más el IVA del 15%.

// Ent: CuentTotal=0.0(Leer), descuento=0(Leer)
// Pro: Si precioTotal es mayor que 70 
//       CuentaTotal = CuentaTotal - (CuentaTotal*(descuento/100))
//      FinSi
//      Cuentafinal = CuentaTotal + (precioTotal*0.15)
// Sal: Mensaje diciendo  el monto final con el descuento si es que cumple la condicion y con el IVA del 15%.
// Pseudocodigo 
// Algoritmo aprobar
//   declarar CuentTotal=0.0, descuento=0
//   Escribir "Ingrese la cuenta total: "
//   Leer CuentaTotal
//   Escribir "Ingrese el porcentajde de descuento por ser cliente frecuente: "
//   Leer descuento
//   Si precioTotal > 70 
//       CuentaTotal = CuentaTotal - (CuentaTotal*(descuento/100))
//   FinSi
//   Cuentafinal = CuentaTotal + (precioTotal*0.15)
//   Escribir "EL monto final es" Cuentafinal
// FinAlgoritmo
// Se crea la funcion 
function RestauranteIVA(){
    let CuentaTotal, descuento
    CuentaTotal = parseFloat(read("Ingrese el precio del total de su compra: "))
    descuento = parseInt(read("Ingrese el porcentaje de de descuento por ser cliente frecuente: "))
    if (CuentaTotal > 70 ){
        CuentaTotal = CuentaTotal - (CuentaTotal*(descuento/100))
    } 
    Cuentafinal = CuentaTotal + (CuentaTotal*0.15)
    write(`EL monto final es ${Cuentafinal}`)
}
RestauranteIVA()