// operadores

// Arimeticos

// + | - | * | / | % | ()


let residuo = 5 % 2

console.log(residuo)

// asignación


// +=
// -=
// *=
// /=
// %=

let numero1 = 10

numero1 += 20

// numero1 = numero1 + 20

console.log(numero1)


// decremento | incremento

// --
// ++

let numero2 = 2

console.log(numero2++)
console.log(numero2)


// comparación

// >
// >=
// <
// <=

// == -> valida que el valor sea el mismo
// === -> validar el valor y el tipo de dato

// !=
// !==

console.log(7 == '7')

console.log(7 === '7')


// Logicos

// &  (condicion1  && condicion2)
// || (condicion1 || condicion2)
// !Bool 
// !!Bool  !!true -> true



// structura if-else
let age = 19

console.log('1')
if(age >= 18) {
    console.log('Es mayor de Edad')
}else {
    console.log('Es Menor de edad')
}

console.log('2')
if(age > 17) {
    console.log('Es mayor')
}else {
    console.log('Es Menor de edad')
}

console.log('3')
if(age < 18) {
    console.log("Es menor")
}else {
    console.log("Es mayor")
}

console.log('4')
//   true
if(age <= 17) {
    console.log("Es menor")
}else {
    console.log("Es mayor")
}


// if - else anidado

// 6hrs - 11hrs - Buenos días
// 12hras - 19hras - Buenas tardes
// 20hras - 23hras

console.log('if else anidado')
let hora = 16

if(hora >= 6 && hora <= 11) {
    console.log('Buenos días')
}else if(hora >= 12 && hora <= 19) {
    console.log('Buenas tardes')
}else if(hora >= 20 && hora <= 23) {
    console.log('Buenas noches')

}else {
    console.log('Dejenme dormir')
}


// Ternario

    // true
// (condicion) ? (lo que pasa si se cumple la condicion) : (lo que pasa si no se cumple la condicion)

console.log('-----------Ternario-----------')
let age2 = 19


// let resultado = age2 >= 18 ? 'Es mayor' : 'Es menor'
// console.log(resultado)

// age2 >= 18 ? console.log('Es mayor')  : console.log('Es menor')
age2 >= 18 ? console.log('Es mayor') : console.log('Es menor')


// and and

// (condicion) && (si se cumple solo ejecuta esto)

age2 <= 17 && console.log('Es menor')


