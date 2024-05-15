const read = require('prompt-sync')();
const write = console.log
// 26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
// en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
// de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
// aplicar el impuesto.

// Ent: precio=0.0(Leer), impuesto=0(Leer)
// Pro: Si precio es mayor que 200
//       precio = precio - (precio*(impuesto/100))
//      FinSi
// Sal: Mensaje diciendo el precio final luego de aplicar el impuesto si es que cumple la condicion.
// Pseudocodigo 
// Algoritmo aprobar
//   declarar precio=0.0, impuesto=0.0
//   Escribir "Ingrese el precio del articulo: "
//   Leer precio
//   Escribir "Ingrese porcentaje de impuesto: "
//   Leer impuesto
//   Si precio > 200
//       precio = precio + (precio*(impuesto/100))
//   FinSi
//   Escribir "El precio de venta del articulo es" precio
// FinAlgoritmo
// Se crea la funcion 
function ImpuestoPrecio(){
    let precio, impuesto
    precio = parseFloat(read("Ingrese el precio del articulo: "))
    impuesto = parseInt(read("Ingrese porcentaje de impuesto: "))
    if (precio > 200){
        precio = precio + (precio*(impuesto/100))
    }
    write(`El precio de venta del articulo es ${precio}`)
}
ImpuestoPrecio()