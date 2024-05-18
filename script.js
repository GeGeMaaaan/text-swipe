/* script.js */
let startY;
let isMouseDown = false;

const swipeBlock = document.getElementById('swipeBlock');

function handleTouchStart(event) {
    const touch = event.touches[0];
    startY = touch.clientY;
}

function handleTouchMove(event) {
    if (event.changedTouches && event.changedTouches.length) {
        const touch = event.changedTouches[0];
        const endY = touch.clientY;
        const deltaY = startY - endY;

        if (deltaY > 30) { // Свайп вверх на 30 пикселей
            swipeBlock.classList.add('visible'); // Показываем блок
        } else if (deltaY < -30) { // Свайп вниз на 30 пикселей
            swipeBlock.classList.remove('visible'); // Скрываем часть блока
        }
    }
}

function handleTouchEnd() {
    startY = null;
}

function handleMouseDown(event) {
    isMouseDown = true;
    startY = event.clientY;
}

function handleMouseMove(event) {
    if (isMouseDown) {
        const endY = event.clientY;
        const deltaY = startY - endY;

        if (deltaY > 30) { // Свайп вверх на 30 пикселей
            swipeBlock.classList.add('visible'); // Показываем блок
        } else if (deltaY < -30) { // Свайп вниз на 30 пикселей
            swipeBlock.classList.remove('visible'); // Скрываем часть блока
        }
    }
}

function handleMouseUp() {
    isMouseDown = false;
    startY = null;
}

swipeBlock.addEventListener('touchstart', handleTouchStart, false);
swipeBlock.addEventListener('touchmove', handleTouchMove, false);
swipeBlock.addEventListener('touchend', handleTouchEnd, false);

swipeBlock.addEventListener('mousedown', handleMouseDown, false);
document.addEventListener('mousemove', handleMouseMove, false);
document.addEventListener('mouseup', handleMouseUp, false);
