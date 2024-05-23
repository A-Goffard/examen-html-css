// Register con comprobación de contraseña y guardado en local storage

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const emailInput = document.getElementById('mail');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('passwordC');

    if (registerForm && emailInput && passwordInput && confirmPasswordInput) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = emailInput.value.toLowerCase();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            localStorage.setItem('user_email', email);
            localStorage.setItem('user_password', password);

            alert('Te has registrado con éxito');
            window.location.href = '/login.html';
        });
    } else {
        console.error('Algo ha fallado');
    }
});
