// Hamburger menu toggle for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');  // Toggle visibility of nav links

    // Toggle hamburger icon between ☰ and X
    if (hamburger.textContent === '☰') {
        hamburger.textContent = '✖';  // Change to 'X' when clicked
    } else {
        hamburger.textContent = '☰';  // Change back to hamburger icon
    }
});

// Footer - Set current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
