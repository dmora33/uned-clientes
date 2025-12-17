// Números
let edad = 25;

// Cadenas de texto
let nombre = "Juan";

// Booleanos
let esEstudiante = true;

// Objetos
let persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
};
console.log(persona.edad);

// Arrays
let frutas = ["Manzana", "Naranja", "Plátano"];
console.log(frutas[0]);

// Undefined
let valorSinDefinir;
console.log(valorSinDefinir); // undefined

// Null
let valorNulo = null;

// Symbol
let simbolo = Symbol("id");

// Verificar el tipo de dato con typeof
console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof persona); // "object"
console.log(typeof frutas); // "object"
