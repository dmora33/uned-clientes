// Regla 1 - Las variables se declaran con let o const si son constantes. También existe var, no se recomienda su uso: https://es.javascript.info/var
let variable;

// Regla 2 - El operador de asiganción es el igual
let constante;

// Regla 3 - Punto y coma siempre al final
let a = "Hola";

// Regla 4 - punto para los decimales
let x = 4;
let pi = 3.14;

// Regla 5 - Literales entre comillas simples, dobles o acentos graves
let s1 = 'comillas simples';
let s2 = "comillas dobles";
let s3 = `acentos graves`;
    // Los acentos graves nos permiten incorporar expresiones dentro del string envolviendolas entre ${_}
let s4 = `calculo de una suma dentro de una cadena ${x+pi}`;
console.log(s4);

// Regla 6 - Se pueden usar los siguientes operadores aritméticos: + - * /
x = (5*4)/(2-1)+3;

// Regla 7 - También podemos usar variables
let resultado = x*pi/3;

// Regla 8 - Los comentarios pueden ser de línea o de bloque
/* Este comentario
es un comentario
de bloque
*/

// Regla 9 - Los nombres de variables, funciones, ... en javascript comienzan por letras, $ o _. Nunca por números
let $valido;
let _valido;

// Regla 10 - JS es sensible a mayúsculas y minúsculas
let Nombre;
let nombre;
