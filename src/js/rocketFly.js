import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

var timeline = new TimelineLite();

const path = [{ x: 0, y: 0 }, { x: 125, y: -90 }, { x: 300, y: 0 }, { x: 520, y: -80 }, { x: 660, y: -20 }, { x: 800, y: -100 }, { x: 980, y: -10 }, { x: 1180, y: -120 }];
var controller = new ScrollMagic.Controller();


var tween = TweenMax.to(document.querySelector(".svg-rocket"), 4, { bezier: { values: path, autoRotate: ["x", "y", "rotation", 90, false] }, ease: Power1.easeInOut });
var tween2 = TweenMax.to(document.querySelector(".proc__white-block"), 4, { left: "100%" , ease: Power1.easeInOut});
// var tween3 = TweenMax.to(document.querySelectorAll(".proc__item"), 5, { autoAlpha: 0 }, { autoAlpha: 1 });
var tween3 = TweenMax.staggerFrom(".proc__item", 4, { scale: 0.5, opacity: 0, delay: 1, ease: Elastic.easeOut, force3D: true }, 0.5);
var line = TweenMax.to(tween, tween2, tween3);
// timeline.add(tween).add(tween2);


// var line = TweenMax.to(document.querySelector(".svg-rocket"), 4, { bezier: { values: path, autoRotate: ["x", "y", "rotation", 90, false] }, ease: Power1.easeInOut })
//   .to(document.querySelector(".proc__white-block"), 4, { left: "100%", ease: Power1.easeInOut });


var scene = new ScrollMagic.Scene({triggerElement: ".proc"})
  .setTween(tween)
  .addIndicators(true)
  .reverse(false)
  .addTo(controller);

var scene = new ScrollMagic.Scene({ triggerElement: ".proc" })
  .setTween(tween2)
  .reverse(false)
  .addTo(controller);

var scene = new ScrollMagic.Scene({ triggerElement: ".proc" })
  .setTween(tween3)
  .reverse(false)
  .addTo(controller);


// var scene = new ScrollMagic.Scene({ triggerElement: ".proc" })
//   .setTween(line)
//   .setPin('#target')
//   .addIndicators(true)
//   .reverse(false)
//   .addTo(controller);