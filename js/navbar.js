const burger = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger-wrap');
const navbarToggle = document.querySelector('.navbar-toggle');
const background = document.querySelector('body');

burgerWrap.addEventListener('click', () => {
  burger.classList.toggle('open');
  navbarToggle.classList.toggle('open');
  background.classList.toggle('open');
});