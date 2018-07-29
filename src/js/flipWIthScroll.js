import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

const items = document.querySelectorAll('.port__flipper');


Array.from(items).forEach(function(elem) {
  var currentString = this;
  
  
  var controller = new ScrollMagic.Controller();
  
  var scene = new ScrollMagic.Scene({ triggerElement: elem, offset: "-130px", duration: "300px"})
  .on("enter", function () {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      elem.style.transform = "rotateY(180deg)";
    } 
  })
  .on("leave", function() {
    elem.style.transform = "none";
  })
  .addIndicators(true)
  .addTo(controller);
})