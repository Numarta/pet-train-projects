"use strict";
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', (event) => {
    const thisElem = event.target;
    thisElem.classList.add('hold');
    setTimeout(() => thisElem.classList.add('hide'), 0);
});
item.addEventListener('dragend', (event) => {
    const thisElem = event.target;
    thisElem.classList.remove('hide', 'hold');
});
const dragover = (event) => {
    console.log('dragover');
    event.preventDefault();
};
const dragenter = (event) => {
    console.log('dragenter');
    const target = event.target;
    target.classList.add('hovered');
};
const dragleave = (event) => {
    console.log('dragleave');
    const target = event.target;
    target.classList.remove('hovered');
};
const dragdrop = (event) => {
    console.log('dragdrop');
    const target = event.target;
    target.appendChild(item);
    target.classList.remove('hovered');
};
for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}
