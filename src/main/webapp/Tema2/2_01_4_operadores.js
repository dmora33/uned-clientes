// 1. Operadores Lógicos

let a = true;
let b = false;
console.log(a && b); // AND lógico: false, ambas condiciones deben ser verdaderas
console.log(a || b); // OR lógico: true, al menos una condición es verdadera
console.log(!a);     // NOT lógico: false, invierte el valor booleano

// 2. Operadores de Asignación

let x = 10; // Asignación simple

x += 3;  // Asignación de suma: x = x + 3
console.log(x); // 13

x -= 2;  // Asignación de resta: x = x - 2
console.log(x); // 11

x *= 2;  // Asignación de multiplicación: x = x * 2
console.log(x); // 22

x /= 2;  // Asignación de división: x = x / 2
console.log(x); // 11

// 3. Operadores Aritméticos

let suma = 5 + 3;  // Suma: 5 + 3
console.log(suma); // 8

let resta = 5 - 3; // Resta: 5 - 3
console.log(resta); // 2

let multiplicacion = 5 * 3;  // Multiplicación: 5 * 3
console.log(multiplicacion); // 15

let division = 6 / 2; // División: 6 / 2
console.log(division); // 3

let modulo = 7 % 2;   // Módulo (resto de la división): 7 % 2
console.log(modulo);  // 1

let incremento = 5;
incremento++;  // Incremento: incremento + 1
console.log(incremento); // 6

let decremento = 5;
decremento--;  // Decremento: decremento - 1
console.log(decremento); // 4

// 4. Operadores de Strings

let str1 = "Hola";
let str2 = "Mundo";
let concatenacion = str1 + " " + str2;  // Concatenación: "Hola" + " " + "Mundo"
console.log(concatenacion); // "Hola Mundo"

let str = "Hola";
str += " Mundo";  // Concatenación con asignación: str = str + " Mundo"
console.log(str); // "Hola Mundo"

// 5. Operadores de Tipo

let num = 42;
let texto = "Hola";

console.log(typeof num);  // typeof: Retorna el tipo de la variable (number)
console.log(typeof texto);  // typeof: Retorna el tipo de la variable (string)

let arr = [];
console.log(arr instanceof Array);  // instanceof: Verifica si arr es una instancia de Array (true)
console.log(arr instanceof Object); // instanceof: Verifica si arr es una instancia de Object (true)

// Ejemplo Final Combinado

// Asignación y Operador Aritmético
let z = 10;
z += 5; // z = z + 5

// Operador Lógico
let resultado = (z > 10) && (z < 20);

// Concatenación de Strings
let frase = "El valor de z es " + z + " y la condición resultado es " + resultado;

// Operador de Tipo y Instanceof
console.log(typeof z); // "number"
console.log(typeof frase); // "string"
console.log([] instanceof Array); // true
console.log(frase); // "El valor de z es 15 y la condición resultado es true"
