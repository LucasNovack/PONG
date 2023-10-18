export function moveDown(elem) {
  const coordenada = +getCoordenada(elem).slice(0, -2);
  console.log(coordenada);
  if (coordenada < 394.5) {
    elem.style.marginTop = `${coordenada + 59.2}px`;
  }
}

export function moveUp(elem) {
  const coordenada = +getCoordenada(elem).slice(0, -2);
  if (coordenada > 0) {
    elem.style.marginTop = `${coordenada - 59.2}px`;
  }
}

function getCoordenada(elem) {
  return window.getComputedStyle(elem)?.getPropertyValue("margin-top");
}
