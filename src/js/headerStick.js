const header = document.querySelector('.page-header');
const pos = header.offsetTop;

window.addEventListener('scroll', function () {
  if (window.pageYOffset > pos) {
    header.classList.add('page-header--stick');
  } else {
    header.classList.remove('page-header--stick');
  }
})