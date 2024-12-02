// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check localStorage for the theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

// Toggle dark mode and save preference
themeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
