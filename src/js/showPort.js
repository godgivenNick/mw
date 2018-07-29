// Детальный показ из портфолио на 1024
const list = document.querySelector('.port__list');

const html = [
  `<div class="port-detail__bg"></div><img src="./img/port-detail-1.jpg" alt="port-detail"/>`,
  `<div class="port-detail__bg")"></div><img src="./img/port-detail-2.jpg" alt="port-detail"/>`,
  `<div class="port-detail__bg")"></div><img src="./img/port-detail-3.jpg" alt="port-detail"/>`,
  `<div class="port-detail__bg")"></div><img src="./img/port-detail-4.jpg" alt="port-detail"/>`,
];

function showPort(e) {
  console.log(e.target);

  if (list.querySelector('.port-detail')) {
    list.removeChild(list.querySelector('.port-detail'));
  }
  
  if(e.target.classList.contains('port__item')) {
    renderNode(html, e.target.dataset.number);
  }
}

const renderNode = (html, number) => {
  const container = document.createElement(`div`);
  container.classList.add('port-detail');
  container.innerHTML = html[number - 1];
  container.childNodes[0].style = `background: url("./img/port-detail-bg-${number}.jpg")`
  
  list.insertBefore(container, list.appendChild(container));
  container.scrollIntoView({
    behavior: 'smooth',
    block: "start"
  });
};


export default function listeners() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    list.addEventListener('click', showPort);
  } else {
    if (list.querySelector('.port-detail')) {
      list.removeChild(list.querySelector('.port-detail'));
    }
    list.removeEventListener('click', showPort);
  }
}

listeners()