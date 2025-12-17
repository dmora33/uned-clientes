// Ámbito global
let nombre = "Ana";

function saludar() {
    // Ámbito local
    let saludo = "Hola";
    console.log(saludo + " " + nombre); // Puede acceder a "nombre" desde el ámbito global
}

saludar(); // "Hola Ana"

// Variables let y const tienen alcance de bloque
if (true) {
    let edad = 30;
    console.log(edad); // 30
}
// console.log(edad); // Error, "edad" no está definida fuera del bloque
