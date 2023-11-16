gsap.registerPlugin(ScrollTrigger);

function createHeaderTimeline(tl) {
  tl.from(".logo", { y: -50, x: -100, opacity: 0, scale: 0 });
  tl.from(".nav-item", { y: -50, opacity: 0, stagger: 0.1 });
}

function createHeroTimeline(tl) {
  tl.from(".hero-section .btn", {
    scale: 1.75,
    y: -100,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 50%",
      end: "top 0%",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
  tl.from(".hero-item", {
    y: 50,
    opacity: 0,
    stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".pin-1",
      start: "top 0%",
      end: "center 10%",
      toggleActions: "play none none reverse",
      scrub: 2,
    },
  });
}

function createAchievementTimeline(tl) {
  tl.from(".achievements", {
    y: 250,
    opacity: 0,
    duration: 0.4,
    ease: "power1.out",
    boxShadow: "0px 0px 0px 0 rgba(0, 0, 0, 0.5)",
    scrollTrigger: {
      trigger: ".achievements",
      start: "top 40%",
      end: "top 20%",
      toggleActions: "play none none reverse",
      scrub: 0.5,
    },
  });
  tl.from(".achievement-card", {
    y: 500,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".achievements",
      start: "top 100%",
      end: "top 10%",
      toggleActions: "play none none reverse",
      scrub: 0.25,
    },
  });
  tl.to(".achievements", {
    boxShadow: "12px 12px 6px 0 rgba(0, 0, 0, 0.5)",
    scrollTrigger: {
      trigger: ".achievements",
      start: "bottom 80%",
      end: "top 10%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
}

function createAboutUsTimeline(tl) {
  tl.from(".about-us-section > img:nth-child(1)", {
    y: 250,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-section",
      start: "top +120%",
      end: "top -20%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
  tl.from(".about-us-header", {
    y: 250,
    scale: 1.5,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-section",
      start: "top 80%",
      end: "top -20%",
      toggleActions: "play none none reverse",
      scrub: 0.125,
    },
  });
  tl.from(".about-us-section .col", {
    y: 500,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-section",
      start: "top top",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      scrub: 0.0625,
    },
  });
  tl.from(".about-us-section .col svg", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-section .col",
      start: "top -10%",
      end: "bottom 40%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
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
    stagger: 0.2,
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
    y: 200,
    opacity: 0,
    stagger: 0.25,
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
    y: 5000,
    x: 5000,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 100px",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
      scrub: 2,
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
