// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const nombresLista = document.getElementById('nombresLista');
const sortearBtn = document.getElementById('sortearBtn');
const resultado = document.getElementById('resultado');

let nombres = [];

agregarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  nombres.push(nombre);
  nombreInput.value = '';
  mostrarLista();
});

sortearBtn.addEventListener('click', () => {
  if (nombres.length === 0) {
    alert('No hay nombres para sortear.');
    return;
  }

  const ganador = nombres[Math.floor(Math.random() * nombres.length)];
  resultado.textContent = `¡El amigo secreto es: ${ganador}!`;
});

function mostrarLista() {
  nombresLista.innerHTML = '';
  nombres.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    nombresLista.appendChild(li);
  });
}
