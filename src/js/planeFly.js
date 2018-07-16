const seoBtn = document.querySelector('.seo-form__button');
const fotterBtn = document.querySelector('.footer-form__button');

function textChange(string) {
  string.toLowerCase() === "заказать аудит" ? string = "заявка отправлена" : string = "заказать аудит";
  return string;
}

function btnToggle(e){
  e.preventDefault();
  e.target.children[0].textContent = textChange(e.target.children[0].textContent)
  e.target.classList.toggle('clicked');
}

seoBtn.addEventListener('click', btnToggle);
fotterBtn.addEventListener('click', btnToggle);