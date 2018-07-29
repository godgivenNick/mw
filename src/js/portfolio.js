const filter = document.querySelector('.port__filter');
const tabs = document.querySelectorAll('.port__filter-btn');

function fitlerSwitch(e) {
  console.log(e.target);
  
  if (e.target.classList.contains('port__filter-btn')) {

    Array.from(tabs).forEach(function(elem) {
      elem.classList.remove('port__filter-btn--active');
    })
    
    e.target.classList.add('port__filter-btn--active');
  }
}


filter.addEventListener('click', fitlerSwitch);