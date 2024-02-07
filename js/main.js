
/* 
1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.
*/

let numA = 5;
let numB = 10;

if(numA > numB) {
    console.log("el primer número es mayor que el segundo número");
} else if (numA < numB) {
    console.log("el primer número es menor que el segundo");
} else if (numA === numB) {
    console.log("ambos números son iguales");
}


/*
2.  Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”
*/

let myName = "Ana";

console.log("Bienvenido " + myName);


/* 
3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
(recuerda usar prompt). 
*/

const nombre = prompt("¿Cuál es tu nombre?");

console.log("Bienvenido " + nombre);


/*
4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.
*/

const PI = 3.1415;

let r = parseFloat(prompt ("Escribe el radio aquí"));

let area = PI * (r**2);

console.log(area);
