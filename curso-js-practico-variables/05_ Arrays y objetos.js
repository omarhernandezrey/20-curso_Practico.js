//### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
//- ¿Qué es un array?
const array = [1, 'jajaja',true, false, {nombre: 'lala', edad: 3}];

//- ¿Qué es un objeto?
const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['pollo frito', 'vegetales'],
};

// ### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}
//undefined

imprimirPrimerElementoArray(['Juanita','Rigoberto','Natilla'])
//Juanita

function imprimirPrimerElementoArray(arr) {
    console.log(arr[1])
}
// Rigoberto
imprimirPrimerElementoArray(['Juanita','Rigoberto','Natilla'])
// Rigoberto

// Si quisiéramos imprimir todos los arrays de un arreglo
console.log(['Juanita','Rigoberto','Natilla'])
//(3) ['Juanita', 'Rigoberto', 'Natilla']

// ### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

// Si quisiéramos imprimir todos los arrays de un arreglo
console.log(['Juanita','Rigoberto','Natilla'])
//(3) ['Juanita', 'Rigoberto', 'Natilla']
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//undefined

imprimirElementoPorElemento(['Juanita','Rigoberto','Natilla'])
```
Juanita
Rigoberto
Natilla
undefined
```

//### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```
const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['pollo frito', 'vegetales'],
};
```
```
obj
//{nombre: 'fulanito', edad: 3, comidasFavoritas: Array(2)}
```
```
// Se crea un objeto llamado 'obj' con tres propiedades y sus respectivos valores.
const obj = {
    nombre: 'fulanito', // Propiedad 'nombre' con valor 'fulanito' (tipo string).
    edad: 3, // Propiedad 'edad' con valor 3 (tipo number).
    comidasFavoritas: ['pollo frito', 'vegetales'], // Propiedad 'comidasFavoritas' con un arreglo de comidas favoritas.
};

// Se muestra el objeto 'obj' en la consola, mostrando sus propiedades y valores.
console.log(obj);
// Resultado: {nombre: 'fulanito', edad: 3, comidasFavoritas: Array(2)}

// Se accede a las propiedades del objeto 'obj' individualmente:
console.log(obj.nombre); // Resultado: 'fulanito' (valor de la propiedad 'nombre')
console.log(obj.edad);   // Resultado: 3 (valor de la propiedad 'edad')
console.log(obj.comidasFavoritas); // Resultado: ['pollo frito', 'vegetales'] (arreglo almacenado en la propiedad 'comidasFavoritas')

// Se utiliza Object.values(obj) para obtener los valores del objeto 'obj' en un arreglo.
const arr = Object.values(obj); // Resultado: ['fulanito', 3, ['pollo frito', 'vegetales']]

// Se define una función llamada 'imprimirElementoPorElementoObjeto' que recibe un objeto como parámetro.
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