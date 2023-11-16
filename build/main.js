gsap.registerPlugin(ScrollTrigger);

function createHeaderTimeline(tl) {
  tl.from(".logo", { y: -50, x: -100, opacity: 0, scale: 0, duration: 0.5 });
  tl.from(".nav-item", { y: -50, opacity: 0, duration: 0.5, stagger: 0.1 });
}

function createHeroTimeline(tl) {
  tl.from(".hero-item", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out",
  });
  tl.from(".btn", {
    scale: 1.5,
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out",
  });
}

function createAchievementTimeline(tl) {
  tl.from(".achievements", {
    y: 250,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: "power1.out"
  });
  tl.from(".achievement-card", {
    y: 500,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
  });
}

function createAboutUsTimeline(tl) {
  tl.from(".about-us-header", {
    y: 250,
    scale: 1.5,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
  });
  tl.from(".col", {
    y: 500,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
  });
}

const tl = gsap.timeline({
  defaults: { ease: "power1.out", duration: 1, delay: 0, stagger: 0.2 },
});
createHeaderTimeline(tl);
createHeroTimeline(tl);
// Pin "pin-1" while achievement is scrolled
// ScrollTrigger.create({
//   trigger: ".pin-1",
//   start: "top top",
//   end: "bottom bottom",
//   pin: ".pin-1",
// });
createAchievementTimeline(tl);
createAboutUsTimeline(tl);


// gsap.from('.blob', {
//   scrollTrigger: {
//     trigger: '.achievements',
//     start: 'top bottom',
//   },
//   duration: 2,
//   opacity: 0.25,
//   scale: 0.5,
//   repeat: 1,
//   x: (a) => {
//     console.log(a, gsap.utils.random(-100, 100));
//     return gsap.utils.random(a > 0 ? -a * 100: 0, a > 0 ? 0 : a * 100);
//   },
//   y: (a) => {
//     return gsap.utils.random(-100, 100);
//   },
//   ease: 'power1.in',
//   stagger: 0.2
// })



// function createCounter(htmlEl, count) {
//   htmlEl.innerText = 0;
//   gsap.to(htmlEl, {
//     duration: 2,
//     ease: 'power1.in',
//     textContent: count,
//     snap: {
//       textContent: 1,
//     },
//     scrollTrigger: {
//       trigger: '.achievements',
//       start: 'top bottom',
//       end: 'bottom top',
//     }
//   })
// }

// const achievement_1 = document.querySelector('#achievement_1');
// const achievement_2 = document.querySelector('#achievement_2');
// const achievement_3 = document.querySelector('#achievement_3');

// createCounter(achievement_1, achievement_1.innerText);
// createCounter(achievement_2, achievement_2.innerText);
// createCounter(achievement_3, achievement_3.innerText);
