const header = document.querySelector('.page-header');
const pos = header.offsetTop;

export default function headerStick () {
  if (window.pageYOffset > pos) {
    header.classList.add('page-header--stick');
  } else {
    header.classList.remove('page-header--stick');
  }
}