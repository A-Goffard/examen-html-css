// Login con comprobación de contraseña y mail

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('mail').value.toLowerCase();
        const password = document.getElementById('password').value;

        const storedEmail = localStorage.getItem('user_email');
        const storedPassword = localStorage.getItem('user_password');

        if (email === storedEmail && password === storedPassword) {
            alert('Datos correctos');
            window.location.href = '/parques.html';
        } else {
            alert('Datos incorrectos');
        }
    });
});
