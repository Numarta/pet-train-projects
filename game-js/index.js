"use strict";
const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
    board?.appendChild(square);
}
function setColor(element) {
    element.style.backgroundColor = 'red';
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
}
