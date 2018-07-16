import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const path = [{ x: 0, y: 0 }, { x: 125, y: -90 }, { x: 300, y: 0 }, { x: 520, y: -80 }, { x: 660, y: -20 }, { x: 800, y: -100 }, { x: 980, y: -10 }, { x: 1180, y: -120 }];
var controller = new ScrollMagic.Controller(".svg-rocket");
var tween = TweenMax.to(document.querySelector(".svg-rocket"), 4, { bezier: { values: path, autoRotate: ["x", "y", "rotation", 90, false] }, ease: Power1.easeInOut });

var scene = new ScrollMagic.Scene({triggerElement: ".proc"})
  .setTween(tween)
  .setPin('#target')
  .addIndicators(true)
  .reverse(false)
  .addTo(controller);