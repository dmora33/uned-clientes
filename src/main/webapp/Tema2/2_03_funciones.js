// Declaración de una función
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Llamada a la función
console.log(saludar("Juan")); // "Hola, Juan!"

// Función como expresión
const suma = function(a, b) {
    return a + b;
};

console.log(suma(5, 3)); // 8

// Funciones flecha (Arrow functions)
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // 20
