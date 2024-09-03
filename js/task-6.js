const controlsInput = document.querySelector('#controls .input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes)
}
function destroyBox() {
  boxesContainer.innerHTML = '';
  
}

createBtn.addEventListener('click', () => {
   const amount = Number(controlsInput.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter amount from 1 to 100')
    return
  }

  destroyBox();
  createBoxes(amount);
  controlsInput.value = '';
})

destroyBtn.addEventListener('click', () => {
  destroyBox();
  controlsInput.value = '';}
 
)
const inputs = document.querySelectorAll('.input');
inputs.forEach(input =>{input.addEventListener('focus', () =>
{ input.placeholder = 'Type number' })
input.addEventListener('blur', () =>
{input.placeholder =''})
})
