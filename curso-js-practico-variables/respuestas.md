## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajitas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
    Las funciones nos permiten (guardar) bloques de código para reutilizarlos y así evitar duplicación de código, reducir el tiempo de desarrollo y mantener nuestros programas más limpios.

- ¿Cuándo me sirve usar una función en mi código?
    Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros o argumentos )que podemos encapsular para reutilizar código en el futuro.
    También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    Las funciones reciben parámetros cuando las creamos y les enviamos argumentos cuando las ejecutamos.


### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
function saludo(name, lastName, userName) {
    const completeName = nombreCompleto(name, lastName);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + userName + ".");
}

```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    Es la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.


- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    if (else y else if), switch
    El condicional if (con else y else if) nos permite hacer validaciones totalmente distintas con el condicional. En cambio en switch se comparan con la misma variable o condición que definimos en el switch.


- ¿Puedo combinar funciones y condicionales?

Si. Las funciones pueden encapsular cualquier bloque de código incluido condicionales. 

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
```js
//Condicional replicar 
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else{
    console.log("Solo puedes tomar los cursos gratis");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```
function conseguirTipoSuscripcion(suscripción) {
    if (suscripción == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if(suscripción == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if(suscripción == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if(suscripción == "ExpertPlus"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }else{
        console.warn("Solo puedes tomar los cursos gratis");
    }
}

conseguirTipoSuscripcion('Free')
//Solo puedes tomar los cursos gratis

conseguirTipoSuscripcion("Basic")
//Puedes tomar casi todos los cursos de Platzi durante un mes

conseguirTipoSuscripcion('lalala')
//Solo puedes tomar los cursos gratis
```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional. 😏
```js
const tiposDeSuscripciones = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Premium :'Tú y alguien más pueden tomar TODOS los cursos de Platzi',
    ExpertPlus:' Puedes tomar TODOS los cursos de Platzi durante un año'
}
tiposDeSuscripciones.Free
//'Solo puedes tomar los cursos gratis'
tiposDeSuscripciones.Premium
//'Tú y alguien más pueden tomar TODOS los cursos de Platzi'
tiposDeSuscripciones['Free' ]
//'Solo puedes tomar los cursos gratis'
const ejemploSuscripciones = 'Free'
//undefined
tiposDeSuscripciones[ejemploSuscripciones]
//'Solo puedes tomar los cursos gratis'


function consegirTipoSuscripcion(suscripción) {
    if (tiposDeSuscripciones[suscripción]) {
        console.log(tiposDeSuscripciones[suscripción]);
        return;
    }
    console.warn('Este tipo de Suscripcion no existe');
}
consegirTipoSuscripcion('Free')
//Solo puedes tomar los cursos gratis
consegirTipoSuscripcion('ExpertPlus')
//Puedes tomar TODOS los cursos de Platzi durante un año
consegirTipoSuscripcion('lalala')
// Este tipo de Suscripcion no existe
```


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.


- ¿Qué tipos de ciclos existen en JavaScript?

    for, while, do while.

- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validación de nuestros condicional nunca se cumple y termina rompiéndose (dañando) la aplicación (e.j. cuando el navegador ya no puede mas de tanta ejecución de ese bloque de código).
   

- ¿Puedo mezclar ciclos y condicionales?

    Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar condicionales dentro del ciclo

### 2️⃣ Replica el comportamiento de los siguientes ciclos **** for **utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
```
//for
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
//while
let i = 0

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}

//for
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//while
let a = 10;

while (a >= 2) {
    console.log("El valor de a es: " + a);
    a--
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
```js
let respuesta;

while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2 + 2')
    respuesta = pregunta;
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

    Una lista de elementos

    ```js
    const array = [1, 'jajaja',true, false, {nombre: 'lala', edad: 3}];
    ```

- ¿Qué es un objeto?

    Es una lista de elemento pero cada elemento tiene un nombre clave.
    ```js
    const obj = {
        nombre: 'fulanito',
        edad: 3,
        comidasFavoritas: ['pollo frito', 'vegetales'],
    };
    ```
- ¿Cuándo es mejor usar objetos o arrays?

    Arrays cuando lo que aremos en un elemento es lo mismo que en todos los demás (La regla se puede cumplir). Mientras que un objeto cuando los nombres de cada elementos son importantes para nuestro algoritmos.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    Si los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}
//undefined

imprimirPrimerElementoArray(['Juanita','Rigoberto','Natilla'])
//Juanita
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


// Se define una función llamada 'imprimirElementoPorElementoObjeto' que recibe un objeto como parámetro.
```js
function imprimirElementoPorElementoObjeto(obj) {
    // Se obtiene un arreglo 'arr' con los valores del objeto 'obj' usando Object.values(obj).
    const arr = Object.values(obj);
    // Se recorre el arreglo 'arr' con un bucle for.
    for (let i = 0; i < arr.length; i++) {
        // Se muestra en la consola cada elemento del arreglo 'arr'.
        console.log(arr[i]);
    }
}

// Se llama a la función 'imprimirElementoPorElementoObjeto' y se pasa el objeto 'obj' como argumento.
imprimirElementoPorElementoObjeto(obj);
// Resultado:
// fulanito
// 3
// (2) ['pollo frito', 'vegetales']
```