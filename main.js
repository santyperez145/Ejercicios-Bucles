// Ejercicio 1 //
let numero = prompt("ingrese un numero")
console.log("Tabla de multiplicar del numero " + numero + ":");

let i = 1;
while (i<=10){
let resultado = numero * i;
console.log(numero + " x " + i + " = " + resultado);
i++;

}

// Ejercicio 2 //

let acumulador = 0;
let numeroEj2;

do {
  numero = prompt("Ingrese un número o 0 para salir:");

  if (numeroEj2 !== 0 && !isNaN(numeroEj2)) {
    acumulador += numeroEj2;
  }
} while (numeroEj2 !== 0);

console.log("La suma total es:", acumulador);

// Ejercicio 3 //

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

console.log("el numero secreto es:", numeroSecreto);

while (!adivinado) {
  let numeroEj3 = prompt("Ingrese un numero entre 1 y 100");

  if (isNaN(numeroEj3)) {
    console.log("Por favor, ingrese un numero valido");
    continue;
  }

  intentos++;

  if (numeroEj3 > numeroSecreto) {
    console.log("El numero ingresado es mayor, intenta de nuevo");
  } else if (numeroEj3 < numeroSecreto) {
    console.log("El numero ingresado es menor, intenta de nuevo");
  } else {
    adivinado = true;
  }
}

alert(`Felicitaciones, Adivinaste el numero ${numeroSecreto} en ${intentos} intentos.`);

// Ejercicio 4 //

let numeroEj4 = prompt("Ingrese un numero");
let divisores = [];

for(let i = 1; i <= numeroEj4; i++){
    if (numeroEj4 % i === 0){
        divisores.push(i);
    }
}
console.log("los divisores de", numeroEj4, "son:", divisores);

// Ejercicio 5 //

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let elemento of array) {
  console.log(elemento);
}

// Ejercicio 6 //

for (let i = 0; i < array.length; i++) {
  let resultado = array[i] * 2;
  console.log("El doble de", array[i], "es", resultado);
}

// Ejercicio 7 //
const familia = [
    { nombre: "Fernando", edad: 50, rol: "padre", ciudad: "La Rioja" },
    { nombre: "Karima", edad: 45, rol: "madre", ciudad: "La Rioja" },
    { nombre: "Santiago", edad: 20, rol: "hijo", ciudad: "La Rioja" },
    { nombre: "Luca", edad: 18, rol: "hijo", ciudad: "La Rioja" },
    { nombre: "Guillermo", edad: 88, rol: "abuelo", ciudad: "La Rioja" }
  ];
  
  for (let persona of familia) {
    console.log(`Hola soy, ${persona.nombre}`);
    console.log(`Tengo ${persona.edad} Años y soy el/la ${persona.rol}`);
    console.log(`Vivo en ${persona.ciudad}`);
  }

  // Ejercicio 8 //
  const array2 = [2, 5, 8, 9, 12, 15, 18, 21, 24, 27];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 !== 0) {
    console.log(array2[i]);
  }
}

// Ejercicio 9 //

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}

// Ejercicio 10 //

let numerosEj9;
let sumaPares = 0;
let sumaImpares = 0;

while (true) {
  numerosEj9 = prompt("Ingrese un numero o 0 para finalizar:");

  if (numerosEj9 === 0) {
    break;
  }

  if (numero % 2 === 0) {
    sumaPares += numerosEj9;
  } else {
    sumaImpares += numerosEj9;
  }
}

console.log("La suma de los numeros pares es: " + sumaPares);
console.log("La suma de los numeros impares es: " + sumaImpares);

// Ejercicio 11 //

const numerosEj11 = [15, 7, 23, 10, 45, 8, 17, 32, 12, 6];
let numeroMasGrande = numerosEj11[0];

for (let i = 1; i < numeros.length; i++) {
  if (numerosEj11[i] > numeroMasGrande) {
    numeroMasGrande = numerosEj11[i];
  }
}

console.log("El numero más grande es: " + numeroMasGrande);

