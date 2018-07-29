import Swiper from 'swiper';
const navMenu = document.querySelector('.nav-menu');

let mySwiper = undefined;

function initOfferSwiper() {
  const slider = document.querySelector('.our-offer__slider');
  if (window.matchMedia('(min-width: 600px)').matches 
    && window.matchMedia('(max-width: 1023px)').matches
    && mySwiper == undefined) {
    
    mySwiper = new Swiper('.our-offer__slider', {
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: '.slider-button-next--offer',
        prevEl: '.slider-button-prev--offer',
      },
      grabCursor: true, 
    });                 
  } else if (window.matchMedia('(max-width: 599px)').matches && mySwiper != undefined ||
    window.matchMedia('(min-width: 1024px)').matches && mySwiper != undefined) {
    mySwiper.destroy(true, true );
    mySwiper = undefined;   
  }
};

function initSertsSwiper() {
  let newSwiper = undefined;
  
  newSwiper = new Swiper('.serts-slider', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.slider-button-next--serts',
      prevEl: '.slider-button-prev--serts',
    },
    grabCursor: true,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }
  });
}


export default function refreshSliders() {  
  initOfferSwiper();
  initSertsSwiper();
  if (window.matchMedia('(min-width: 1024px)').matches) {
    navMenu.classList.remove('nav-menu--open');
  }
}

initOfferSwiper();
initSertsSwiper();