// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Toggle dropdowns
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const parentDropdown = this.parentElement;
    parentDropdown.classList.toggle('show');

    // Close others
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (drop !== parentDropdown) {
        drop.classList.remove('show');
      }
    });
  });
});

// Close dropdowns on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown') && !e.target.closest('.dropbtn')) {
    document.querySelectorAll('.dropdown').forEach(drop => {
      drop.classList.remove('show');
    });
  }
});
