'use strict';

const menuButton = document.querySelector('.btn--menu');
const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation');

const closeMenu = function () {
  menuButton.dataset.active = false;

  const overlay = document.querySelector('.overlay');
  overlay.remove();
};

const openMenu = function () {
  menuButton.dataset.active = true;

  const overlay = '<div class="overlay"></div>';
  header.insertAdjacentHTML('afterbegin', overlay);

  const overlayEl = document.querySelector('.overlay');
  overlayEl.addEventListener('click', closeMenu);
};

const toggleMenu = function () {
  const atualState = menuButton.dataset.active === 'true';
  atualState ? closeMenu() : openMenu();
};

menuButton.addEventListener('click', toggleMenu);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.dataset.active === 'true') closeMenu();
});
