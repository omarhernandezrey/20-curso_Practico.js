//Seleccionamos los elementos con los que queremos trabajar
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p_result = document.querySelector('#result');

//Escuchar los eventos de lo que pase cin inputs y botones
function btnOnclick() {
    console.log('Escuchando el evento de click');
    const sumaInputs = input1.value + input2.value;
    p_result.innerText = "Resultado: " + sumaInputs;
}