// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreDeAmigos = [];


document.getElementById(amigo);
function agregarAmigo() {
    let amigo = document.getElementById(amigo).value;
    nombreDeAmigos.push(amigo);
    console.log(nombreDeAmigos);
}

function mostrarAmigos() {
    let amigos = document.getElementById('amigos');
    amigos.innerHTML = nombreDeAmigos;
}

function buscarAmigo() {
    let amigo = document.getElementById('amigo').value;
    let amigos = document.getElementById('amigos');
    amigos.innerHTML = nombreDeAmigos;
    if (nombreDeAmigos.includes(amigo)) {
        amigos.innerHTML = 'Tu amigo está en la lista';
    } else {
        amigos.innerHTML = 'Tu amigo no está en la lista';
    }
}

