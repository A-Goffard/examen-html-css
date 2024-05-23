// Menú hamburguesa

let menu = document.getElementById('hamburger');

menu.addEventListener('click', toggleMenu, false);

function toggleMenu (event) {
  event.preventDefault();
  menu.classList.toggle('is-active');
  document.getElementById( "navbar" ).classList.toggle("is_active");

}


