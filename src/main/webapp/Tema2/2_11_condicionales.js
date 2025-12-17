let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Operador ternario
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);


let fechaActual = new Date();
let mes = fechaActual.getMonth(); // Obtiene el mes actual (0 = enero, 1 = febrero, ...)

// Verificar si estamos en la primera mitad o segunda mitad del año usando if, else if y else
if (mes >= 0 && mes <= 5) {  // De enero (0) a junio (5)
    console.log("Estamos en la primera mitad del año.");
} else if (mes >= 6 && mes <= 10) {  // De julio (6) a noviembre (10)
    console.log("Estamos en la segunda mitad del año.");
} else {
    console.log("Es diciembre, ¡el último mes del año!");
}

switch (mes) {
    case 0:  // Enero
        console.log("Es enero, el primer mes del año.");
        break;
    case 1:  // Febrero
        console.log("Es febrero, el mes más corto del año.");
        break;
    case 6:  // Julio
        console.log("Es julio, mitad de año.");
        break;
    case 11:  // Diciembre
        console.log("Es diciembre, ¡felices fiestas!");
        break;
    default:
        console.log("Estamos en algún otro mes del año.");
}
