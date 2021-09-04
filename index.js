import anime from 'animejs/lib/anime.es.js';
import { gsap } from "gsap";


let textWrapper = document.querySelector(".ml12");

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g , "<span class='letter'>$&</span>" );

anime.timeline().add({
  targets: ".ml12 .letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 2000 + 60 * i,
});


gsap.from(".left", {
  duration: 3,
  left: '-50%',
  ease: "power2.out",
  delay: 3.4
});

gsap.from(".header h1", {
  duration: 3,
  x: '-140%',
  ease: "power2.out",
  delay: 3.4
});


gsap.from(".images > div", {
  duration: 1,
  opacity: 0,
  ease: "power2.inOut",
  delay: 6,
  stagger: 0.2
})



gsap.from(".header > p", {
  duration: 1,
  y: 60,
  opacity:0,
  ease: "power2.out",
  delay: 5.6,
  stagger: 0.2
})


gsap.from(".link", {
  opacity: 0,
  ease: "power1.inOut",
  repeat: -1,
  repeatDelay: 0.5,
  delay:7.8
})