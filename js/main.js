
/* 
1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.
*/

let numA = 5;
let numB = 10;

if (numA > numB) {
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

let r = parseFloat(prompt("Escribe el radio aquí"));

let area = PI * (r ** 2);

console.log(area);


/*
5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
debemos indicarlo
*/

let n = parseFloat(prompt("Indica el número"))

let answer = n % 2 == 0 ? "Si " : "No "
//operador ternario

console.log(answer, "es divisible entre 2");


/*6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21% */

let numero = parseFloat(prompt("Introduce el precio del producto"));

let conIva = numero + (numero * 0.21)

//IVA del 21% --> para calcularlo se multiplica por  0.21

console.log("El precio de tu producto con IVA es", conIva)


/*
7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.
*/

let num = 0;

while (num <= 100) {
    console.log(num);
    num++;
}

/*
8. Haz el mismo ejercicio anterior con un bucle for.
*/

for (let i = 1; i <= 100; i++) {
    console.log(i)
}

/*
9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle que desees.
*/

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        console.log(i, "es divisible entre 2")
    }
    else if (i % 3 === 0) {
        console.log(i, "es divisible entre 3")
    }
    else if (i % 2 === 0 && i % 3 === 0) {
        console.log(i, "es divisible entre 2 y 3")
    }
    else {
        console.log(i, "no es divisible ni por 2 ni por 3")
    }
}

/*
10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.
*/
let nVentas = parseInt(prompt("Cuantas"))
total = 0

for(let i = 0; 
        i < nVentas;
        i++){
            total += parseInt(prompt("Dime cuánto ha costado"))
        }
console.log(total)

/*
11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. Usa un switch para ello.
*/

let dia = prompt("dime un dia")

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("es laborable")

    break;

    case "sabado":
    case "domingo":
        console.log("es fin de semana")
        
    break;

    default: /*si introduce algo que no sea un día de la semana*/
        console.log("introduce un dato valido")

}


/* 
12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
condición de salida (3 intentos y si acierta sale, aunque le queden intentos)
*/

