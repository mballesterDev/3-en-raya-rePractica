const botones = document.querySelectorAll('#btn');
const mensajes = document.querySelector('.mensajes');
const reiniciar = document.querySelector('#reiniciar');

console.log(botones[1]);
let contador = 0;
let juegoEnCurso = true;


botones.forEach(btn => {
    btn.addEventListener('click', function () {
        if (juegoEnCurso) {
            if (contador % 2 === 0) {
                btn.style.backgroundColor = 'red';

            } else {
                btn.style.backgroundColor = 'lightgreen';

            }
            contador++;
            comprobarGanador();
        }
    })
});


function comprobarGanador() {

    const posicionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < posicionesGanadoras.length; i++) {
        const [a, b, c] = posicionesGanadoras[i];

        if (botones[a].style.backgroundColor === 'red' && botones[b].style.backgroundColor === 'red' && botones[c].style.backgroundColor === 'red') {
            mensajeGanador('Ha ganado el rojo !')
            juegoEnCurso = false;
        } else if (botones[a].style.backgroundColor === 'lightgreen' && botones[b].style.backgroundColor === 'lightgreen' && botones[c].style.backgroundColor === 'lightgreen') {
            mensajeGanador('Ha ganado el verde !')
            juegoEnCurso = false;
        }
    }
}

function mensajeGanador(mensaje) {

    const mensajeGanador = document.createElement('h3');
    mensajeGanador.textContent = (mensaje);
    mensajeGanador.classList.add("txtGanador");
    mensajes.appendChild(mensajeGanador);
}


reiniciar.addEventListener('click', function () {
    botones.forEach(btn => {
        btn.style.backgroundColor = 'white'
    })

    const EliminarMensajeGnador = document.querySelector('.txtGanador');
    EliminarMensajeGnador.remove();

    juegoEnCurso = true;
    contador = 0;
})



