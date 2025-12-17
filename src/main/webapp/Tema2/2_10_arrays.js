let frutas = ["Manzana", "Plátano", "Naranja"];

// Acceder a elementos
console.log(frutas[0]); // "Manzana"

// Agregar un elemento al final
frutas.push("Fresa");
console.log(frutas); // ["Manzana", "Plátano", "Naranja", "Fresa"]

// Eliminar el último elemento
frutas.pop();
console.log(frutas); // ["Manzana", "Plátano", "Naranja"]

// Recorrer un array
frutas.forEach(fruta => {
    console.log(fruta);
});

// Añadir una fruta al principio del array
frutas.unshift("Fresa");

// Eliminar una fruta al principio del array
frutas.shift("Fresa");

// Eliminar una fruta en concreto
delete frutas[2];

console.log(frutas); 
// Resultado: ["Fresa", "Manzana", "Plátano", "Naranja"]
