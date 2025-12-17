// Bucle for
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
}

// Bucle while
let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

let numeros = [10, 20, 30];

// Bucle for para recorrer un array
for (let i = 0; i < Array.length; i++){
    console.log(numeros[i]);
}

// Bucle forEach para recorrer un array
numeros.forEach(numero => {
    console.log(numero);
});

// Definir un objeto con varias propiedades
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Rojo"
};

// Usar for...in para iterar sobre las propiedades del objeto
for (let propiedad in coche) {
    console.log(`${propiedad}: ${coche[propiedad]}`);
}
