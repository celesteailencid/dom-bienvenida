console.log("HOLA MUNDO");

/* EJERCICIO 01

saludo
Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto. */


let nombre = prompt("Ingrese su nombre");

let saludo = document.getElementById("saludo");
saludo.textContent = `Hola ${nombre}, bienvenida al DOM`;

saludo.style.textAlign="center";
saludo.style.fontFamily="calibri";
saludo.style.fontSize="15px";

/* EJERCICIO 02

color
Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color. */

//let bodyWeb = document.getElementById("body");
//let colorAsignado = prompt("Ingrese un color");

//bodyWeb.style.backgroundColor = colorAsignado;

/* EJERCICIO 03

rgb
Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul */

let bodyWeb = document.getElementById("body");
let color1 = prompt("Ingrese un numero del 0 al 255");
let color2 = prompt("Ingrese un numero del 0 al 255");
let color3 = prompt("Ingrese un numero del 0 al 255");

bodyWeb.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;


