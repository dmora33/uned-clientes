// Crear un objeto
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    arrancar: function() {
        console.log("El coche está en marcha");
    }
};

// Acceder a las propiedades
console.log(coche.marca); // "Toyota"

// Llamar a un método
coche.arrancar(); // "El coche está en marcha"

// Agregar propiedades dinámicamente
coche.color = "Rojo";
console.log(coche.color); // "Rojo"

// Acceso mediante corchetes
console.log(coche['modelo']); // "Corolla"
