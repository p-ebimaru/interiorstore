'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const nav = document.getElementById('nav');
  const close = document.getElementById('close');
  const map = document.querySelector('map');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    nav.classList.add('move');
    open.classList.add('hide');
    map.classList.add('pic');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    nav.classList.remove('move');
    open.classList.remove('hide');
    map.classList.remove('pic');
  });

}