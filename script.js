const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const p_id = document.getElementById('p_id');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    p_id,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "455"

//Crear elemento desde cero
console.log(document.createElement('img'));
//como ver la imagen el la pagina con js
const img = document.createElement('img')
img.setAttribute('src', 'https://www.elpais.com.co/resizer/BFjzIKlKant9Dr6cqg5OUmuGy88=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/N2S6SUQH65DDPB57IZX5BTBPKI.jpg');
console.log(img);
p_id.innerHTML  = "";
p_id.appendChild(img);