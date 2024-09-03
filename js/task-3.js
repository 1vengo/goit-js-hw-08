const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output")
const originName = textOutput.textContent;
textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value
    if (textOutput.textContent === '') {
        textOutput.textContent = originName
    
}
})

const inputs = document.querySelectorAll('#name-input');
const originPlaceholder = textInput.placeholder;

inputs.forEach(input =>{input.addEventListener('focus', () =>
{ input.placeholder = 'Type area' })
input.addEventListener('blur', () =>
{input.placeholder =originPlaceholder})
})
