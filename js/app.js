(function () {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navWrapper = document.querySelector('.nav-wrapper');
  const body = document.body;

  function toggleMenu() {
    navWrapper.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

  if (menuBtn && navWrapper) {
    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    const navLinks = navWrapper.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navWrapper.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  }
})();
