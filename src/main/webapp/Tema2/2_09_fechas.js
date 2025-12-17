// Crear una nueva fecha
let fechaActual = new Date();
console.log(fechaActual); // Fecha y hora actuales

// Crear una fecha específica Date(año, mes, día, horas, minutos, segundos, milisengundos)
let fechaNacimiento = new Date(1990, 6, 15); // 15 de julio de 1990
fechaNacimiento = new Date("1990/6/15"); // Formato corto
fechaNacimiento = new Date("1990/6/15"); // Formato largo
fechaNacimiento = new Date("Wed Oct 02 2024 12:50:00 GMT+0200"); // Formato largo
fechaNacimiento = new Date("1990-6-15"); // Formato ISO

// Métodos comunes de Date
console.log(fechaActual.getFullYear()); // Año actual
console.log(fechaActual.getMonth()); // Mes actual (0-11)
console.log(fechaActual.getDate()); // Día del mes actual
console.log(fechaActual.toString()); // Fecha convertida en cadena de caracteres