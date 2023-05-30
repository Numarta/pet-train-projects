const startBtn = document.querySelector('#start') as HTMLElement;
const screens = document.querySelectorAll('.screen');
let score = 0;

const timeList = document.querySelector('#time-list') as HTMLElement;
let time = 0;
const timeEl = document.querySelector('#time') as HTMLElement;
const board = document.querySelector('#board') as HTMLElement;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('time-btn')) {
    time = parseInt(target.getAttribute('data-time') as string);
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('circle')) {
    score++;
    target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = parseInt(`0${current}`);
    }
    setTime(current);
  }
}

function setTime(value: number) {
  timeEl.innerHTML = `00 : ${value}`;
}

function finishGame() {
  let parent = timeEl.parentNode as HTMLElement;

  parent.classList.add('hide');

  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 78);

  circle.classList.add('circle');

  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
