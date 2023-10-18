import { moveDown, moveUp } from "./js/movement.js";
import { player1, player2 } from "./js/players.js";
import { keysState } from "./js/keyState.js";
import { placar1, placar2 } from "./js/scores.js";
import { restart } from "./js/restart.js";

document.addEventListener("keydown", (event) => {
  handleKeyDown(event.key);
});

document.addEventListener("keyup", (event) => {
  handleKeyUp(event.key);
});

function handleKeyDown(key) {
  if (key in keysState) {
    keysState[key] = true;
    movePlayers();
  }
}

function handleKeyUp(key) {
  if (key in keysState) {
    keysState[key] = false;
  }
}

function movePlayers() {
  if (keysState.ArrowUp) {
    moveUp(player1);
  }
  if (keysState.ArrowDown) {
    moveDown(player1);
  }
  if (keysState.w) {
    moveUp(player2);
  }
  if (keysState.s) {
    moveDown(player2);
  }
}

const bola = document.querySelector("#ball");
let bolaX = 200;
let bolaY = 200;
let velocidadeX = 4;
let velocidadeY = 4;

function atualizarBola() {
  bolaX += velocidadeX;
  bolaY += velocidadeY;

  const player1Rect = player1.getBoundingClientRect();
  const player2Rect = player2.getBoundingClientRect();
  if (
    bolaX >= 840 &&
    bolaY <= player2Rect.bottom - 190 &&
    bolaY >= player2Rect.top - 220
  ) {
    velocidadeX = -velocidadeX;
  }

  if (
    bolaX <= -80 &&
    bolaY <= player1Rect.bottom - 190 &&
    bolaY >= player1Rect.top - 220
  ) {
    velocidadeX = -velocidadeX;
  }

  if (bolaX >= 865) {
    marcarValor(1);
    const valorPosRestart = restart();
    bolaX = valorPosRestart[0];
    bolaY = valorPosRestart[1];
  }

  if (bolaX <= -100) {
    marcarValor();
    const valorPosRestart = restart();
    bolaX = valorPosRestart[0];
    bolaY = valorPosRestart[1];
  }

  if (bolaY <= 0 || bolaY >= 535) {
    velocidadeY = -velocidadeY;
  }

  bola.style.left = `${bolaX}px`;
  bola.style.top = `${bolaY}px`;
}

function animarBola() {
  setInterval(atualizarBola, 12);
}

animarBola();

function marcarValor(player = 2) {
  if (player == 1) {
    placar1.innerHTML = +placar1.innerHTML + 1;
  } else {
    placar2.innerHTML = +placar2.innerHTML + 1;
  }
}

