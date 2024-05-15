const read = require('prompt-sync')();
const write = console.log
// 25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
// Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
// el precio de venta. mostrar el precio final incluyendo el 15% del IVA.

// Ent: precio=0.0(Leer), anio=0(Leer)
// Pro: Si anio es mayor que 2020 y anio es menor que 2023
//       precio = precio - (precio*0.05)
//      FinSi
//      precio = precio + (precio*0.15)
// Sal: Mensaje diciendo el precio final incluyendo el 15% del IVA.
// Pseudocodigo 
// Algoritmo aprobar
//   declarar precio=0.0, anio=0
//   Escribir "Ingrese el precio del vehiculo:"
//   Leer precio
//   Escribir "Ingrese año de fabricacion"
//   Leer anio
//   Si anio es mayor que 2020 y anio es menor que 2023
//       precio = precio - (precio*0.05)
//   FinSi
//   precio = precio + (precio*0.15)
//   Escribir "El precio de venta del vehiculo es" precio
// FinAlgoritmo
// Se crea la funcion 
function PrecioCarro(){
    let precio, anio
    precio = parseFloat(read("Ingrese el precio del vehiculo: "))
    anio = parseInt(read("Ingrese año de fabricacion: "))
    if (anio > 2020 && anio < 2023){
        precio = precio - (precio*0.05)
    }
    precio = precio + (precio*0.15)
    write(`El precio final del vehiculo es ${precio}`)
}
PrecioCarro()