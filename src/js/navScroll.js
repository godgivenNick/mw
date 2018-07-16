const list = document.querySelector('.nav-menu__list');
const fromFooterToTop = document.querySelector('.footer-top-btn');

function getLink(link) {
  document.querySelector(link.getAttribute("href")).scrollIntoView({
    behavior: 'smooth',
    block: "start"
  });
}

list.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.tagName == 'A') {
    getLink(e.target);
  }
})

fromFooterToTop.addEventListener('click', function(e) {
  e.preventDefault();
  getLink(fromFooterToTop);
})
