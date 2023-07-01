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

// activeLinks

const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// payment