const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
const headers = document.querySelectorAll('.header');

const styles = document.querySelector(':root') as Element;
let counter = 1;

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('slide_active');
  });
}

slides.forEach((elem) => {
  const numb = `--image-${counter}`;
  elem.style.backgroundImage = `url(${getComputedStyle(styles).getPropertyValue(numb)})`;
  counter++;

  elem.addEventListener('click', () => {
    console.log(elem);
    clearActiveClasses();
    elem.classList.add('slide_active');
  });
});
