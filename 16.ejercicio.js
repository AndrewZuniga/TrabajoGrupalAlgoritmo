const read=require("prompt-sync")();
const write=console.log
//Solicitar al usuario un carácter y mostrar si es una vocal o consonante
//ANALISIS DE REQUERIMIENTO
//Ent:letra=""(leer)
//Pro:Si(letra===a o letra===e o letra===i o letra===o o letra===u)entonces
//      Escribir("El caracter "+letra+" es una vocal.")
//   Sino si (letra>=a y caracter<=z)entonces
//      Escribir("El caracter "+letra+" es una consonante.")
//   Sino entonces
//      Escribir: letra+" no es una letra."
//  Finsi
//Sal:""
//ALGORITMO VERIFICAR
//Inicion
//declarar letra=""
//Escribir "Ingrese una letra"
//Leer letra
//letra=letra.toLowerCase
//  Si(letra===a o letra===e o letra===i o letra===o o letra===u)entonces
//      Escribir("El caracter "+letra+" es una vocal.")
//  Sino si (letra>=a y caracter<=z)entonces
//      Escribir("El caracter "+letra+" es una consonante.")
//  Sino entonces
//      Escribir(letra+" no es una letra.")
//  Finsi
//Fin algoritmo
//Crea la funcion
function verifica(){
    let letra=""
    letra=read("Ingrese un letra:")
    //la pasamo a minuscula con toLowerCase para que sea mas facil evaluar
    letra=letra.toLowerCase();
    if(letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u"){
        write(letra+", es una vocal.")
    }else if (letra>="a" && letra<="z"){
        write(letra+", es una consonante.")
    }else{
        write(letra+", no es una letra por lo que no es ni vocal ni consonante.")
    }
}
verifica()