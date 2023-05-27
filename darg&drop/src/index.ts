const item = document.querySelector('.item') as HTMLElement;
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', (event) => {
  const thisElem = event.target as HTMLElement;
  thisElem.classList.add('hold');
  setTimeout(() => thisElem.classList.add('hide'), 0);
});

item.addEventListener('dragend', (event) => {
  const thisElem = event.target as HTMLElement;
  thisElem.classList.remove('hide', 'hold');
});

const dragover = (event: Event) => {
  console.log('dragover');
  event.preventDefault();
};

const dragenter = (event: Event) => {
  console.log('dragenter');
  const target = event.target as HTMLElement;
  target.classList.add('hovered');
};

const dragleave = (event: Event) => {
  console.log('dragleave');
  const target = event.target as HTMLElement;
  target.classList.remove('hovered');
};

const dragdrop = (event: Event) => {
  console.log('dragdrop');
  const target = event.target as HTMLElement;

  target.appendChild(item);
  target.classList.remove('hovered');
};

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}
