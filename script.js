const screen = document.querySelector('#screen');
const canvasSize = document.getElementById('myRange');
const sizeDisplay = document.getElementById('sizeDisplay');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clearButton');
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const darkenButton = document.getElementById('darkenButton');


const actionButton = document.querySelectorAll('.actionButton');

for (let button of actionButton) {
  button.addEventListener('click', () => {
  actionButton.forEach(button => {
    button.classList.remove('isActive');
  });
  button.classList.add('isActive');
  });
};



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
    info.style.flexBasis = ratio + "%";
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


function string_between_strings(startStr, endStr, str) { //I imported this function to get a substring inside a string
  pos = str.indexOf(startStr) + startStr.length;
  return str.substring(pos, str.indexOf(endStr, pos));
}


function paint(event) {
   if (isPainting && event.target.classList.contains('square')) {
    if (colorButton.classList.contains('isActive')) {
    event.target.style.filter = 'brightness(100%)';
    event.target.style.backgroundColor = color;
    }

    else if (darkenButton.classList.contains('isActive')) {
      if (event.target.style.filter === '' || event.target.style.filter == 'brightness(100%)') {
        event.target.style.filter = 'brightness(100%)';
      }
      targetBright = Number(string_between_strings('(', '%', event.target.style.filter));
      event.target.style.filter = event.target.style.filter.slice(0,11)+(targetBright-10)+'%)';
      targetBright = Number(string_between_strings('(', '%', event.target.style.filter));
    }

    else {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      let rainbowColor = '#'+randomColor;
      event.target.style.filter = 'brightness(100%)';
      event.target.style.backgroundColor = rainbowColor;
    }
  }
}

screen.addEventListener('mousedown', startPainting);
screen.addEventListener('mouseout', paint);
screen.addEventListener('mouseup', stopPainting);

