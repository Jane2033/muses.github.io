import { Application } from '@splinetool/runtime';
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

const headerCover = gsap.timeline();
const svg = document.getElementById('svg');
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

app.load('https://prod.spline.design/Avcc73xqeEtr2uOR/scene.splinecode');

headerCover.from(".loader-wrap-heading h1", {
  delay: 1,
  y: 200,
  skewY: 10,
}).to(".loader-wrap-heading h1", {
  delay: 1.5,
  y: -200,
  skewY: 10,
});
headerCover.to(svg, {
  duration: 0.8,
  attr: { d: curve },
  ease: "power2.easeIn",
}).to(svg, {
  duration: 0.8,
  attr: { d: flat },
  ease: "power2.easeOut",
});
headerCover.to(".loader-wraper", {
  y: -1500,
}).tl.to(".loader-wraper", {
  zIndex: -1,
  display: "none",
});
headerCover.from(
  ".main-container",
  {
    y: 100,
    opacity: 0,
  },
  "-=1.5"
);





/*
    let tl = gsap.timeline({      
      scrollTrigger: {
        trigger: ".loader-wrapper",        
        start: "top bottom",
        endTrigger: ".loader-wrapper",
        end: "top top",        
        scrub: true,
      },
      
    });

    tl.to(svg, {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.8,
      attr: { d: flat },
      ease: "power2.easeOut",
    }).tl.to(".loader-wrap", {
      y: -1500,
    });
*/










