const regForm = document.querySelector('.login-form');
regForm.addEventListener('submit', Submit);
function Submit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    if (login === "" || password === "") {
      alert("Please fill in all the fields!");
      return
    };
      console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

const inputs = document.querySelectorAll('.login-input');
inputs.forEach(input =>{input.addEventListener('focus', () =>
{ input.placeholder = 'Type area' })
input.addEventListener('blur', () =>
{input.placeholder =''})
})
