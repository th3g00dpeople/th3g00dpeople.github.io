const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

function toggleMenu() {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden');
    navMenu.classList.add('visible');
    menuIcon.classList.add('cross'); // Add a class when the menu is open
    menuIcon.innerHTML = '&times;'; // Change to the cross icon (×)
    document.body.style.overflow = 'hidden'; // Disable background scroll
  } else {
    navMenu.classList.remove('visible');
    navMenu.classList.add('hidden');
    menuIcon.classList.remove('cross'); // Remove class when the menu is closed
    menuIcon.innerHTML = '&#9776;'; // Change back to the hamburger icon (☰)
    document.body.style.overflow = ''; // Enable background scroll again
  }
}
