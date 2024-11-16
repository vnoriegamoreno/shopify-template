document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('menu-open');
      document.body.style.overflow = mobileMenu.classList.contains('menu-open') ? 'hidden' : '';
    });
  }
});
