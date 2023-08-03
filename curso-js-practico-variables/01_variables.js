// variables: var, let, const
let nombre = 'Omar'; // Definimos una variable "nombre" y le asignamos el valor 'Omar'
nombre = 'Omar Alberto'; // Ahora cambiamos el valor de la variable "nombre" a 'Omar Alberto'

const apellido = 'Hernandez'; // Definimos una constante "apellido" y le asignamos el valor 'Hernandez'
apellido = 'Hernandez Rey'; // Error: No podemos cambiar el valor de una constante.

// Diferencia entre sumar números y concatenar strings
let sumaStrings = "Hola, " + "Omar";
// Resultado: "Hola, Omar" (concatenación)

// Tipos de datos para almacenar en variables
let name = 'Omar'; // string
let last_name = 'Hernandez'; // string
let nombrePlatzi = '@fulanito'; // string
let edad = 30; // number
let altura = 1.75; // float (número con decimales)
let continuarCurso = true; // boolean (true o false)
let esMayorDeEdad = true; // boolean (true o false)
let dineroAhorrado = 1000; // number
let deudas = 5000; // number

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto); // Resultado: "Omar Hernandez"

// Dinero real (dinero ahorrado menos deudas)
let dineroReal = dineroAhorrado - deudas;
console.log(dineroReal); // Resultado: -4000 (1000 - 5000)
