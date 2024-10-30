// Hamburger menu toggle for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');  // Toggle visibility of nav links

  // Toggle hamburger icon between ☰ and ✖
  if (hamburger.textContent === '☰') {
    hamburger.textContent = '✖';  // Change to 'X' when clicked
  } else {
    hamburger.textContent = '☰';  // Change back to hamburger icon
  }
});
// Set the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
