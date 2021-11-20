// switch

/*
 0 -> Domingo
 1 -> Lunes
 2 -> Martes
 3 -> Miercoles
 4 -> Jueves
 5 -> Viernes
 6 -> Sabado
*/

let day = 100

switch (day) {
    case 0: 
        console.log('Hoy es domingo');
        break;
    case 1:
        console.log('Hoy es Lunes')
        break;
    case 2: 
        console.log('Hoy es MArtes');
        break;
    case 3:
        console.log('Hoy es Miercoles')
        break;
    case 4: 
        console.log('Hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es Viernes')
        break;
    case 6:
            console.log('Hoy es Sabado')
            break;
    default:
        console.log('No es un día valido')
        break;
}


// Objeto -> Abstracción en codigo de un algo de la vida.
// Caracteristicas -> propiedades
// acciones -> Métodos

// String | number | boolean -> Primitivo

// Primitive wrapper Object
let name = 'Fernanda'
let string = new String('Un string')
console.log(string)
console.log(name)
console.log(typeof name)
console.log(name.length)

// Template String

let firstName = "Reynita"
let lastName = 'López'

// concatenarlo
let fullName = firstName + ' ' + lastName

console.log(fullName)

// Interpolación - Template string
let saludo = `Hola mi nombres es ${firstName} ${lastName}`
 
console.log(saludo)


console.log('--Funciones---')
// Funciones

// Declracion de la funcion
function sumarDosNumeros(numero1, numero2) {
    let result = numero1 + numero2
    console.log(result)
    return result
}

// invocamos la función - al momento de pasarle los paramtros serian argumento
// console.log(sumarDosNumeros(10,30))  
let myResultado = sumarDosNumeros(50,10)
console.log(myResultado)

// 

function evaluarSiEsMayor(valor1, valor2) {
    let result = ''
    if(valor1 > valor2) {
        result = 'El valor1 es mayor'
    }else {
        result = 'El valor2 es mayor'
    }
    return result
}
console.log(evaluarSiEsMayor(10,20))


// EJERCICIOS

// Ejercicio 1
// Reciba en una variable el nombre y en otra los apellidos y me devuelva 
// en una sola cadena el nombre en minuscula
// y los apellidos mayusculas.


// Ejercicio 2
// Obtener el nombre completo del usuario e 
// indicarle cuantos caracteres tiene su nombre.


// Ejercicio 3
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo


// Ejercicios 4
//obtener el nombre completo del usuario
//contar cuántas vocales tiene.

/*
Ejercicio 5:
Del texto 
"Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", 
y mostrar el mensaje de nuevo al usuario
*/


/*
Ejercicio 6:
Pedir el nombre de una persona

Verificar si el nombre termina con una vocal
imprimir que Tu nombre termina con ${vocal}
Sino
imprimir que Tu nombre termina con ${consonante}
-> Pedro
-> Tu nombre termina con o

*/


/*
Ejercicio 7:
Crear un programa que permita al usuario retornar el numero de coincidencias de 
una palabra en una frase que el mismo usuario ingrese.

input:
   palabra a buscar: 'Hola'
   frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
   
OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/

/*
Ejercicio 8:
Pedir al usuario una oracion

Imprimir un string con todas las vocales
Imprimir un string con todas las consonantes

*/

/* Ejercicio 9 
Comparar 2 string, y determinar cual de los dos es el más largo

input: "string 1", "Some large string"
Output: "el string {} es el más largo"
*/

/*
Ejercicio 10: 
Generar un nuevo string: (deducir lo que se debe hacer con base en el input y el output)
input: "a very large string"
output: "A VeRy lArGe sTrInG" 

input: "abcdefg"
output: "AbCdEfG"

*/