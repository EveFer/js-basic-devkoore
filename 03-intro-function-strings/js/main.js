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