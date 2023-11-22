gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Dewitte Faiser",
    company: "Hewlett Packard Enterprise",
    role: "CEO",
    testimonial:
      "Offering this key quantum-generated resource is a significant advantage for both our internal and external customers. It is especially important for our enterprise customers with demands for high quality and high-performance random numbers, who will benefit from this unique feature.",
    image_company: "assets/homepage/brands/hewlett-packard.png",
    image_profile: "assets/homepage/testimonials/dewitte-faiser.png",
  },
  {
    name: "Jack Wilson",
    company: "Aram Co.",
    role: "Programme Manager",
    testimonial:
      "AI8 played a pivotal role in our company's digital transformation journey. Their expertise in implementing cutting-edge technologies and seamless integration of AI solutions truly set them apart. We experienced a significant boost in efficiency and productivity. AI8 is a reliable partner for any organization looking to stay ahead in the rapidly evolving digital landscape.",
    image_company: "assets/homepage/brands/aram-co-color.png",
    image_profile: "assets/homepage/testimonials/jack-wilson.jpg",
  },
  {
    name: "Marcus Short",
    company: "Mobily",
    role: "Operations Lead",
    testimonial:
      "As a startup, we needed a technology partner that could bring our ideas to life. AI8's app and web development team exceeded our expectations. They not only delivered high-quality products but also provided valuable insights throughout the development process. AI8 is the perfect choice for anyone looking to turn their tech dreams into reality.",
    image_company: "assets/homepage/brands/mobily-color.png",
    image_profile: "assets/homepage/testimonials/marcus-short.jpg",
  },
];

function onClickSlide(index) {
  const testimonialNameEl = document.getElementById("testimonial-name");
  const testimonialRoleEl = document.getElementById("testimonial-role");
  const testimonialImageCompanyEl = document.getElementById(
    "testimonial-image-company"
  );
  const testimonialImageProfileEl = document.getElementById(
    "testimonial-image-profile"
  );
  const testimonialEl = document.getElementById("testimonial");
  const testimonialDetailsEl = document.getElementById("testimonial-details");
  const sliderButtonArrEl = document.querySelectorAll(".slider-button");

  gsap.to(testimonialNameEl, {
    opacity: 0,
    y: 20,
    duration: 0.25,
    onComplete: () => {
      testimonialNameEl.innerText = testimonials[index].name;
      gsap.to(testimonialNameEl, {
        opacity: 1,
        duration: 0.25,
        y: 0,
      });
    },
  });

  gsap.to(testimonialImageCompanyEl, {
    opacity: 0,
    y: 20,
    duration: 0.25,
    onComplete: () => {
      testimonialImageCompanyEl.src = testimonials[index].image_company;
      gsap.to(testimonialImageCompanyEl, {
        opacity: 1,
        duration: 0.25,
        y: 0,
      });
    },
  });

  gsap.to(testimonialRoleEl, {
    opacity: 0,
    y: 20,
    duration: 0.25,
    onComplete: () => {
      testimonialRoleEl.innerText =
        testimonials[index].role + ", " + testimonials[index].company;
      gsap.to(testimonialRoleEl, {
        opacity: 1,
        duration: 0.25,
        y: 0,
      });
    },
  });

  gsap.to(testimonialImageProfileEl, {
    opacity: 0,
    y: 50,
    delay: 0.25,
    skewY: 5,
    duration: 0.25,
    onComplete: () => {
      testimonialImageProfileEl.src = testimonials[index].image_profile;
      gsap.to(testimonialImageProfileEl, {
        opacity: 1,
        duration: 0.25,
        skewY: 0,
        y: 0,
      });
    },
  });

  gsap.to(testimonialEl, {
    opacity: 0.5,
    y: 20,
    duration: 0.25,
    onComplete: () => {
      testimonialEl.innerText = testimonials[index].testimonial;
      gsap.to(testimonialEl, {
        opacity: 1,
        duration: 0.25,
        y: 0,
      });
    },
  });
  gsap.to(testimonialDetailsEl, {
    opacity: 0,
    y: 20,
    duration: 0.25,
    onComplete: () => {
      gsap.to(testimonialDetailsEl, {
        opacity: 1,
        duration: 0.25,
        y: 0,
      });
    },
  });

  gsap.to(sliderButtonArrEl, {
    opacity: 0,
    y: 20,
    duration: 0.25,
    stagger: 0.1,
    onComplete: () => {
      sliderButtonArrEl.forEach((el) => {
        el.classList.remove("active");
      });
      sliderButtonArrEl[index].classList.add("active");
      gsap.to(sliderButtonArrEl, {
        opacity: 1,
        duration: 0.25,
        y: 0,
      });
    },
  });
}

function createSplashScreen(tl) {
  tl.from('#splash-logo-top', {
    x: 1000,
    opacity: 0,
    ease: "power2.in",
    duration: 0.5,
  })
  tl.from('#splash-logo-bottom', {
    x: -1000,
    opacity: 0,
    ease: "power2.in",
    duration: 0.5,
  })
  tl.to('.animation-splash', {
    scale: 100,
    opacity: 0,
    ease: "power1.in",
    duration: 0.5,
    delay: 0.5,
    background: 'transparent',
    onComplete: () => {
      document.querySelector(".splash-loader").style.display = "none";
    },
  })
}

