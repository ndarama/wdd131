document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle hamburger menu on click
    hamburger.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
            hamburger.textContent = '☰';
        } else {
            navMenu.style.display = 'flex';
            hamburger.textContent = '✖';
        }
    });

    // Update the footer with the last modified date
    document.getElementById('last-modified').textContent = document.lastModified;
});
