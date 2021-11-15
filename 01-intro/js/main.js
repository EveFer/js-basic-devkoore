

// ECMA S5 -> global | funcional
var greeting = "Hello world"

// scope de bloque -> {}

if(7 === 7) {
    var numero = 7
}

console.log('numero despues del bloque: ', numero)


// console.log(greeting)

console.log(window)

// scope funcional

function suma() {
    var numero1 = 20
    var resultado = numero1 + 5
}

// console.log('variable numero1 fuera de la funcion',numero1)


// ES6

// let | const

console.log("-------------ambito global----------------")

var musica = "Rock"

console.log('Variable musica antes del bloque: ', musica) // Rock
{
    var musica = "Pop"
    console.log('Variable musica dentro del bloque: ', musica)
}

// var musica = ""
console.log('Vairable musica despues del bloque: ', musica) 

// output
// Rock
// Pop
// Rock

console.log("-------------ambito bloque----------------")

let musica1 = "Rock"

console.log('Variable musica antes del bloque: ', musica1) // Rock
{
    let musica1 = "Pop"
    console.log('Variable musica dentro del bloque: ', musica1)
}

musica1 = "Salsa"

console.log('Vairable musica despues del bloque: ', musica1) 

// // output
// // Rock
// // Pop
// // Rock

// const NAME = "Fernanda"

// console.log(NAME)

// {
//     const NAME = "Jonatan"
//     console.log(NAME)
// }

// reasignacion
// NAME = "Jonatan" // no es permitido+

console.log('---------const-----------')

const NAME = "Reynita"

console.log(NAME)

// NAME = "Luis"

const arrayNumbers = [1,2,4,5,6]

console.log(arrayNumbers)

arrayNumbers.push(10)

console.log(arrayNumbers)

const obje = {
    name: "Fernanda",
    lastName: "Palacios"
}

console.log(obje)
obje.age = 25

console.log(obje)