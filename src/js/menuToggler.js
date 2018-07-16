const toggler = document.querySelector('.nav-menu__toggler');
const navMenu = document.querySelector('.nav-menu');

toggler.addEventListener('click', function () {
  navMenu.classList.toggle('nav-menu--open');
});