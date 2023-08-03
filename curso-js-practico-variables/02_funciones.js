let nombre = 'Omar Alberto'; // string
let apellido = 'Hernandez Rey'; // string
let nombrePlatzi = '@fulanito'; // string
let edad = 30; // number
let altura = 1.75; // float (número con decimales)
let continuarCurso = true; // boolean (true o false)
let esMayorDeEdad = true; // boolean (true o false)
let dineroAhorrado = 1000; // number
let deudas = 5000; // number

//funciones
function nombreCompleto(nombre, apellido) {
    return nombre +' '+ apellido;
}
nombreCompleto(nombre, apellido)


//Diferencia entre parámetros y argumentos

function nombreCompleto(nombre, apellido) {//-----> los parámetros originales que recibe o con los que creamos la función (name, lastName)
    return nombre +' '+ apellido;
}
nombreCompleto('Thiago', 'Hernandez')//---->Los argumentos que enviamos cuando llamamos la función ('Thiago', 'Hernandez')

const name = "Omar Alberto";
const lastname = "Hernandez Rey";
const completeName = name + lastname;
const nickname = "Omar";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
//Mi nombre es Omar Alberto Hernandez Rey, pero prefiero que me digas Omar.//


//### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
function nombreCompleto(name, lastName) {
    return name+' '+lastName;
} 
function saludo(name, lastName, userName) {
    const completeName = nombreCompleto(name, lastName);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + userName + ".");
}
//saludo('Fulano', 'de Tal', 'Futuro');
saludo('Thiago', 'Hernández', 'Thiaguiño')
//Mi nombre es Thiago Hernandez, pero prefiero que me digas Thiaguiño.
