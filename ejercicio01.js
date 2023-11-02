// Ejercicio 1 

const conductor = 'Leandro';
const edad = prompt('Ingresa su edad');
let edadIngresada = parseInt(edad)


if (edad > 18) {
    console.log(`${conductor} es mayor de edad, puede conducir`);
} else {
    console.log(`${conductor} no puede conducir `);
}