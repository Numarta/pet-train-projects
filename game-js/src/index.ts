const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square: HTMLElement = document.createElement('div');
  square.className = 'square';
  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board?.appendChild(square);
}

function setColor(element: HTMLElement) {
  element.style.backgroundColor = 'red';
}

function removeColor(element: HTMLElement) {
  element.style.backgroundColor = '#1d1d1d';
}
