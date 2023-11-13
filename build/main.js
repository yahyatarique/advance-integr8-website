// GSAP
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger
ScrollTrigger.defaults({
    toggleActions: 'play none none reverse'
})

gsap.from('.hero-item', {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.25,
})

gsap.from(".nav-item", {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 0.2
})

gsap.from(".hero-cta", {
    transformOrigin: "50% 50%",
    duration: 1,
})