let contador = 0;
let tempo;
let cronometro = 5;
let tempoAcabou = false;
let cronometroIniciado = false;


function EventoClick() {
    if (!cronometroIniciado) {
        Intervalo()
        cronometroIniciado = true;
    }
    if (tempoAcabou) return;

    contador++;
    document.getElementById("contador").textContent = "Total de Cliques: " + contador;
}
function Intervalo() {
    tempo = setInterval(function () {
        cronometro = cronometro - 1; // Decrementa o cronômetro a cada segundo
        document.getElementById('tempo').innerHTML = cronometro;

        if (cronometro <= -1) {
            clearInterval(tempo); // Limpa o intervalo
            tempoAcabou = true; // Define que o tempo acabou
            alert("Sua pontuação foi de " + contador); // Exibe o alerta com a pontuação final
            ReniciarJogo();
        }
    }, 1000);
}

function ReniciarJogo() {
    contador = 0;
    cronometro = 5;
    tempoAcabou = false;
    cronometroIniciado = false;
    document.getElementById("contador").textContent = "Total de Cliques: 0";
    document.getElementById("tempo").textContent = "5";
}

const video = document.getElementById('background-video');
video.muted = false;
video.play();