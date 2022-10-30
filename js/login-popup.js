let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
console.log(loginButton);
console.log(loginPopup);
loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
console.log(evt);
evt.preventDefault();
loginPopup.classList.toggle('show-popup')
}