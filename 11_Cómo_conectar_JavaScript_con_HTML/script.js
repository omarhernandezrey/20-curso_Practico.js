//Seleccionamos los elementos con los que queremos trabajar
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p_result = document.querySelector('#result');

//btn.addEventListener('evento',);//función o método que escucha ciertos eventos hay que dor argumentos('evento','codigo js que queremos mandar llamar')
/* form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    p_result.innerText = "Resultado: " + sumaInputs;
} */

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(event) {
/*     console.log({event});
    event.preventDefault(); */
    const sumaInputs = input1.value + input2.value;
    p_result.innerText = "Resultado: " + sumaInputs;
}