(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const overlay = document.querySelector('.js-overlay'); // Має співпадати з HTML
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    
    mobileMenu.classList.toggle('is-open');
    if (overlay) {
        overlay.classList.toggle('is-open'); // Вмикаємо розмиття
    }

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  
  // Закриття меню при кліку на розмиту область (оверлей)
  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }

  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();