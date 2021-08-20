let burgerActive = document.getElementById('burgerButton');
let menuActive = document.getElementById('menuBurger');

burgerActive.addEventListener('click', function() {
menuActive.classList.toggle('active_menu');
}
)