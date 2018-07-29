import headerStick from './headerStick';
import refreshSliders from './sliders';
import showPort from './showPort';




function windowResize() {
  refreshSliders();
  showPort();
};


window.addEventListener('scroll', headerStick);
window.addEventListener('resize', windowResize);