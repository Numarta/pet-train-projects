const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.down-button') as HTMLElement;
const mainSlide = document.querySelector('.main-slide') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh)`;

type Direction = 'up' | 'down';

upButton?.addEventListener('click', () => {
  changeSlide('up');
});

downButton?.addEventListener('click', () => {
  changeSlide('down');
});

const changeSlide = (direction: Direction) => {
  if (direction === 'up') {
    if (activeSlideIndex === slidesCount - 1) {
      activeSlideIndex = 0;
    } else {
      activeSlideIndex++;
    }
  } else {
    if (activeSlideIndex === slidesCount + 1) {
      activeSlideIndex = 0;
    } else {
      activeSlideIndex--;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};
