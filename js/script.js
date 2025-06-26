// Responsive navigation hamburger menu toggle

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const header = document.querySelector('header');
  if (hamburger && header) {
    hamburger.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });
  }
}); 
