const loginForm = document.getElementById( 'loginForm');
const usernameInput = document.getElementById( 'username');
const passwordInput = document.getElementById( 'password');
const errorMessage = document.getElementById( 'errorMessage');

loginForm.addEventListener( 'submit', (event) => {
    event.preventDefault();

    if (usernameInput.value == ''|| passwordInput.value === '') {
    errorMessage. textContent = 'Please fill in all fields.';
    } else if (passwordInput.value. length < 8) {
    errorMessage. textContent = 'Password must be at least 8 characters long.';
    errorMessage.style.color = "red"
    } else {
    errorMessage. textContent = '';
    errorMessage.style.color="green"
// submit the form or perform other actions here
    }
});