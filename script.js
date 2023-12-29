const screen = document.querySelector('#screen');
const canvasSize = document.getElementById('myRange');
const sizeDisplay = document.getElementById('sizeDisplay');
const colorPicker = document.getElementById('color-picker');

canvasSize.value = 16;
const color = colorPicker.value;

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
}
document.addEventListener('DOMContentLoaded',printScreen());

canvasSize.addEventListener('input', () => {
  document.getElementById('screen').innerHTML = ' '
  printScreen();
});




// canvasSize.addEventListener('input', () => {
//   sizeDisplay.textContent = `${canvasSize.value} x ${canvasSize.value}`;
//   let ratio = (100/(canvasSize.value))
//   for (const info of pixelInfo) {
//     info.style.cssText = `flex-basis: ${ratio}%`;
//     };
// });
