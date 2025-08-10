document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');

    // Set dark mode as default
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    // Apply saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        themeToggle.textContent = '☀️ Light Mode';
    }

    // Toggle between light and dark
    themeToggle.addEventListener('click', function() {
        const isLight = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
    });
});
