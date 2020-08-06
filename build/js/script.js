'use strict';
var mainNav = document.querySelector('.main-nav');
var navButton = document.querySelector('.nav-button');
var videoBike = document.querySelector('.video');
var videoBtn = document.querySelector('.video__btn')

mainNav.classList.add('main-nav--none');
navButton.classList.add('nav-button--close');
videoBike.removeAttribute('controls');


navButton.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--none')) {
    mainNav.classList.remove('main-nav--none');
    navButton.classList.add('nav-button--open');
  } else {
    mainNav.classList.add('main-nav--none');
    navButton.classList.remove('nav-button--open');
  }
});

videoBtn.addEventListener('click', function () {
  videoBtn.classList.add('video__btn--none');
  videoBike.setAttribute('controls', 'controls');
  videoBike.play();
  console.log('ffewfwefewfowef');
});

var userPhone = document.querySelector('.form__input--phone');

userPhone.addEventListener('invalid', function (evt) {
  userPhone.setCustomValidity('Введите номер в формате 89123456789')
})


