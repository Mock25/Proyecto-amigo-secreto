// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombreInput = document.getElementById('amigo');
const agregarBtn = document.querySelector('.button-add');
const nombresLista = document.getElementById('listaAmigos');
const sortearBtn = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

let nombres = [];

function agregarAmigo() {
  const nombre = nombreInput.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  nombres.push(nombre);
  nombreInput.value = '';
  mostrarLista();
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert('No hay nombres para sortear.');
    return;
  }

  const ganador = nombres[Math.floor(Math.random() * nombres.length)];
  resultado.innerHTML = `<li>¡El amigo secreto es: ${ganador}!</li>`;
}

function mostrarLista() {
  nombresLista.innerHTML = '';
  nombres.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    nombresLista.appendChild(li);
  });
}
