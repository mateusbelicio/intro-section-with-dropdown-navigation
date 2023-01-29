'use strict';

const menuButton = document.querySelector('.btn--menu');

const toggleMenu = function () {
  const atualState = menuButton.dataset.active === 'true';
  menuButton.dataset.active = atualState ? false : true;
};

menuButton.addEventListener('click', toggleMenu);
