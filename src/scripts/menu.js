const hamburgerIcon = document.querySelector('.nav__hamburguer');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('nav__hamburguer--open');
});