gsap.registerPlugin(ScrollTrigger);

function createHeaderTimeline(tl) {
  tl.from(".logo", { y: -50, x: -100, opacity: 0, scale: 0, ease: "power1.out", duration: 0.5 });
  tl.from(".nav-item", { y: -50, opacity: 0, stagger: 0.1, ease: "power1.out", duration: 0.5 });
}

function createHeroTimeline(tl) {
  tl.from(".hero-item", {
    y: 20,
    opacity: 0,
    stagger: 0.075,
    duration: 0.2,
    ease: "power1.out",
  });
  tl.from('.hero-section .btn', {
    y: 50,
    opacity: 0,
    stagger: 0.25,
    duration: 0.25,
    ease: "power1.out",
  });
  tl.from(".hero-section .btn svg", {
    scale: 0,
    y: -125,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 50%",
      end: "top 0%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from('.hero-section .blob', {
    y: "+=700",
    x: 700,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".pin-1",
      toggleActions: "play none none reverse",
    },
  });
}

function createAchievementTimeline(tl) {
  tl.play()
  tl.from(".achievement-text", {
    y: 20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".achievements",
      start: "top 100",
      end: "top 100%",
      toggleActions: "play resume none resume",
    },
  });
  tl.from(".achievement-card", {
    y: 500,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".achievement-card",
      start: "top 2000px",
      end: "center 10%",
    },
  });
}

function createAboutUsTimeline(tl) {
  tl.from(".about-us-section > img:nth-child(1)", {
    y: 250,
    scale: 1.5,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-section",
    },
  });
  tl.from(".about-us", {
    y: 100,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".achievement",
      start: "top top",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
  });
  tl.from(".about-us-section .col", {
    y: 500,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-section",
      start: "top 0",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      scrub: 0.0625,
    },
  });
  // tl.from(".about-us-section .col svg", {
  //   y: 50,
  //   opacity: 0,
  //   stagger: 0.2,
  //   ease: "power1.out",
  //   scrollTrigger: {
  //     trigger: ".about-us-section .col",
  //     start: "top -10%",
  //     end: "bottom 40%",
  //     toggleActions: "play none none reverse",
  //   },
  // });
}

function createTestimonialsTimeline(tl) {
  tl.from(".testimonial-header .col", {
    y: 250,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 80%",
      end: "center 20%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
  tl.from(".testimonial-image", {
    y: 500,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top top",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
  tl.from(".testimonial", {
    borderBottom: "1px solid transparent",
    y: 500,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 50%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
  tl.from(".testimonial-details .col", {
    y: 500,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top top",
      end: "bottom 120%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
  tl.from(".slider-control .slider-button", {
    y: 2000,
    opacity: 0,
    // stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 100%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
}
function createServicesTimeline(tl) {
  tl.from(".services-section .row .col", {
    y: 250,
    opacity: 0,
    stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 100%",
      end: "center center",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
  tl.from(".services-card", {
    // y: 5000,
    x: -500,
    // scale: 1.2,
    opacity: 0,
    stagger: 0.4,
    ease: "power1",
    scrollTrigger: {
      trigger: ".services-section",
      start: "center 100%",
      end: "top 0px",
      toggleActions: "play play play complete",
    },
  });
  // tl.from(".testimonial", {
  //   borderBottom: "1px solid transparent",
  //   y: 500,
  //   opacity: 0,
  //   stagger: 0.2,
  //   ease: "power1.out",
  //   scrollTrigger: {
  //     trigger: ".testimonial-section",
  //     start: "top 50%",
  //     end: "bottom 100%",
  //     toggleActions: "play none none reverse",
  //     scrub: true,
  //   }
  // });
  // tl.from(".testimonial-details .col", {
  //   y: 200,
  //   opacity: 0,
  //   stagger: 0.25,
  //   ease: "power1.out",
  //   scrollTrigger: {
  //     trigger: ".testimonial-section",
  //     start: "top top",
  //     end: "bottom 100%",
  //     toggleActions: "play none none reverse",
  //     scrub: true,
  //   }
  // })
}

const tl = gsap.timeline({
  defaults: { ease: "power1.out", duration: 1, delay: 0 },
});
createHeaderTimeline(tl);
createHeroTimeline(tl);
createAchievementTimeline(tl);
createAboutUsTimeline(tl);
createTestimonialsTimeline(tl);
createServicesTimeline(tl);

const infiniteSlider = () => {
  gsap.fromTo(
    ".partner-logo",
    {
      x: 100,
      stagger: 0.02,
      duration: 2,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: ".partners-logos",
        start: "top bottom",
        end: "bottom top",
      },
    },
    {
      x: -100,
      stagger: 0.02,
      duration: 2,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: ".partners-logos",
        start: "top bottom",
        end: "bottom top",
      },
    }
  );
};
infiniteSlider();

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
