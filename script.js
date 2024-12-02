// script.js

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  themeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Smooth scrolling for anchor links (optional, in case you have anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Example function to handle additional features
window.addEventListener('DOMContentLoaded', () => {
  console.log('Document is fully loaded and parsed.');
});
