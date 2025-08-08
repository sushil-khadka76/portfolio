const toggle = document.querySelector('#checkbox');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  toggle.checked = true;
}

// Toggle and save theme
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
