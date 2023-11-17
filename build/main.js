gsap.registerPlugin(ScrollTrigger);

function createHeaderTimeline(tl) {
  tl.from(".logo", {
    y: -50,
    x: -100,
    opacity: 0,
    scale: 0,
    ease: "power1.out",
    duration: 0.5,
  });
  tl.from(".nav-item", {
    y: -50,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    duration: 0.5,
  });
}

function createHeroTimeline(tl) {
  tl.from(".hero-item", {
    y: 20,
    opacity: 0,
    stagger: 0.075,
    duration: 0.2,
    ease: "power1.out",
  });
  tl.from(".hero-section .btn", {
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
  // gsap.from(".hero-section .blob", {
  //   y: "+=700",
  //   x: 700,
  //   opacity: 0,
  //   duration: 1,
  //   ease: "power1.out",
  //   scrollTrigger: {
  //     trigger: ".pin-1",
  //     toggleActions: "play none none reverse",
  //   },
  // });
}

function createAchievementTimeline(tl) {
  tl.play();
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
      start: "top 2000px",
      end: "center 10%",
    },
  });
  tl.from(".about-us-header", {
    y: 100,
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".achievement",
      start: "top 2000px",
      end: "center 10%",
    },
  });
  tl.from(".about-us-section .col", {
    y: 500,
    opacity: 0,
    stagger: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".about-us-card",
      start: "top 100%",
      end: "bottom 20%",
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
// createAchievementTimeline(tl);
// createAboutUsTimeline(tl);
// createTestimonialsTimeline(tl);
// createServicesTimeline(tl);


gsap.from('.blob', {
  scrollTrigger: {
    trigger: '.blob',
    start: '-=100 80%',
    end: '-=10 60%',
    scrub: 0.3,
    triggerAction: 'play none none reverse',
    ease: "power1.in",
  },
  y: 500,
  x: 500, 
  scale: 1.2
})

gsap.from('.achievement ', {
  scrollTrigger: {
    trigger: '.achievements',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.3,
    triggerAction: 'play none none reverse',
    ease: "power1.in",
  },
  y: Math.random() * 100,
})


// Skew with mouse move
gsap.from('.achievement-card', {
  scrollTrigger: {
    trigger: '.achievement',
    start: 'top 80%',
    end: 'top 10%',
    scrub: 0.5,
    triggerAction: 'play none none reverse',
  },
  y: 100,
  skewY: 25,
})
gsap.from('.slider-image .image .shadow', {
  scrollTrigger: {
    trigger: '.slider-image',
    start: 'top 80%',
    end: 'top 10%',
    scrub: 0.5,
    triggerAction: 'play none none reverse',
  },
  opacity: 0,
  right: 0,
  bottom: 0,
  skewX: 0,
})
gsap.from('.slider-image img', {
  scrollTrigger: {
    trigger: '.slider-image',
    start: 'top 80%',
    end: 'top 10%',
    scrub: 0.5,
    triggerAction: 'play none none reverse',
  },
  // Parallax move
  y: 100,
  skewY: 10,
})

gsap.from('.slider-control .slider-button', {
  scrollTrigger: {
    trigger: '.slider',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.5,
    triggerAction: 'play none none reverse',
  },
  ease: "power1.in",
  y: 1000,
  skewY: 10,
  opacity: 0,
})
gsap.from('.testimonial', {
  scrollTrigger: {
    trigger: '.testimonial-section',
    start: 'top 80%',
    end: 'top 10%',
    scrub: 0.5,
    triggerAction: 'play none none reverse',
  },
  ease: "power1.in",
  y: 1000,
  skewY: 10,
  opacity: 0,
})
gsap.from('.testimonial-details', {
  
})

gsap.from('.services-cards', {
  scrollTrigger: {
    trigger: '.services-cards',
    start: 'top 100%',
    end: 'bottom 0%',
    scrub: 0.5,
    triggerAction: 'play none none reverse',
  },
  y: 100,
  skewY: 25,
})