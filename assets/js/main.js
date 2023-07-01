// header
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('snow-menu');
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('snow-menu');
  })
}

// active links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(n => n.addEventListener('click', () => {
  navLinks.forEach(n => n.classList.remove('active'))
  n.classList.add('active');
}))

// payment