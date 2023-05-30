const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'orange', 'white'];

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
  const colorSquare = getRandomColor();
  element.style.backgroundColor = colorSquare;
  element.style.boxShadow = `0 0 2px ${colorSquare}, 0 0 10px ${colorSquare}`;
}

function removeColor(element: HTMLElement) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}

