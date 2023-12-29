const screen = document.querySelector('#screen');


for (let index = 0; index < (16*16); index++) {
  const pixel = [];
  pixel[index] = document.createElement('div');
  pixel[index].classList.add('square');
  document.getElementById('screen').appendChild(pixel[index]);
  }