function createHeaderTimeline(tl) {
  tl.from(".logo", {
    y: -50,
    x: -100,
    opacity: 0,
    scale: 0,
    ease: "power1.out",
    duration: 0.25,
  });
  tl.from(".nav-item", {
    y: -50,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.out",
    duration: 0.25,
  });
}

function createHeroTimeline(tl) {
  tl.from(".hero-item", {
    y: 20,
    opacity: 0,
    stagger: 0.075,
    duration: 0.2,
    ease: "power1.in",
  });
  tl.from(".hero-section .btn", {
    y: 50,
    opacity: 0,
    stagger: 0.25,
    duration: 0.2,
    ease: "power1.in",
  });
  tl.from(".hero-section .btn svg", {
    scale: 0,
    y: -125,
    opacity: 0,
    ease: "power1.in",
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
  // tl.from(".services-card", {
  //   // y: 5000,
  //   x: -500,
  //   // scale: 1.2,
  //   opacity: 0,
  //   stagger: 0.4,
  //   ease: "power1",
  //   scrollTrigger: {
  //     trigger: ".services-section",
  //     start: "center 100%",
  //     end: "top 0px",
  //     toggleActions: "play play play complete",
  //   },
  // });
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
createSplashScreen(tl);
createHeaderTimeline(tl);
createHeroTimeline(tl);
// createAchievementTimeline(tl);
// createAboutUsTimeline(tl);
// createTestimonialsTimeline(tl);
// createServicesTimeline(tl);

if (window.innerWidth > 768) {
  gsap.from(".blob", {
    scrollTrigger: {
      trigger: ".blob",
      start: "-=100 80%",
      end: "-=10 60%",
      scrub: 0.3,
      triggerAction: "play none none reverse",
      ease: "power1.in",
    },
    y: 500,
    x: 500,
    scale: 1.2,
  });
  gsap.from(".achievements", {
    scrollTrigger: {
      preventOverlaps: true,
      trigger: ".hero",
      start: "top 80%",
      end: "bottom 40%",
      scrub: true,
      triggerAction: "play none none reverse",
      ease: "power1.in",
    },
    opacity: 0,
    y: -300,
  });
  gsap.from(".achievement ", {
    scrollTrigger: {
      trigger: ".achievements",
      start: "top 80%",
      end: "top 20%",
      scrub: 0.3,
      triggerAction: "play none none reverse",
      ease: "power1.in",
    },
    y: 100,
  });

  // Skew with mouse move
  // Only when on desktop

  gsap.from(".achievement-card", {
    scrollTrigger: {
      trigger: ".achievement",
      start: "top 80%",
      end: "top 5%",
      scrub: 0.3,
      triggerAction: "play none none reverse",
    },
    y: 100,
    skewY: 25,
  });
  gsap.from(".about-us-section > img", {
    scrollTrigger: {
      trigger: ".about-us-section",
      start: "top 80%",
      end: "top 5%",
      scrub: true,
      triggerAction: "play none none reverse",
    },
    y: -500,
  });
}
gsap.from(".about-us-header", {
  scrollTrigger: {
    trigger: ".about-us-header",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.3,
    triggerAction: "play none none reverse",
    ease: "power1.in",
  },
  y: 100,
  opacity: 0,
});
gsap.from(".about-us-section .about-us-desc", {
  scrollTrigger: {
    trigger: ".about-us-header",
    start: "top 60%",
    end: "top 20%",
    triggerAction: "play none none reverse",
  },
  ease: "power1.in",
  y: 120,
  opacity: 0,
});
gsap.from(".about-us-section .about-us-card", {
  scrollTrigger: {
    trigger: ".about-us-card",
    start: "top 60%",
    end: "top 10%",
    triggerAction: "play none none reverse",
  },
  stagger: 0.5,
  ease: "power1.in",
  y: 80,
  opacity: 0,
});
if (window.innerWidth > 768) {
  gsap.from(".lines-illustration", {
    scrollTrigger: {
      trigger: ".lines-illustration",
      start: "top 80%",
      end: "top 20%",
      scrub: 0.2,
      triggerAction: "play none none reverse",
    },
    ease: "power1.in",
    y: 120,
    opacity: 0,
  });
  gsap.from(".testimonial-header", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 80%",
      end: "top 20%",
      triggerAction: "play none none reverse",
    },
    ease: "power1.in",
    y: 200,
    opacity: 0,
  });
  gsap.from(".slider-image img", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 40%",
      triggerAction: "play none none reverse",
    },
    // Parallax move
    y: 100,
    skewY: 25,
    opacity: 0,
  });
  gsap.from(".testimonial", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 40%",
      triggerAction: "play none none reverse",
    },
    ease: "power1.in",
    y: 200,
    opacity: 0,
  });

  gsap.from(".slider-control .slider-button", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 80%",
      end: "top 5%",
      triggerAction: "play none none reverse",
    },
    stagger: 0.05,
    ease: "power1.in",
    y: 1000,
    skewY: 10,
    opacity: 0,
  });
  gsap.from(".testimonial-details", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 80%",
      end: "top 0%",
      scrub: 0.5,
      triggerAction: "play none none reverse",
    },
    ease: "power1.in",
    y: 1000,
    skewY: 10,
    opacity: 0,
  });
}

// gsap.from('.services-cards', {
//   scrollTrigger: {
//     trigger: '.services-cards',
//     start: 'top 100%',
//     end: 'bottom 0%',
//     scrub: 0.5,
//     triggerAction: 'play none none reverse',
//   },
//   y: 100,
//   skewY: 25,
// })
