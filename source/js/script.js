'use strict';
var mainNav = document.querySelector('.main-nav');
var navButton = document.querySelector('.nav-button');


mainNav.classList.add('main-nav--none');
navButton.classList.add('nav-button--close');


navButton.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--none')) {
    mainNav.classList.remove('main-nav--none');
    navButton.classList.add('nav-button--open');
  } else {
    mainNav.classList.add('main-nav--none');
    navButton.classList.remove('nav-button--open');
  }
});
