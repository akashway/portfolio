// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll Reveal animations
ScrollReveal().reveal('.hero h1', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.hero p', { delay: 400, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.skills-container', { delay: 300, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.projects-container', { delay: 300, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.contact-form', { delay: 300, origin: 'bottom', distance: '50px' });
