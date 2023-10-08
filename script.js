import { moveDown, moveUp } from './js/movement.js';
import { keysState } from './js/keyState.js';

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const placar1 = document.querySelector('#score1')
const placar2 = document.querySelector('#score2')

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


  if(bolaX >= 880){
    marcarValor(1)
    const player2Coord = player2.getBoundingClientRect()
    debugger
    const valorPosRestart = restart()
    bolaX = valorPosRestart[0]
    bolaY = valorPosRestart[1]
  }

  if(bolaX <= -130){
    marcarValor()
    const valorPosRestart = restart()
    bolaX = valorPosRestart[0]
    bolaY = valorPosRestart[1]
  }

  if (bolaY <= 0 ||  bolaY >= 580){
    velocidadeY = -velocidadeY;
  }

  bola.style.left = `${bolaX}px`;
  bola.style.top = `${bolaY}px`;
}

function animarBola() {
  setInterval(atualizarBola, 16);
}

animarBola();


function marcarValor(player = 2){
  if(player == 1){
    placar1.innerHTML = +placar1.innerHTML + 1
  } else{
    placar2.innerHTML = +placar2.innerHTML + 1
  }
}

function restart(){
  return [400, 250];
}