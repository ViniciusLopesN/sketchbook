const screen = document.querySelector('#screen');
const canvasSize = document.getElementById('myRange');
const sizeDisplay = document.getElementById('sizeDisplay');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clearButton');
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');




colorButton.addEventListener('click', () => {
  colorButton.classList.add('isActive');
  rainbowButton.classList.remove('isActive');
});

rainbowButton.addEventListener('click', () => {
  rainbowButton.classList.add('isActive');
  colorButton.classList.remove('isActive');
});


let isPainting = false;

colorButton.classList.add('isActive');

canvasSize.value = 16;
let color = colorPicker.value;

function printScreen() {
  let ratio = (100/(canvasSize.value)); 

  sizeDisplay.textContent = `${canvasSize.value} x ${canvasSize.value}`;

  for (let index = 0; index < (canvasSize.value*canvasSize.value); index++) {
    const pixel = [];
    pixel[index] = document.createElement('div');
    pixel[index].classList.add('square');
    screen.appendChild(pixel[index]);
    };

  const pixelInfo = document.querySelectorAll('.square');

  for (const info of pixelInfo) {
    info.style.cssText = `flex-basis: ${ratio}%`;
    };
};

document.addEventListener('DOMContentLoaded',printScreen());

canvasSize.addEventListener('input', () => {
  document.getElementById('screen').innerHTML = ' ';
  printScreen();
});


clearButton.addEventListener('click', () => {
  document.getElementById('screen').innerHTML = ' ';
  printScreen();
});

colorPicker.addEventListener('input', () => {
  color = colorPicker.value;
});

function startPainting(event) {
  isPainting = true;
  paint(event);
}

function stopPainting(){
  isPainting = false;
}


function paint(event) {
   if (isPainting && event.target.classList.contains('square')) {
    if (colorButton.classList.contains('isActive')){
    event.target.style.backgroundColor = color;
    }
    else {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      let rainbowColor = '#'+randomColor;
      event.target.style.backgroundColor = rainbowColor;
    }
  }
}

screen.addEventListener('mousedown',startPainting);
screen.addEventListener('mousemove',paint);
screen.addEventListener('mouseup',stopPainting);