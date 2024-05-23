// Boton para dirigir al login

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener ('click', gotoLogin);

function gotoLogin () {
    location.href= "/login.html"
}
