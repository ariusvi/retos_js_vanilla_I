/* 
1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.
*/

let numA = 5
let numB = 10

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

let myName = "Ana"

console.log("Bienvenido " + myName);