export function moveDown(elem) {
    const coordenada = +getCoordenada(elem).slice(0, -2);
    elem.style.marginTop = `${coordenada + 30}px`;
  }
  
export function moveUp(elem) {
    const coordenada = +getCoordenada(elem).slice(0, -2);
    elem.style.marginTop = `${coordenada - 30}px`;
  }
  
function getCoordenada(elem) {
    return window.getComputedStyle(elem)?.getPropertyValue("margin-top");
  }
  