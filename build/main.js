gsap.registerPlugin(ScrollTrigger);

function createHeaderTimeline(tl) {
    tl.from(".logo", { y: -50, x: -100, opacity: 0, scale: 0, duration: 0.5 })
    tl.from(".nav-item", { y: -50, opacity: 0, duration: 0.5, stagger: 0.1 })
}

function createHeroTimeline(tl) {
    tl.from('.hero-item', { y: 50, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" })
    tl.from('.btn', { scale: 1.5, y: -50, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" })
}

function createAchievementTimeline(tl) {
    tl.from('.achievement', { y: 50, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" })
    tl.from('.achievement-card', { y: 50, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" })
}




const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1, delay: 0, stagger: 0 } });
createHeaderTimeline(tl);
createHeroTimeline(tl);
createAchievementTimeline(tl);