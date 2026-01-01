const toggle = document.getElementById('darkModeToggle');
let isDark = false;

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDark = !isDark;
  toggle.textContent = isDark ? '☀️' : '🌙';
});
