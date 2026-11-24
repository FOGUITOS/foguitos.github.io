const header = document.querySelector('.site-header');
const toggle = header.querySelector('.menu-toggle');
const closeMenu = () => toggle.setAttribute('aria-expanded', 'false');

header.setAttribute('data-enhanced', '');
toggle.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') === 'false'));
});
header.addEventListener('click', (event) => {
  if (event.target.closest('a[href^="#"]')) closeMenu();
});
header.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
matchMedia('(max-width: 55rem)').addEventListener('change', closeMenu);
