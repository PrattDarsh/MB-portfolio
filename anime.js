gsap.from(".title", { opacity: 0, scale: 0 });
gsap.from("#bottomLine", { opacity: 0, y: 30 });
gsap.from("#dot", { opacity: 0, scale: 2 });
gsap.from(".img1", { opacity: 0, x: 50, rotate: 45 });

let pt1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "top bottom",
    toggleActions: "play none none pause",
    scrub: true,
  },
});

pt1.from(".pt1", { opacity: 0, stagger: 0.1, scale: 0 });

let pt2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top bottom",
    toggleActions: "play none none pause",
    scrub: true,
  },
});
pt2.from(".line", { opacity: 0 });
pt2.from(".pt2", { opacity: 0, stagger: 0.1, scale: 0 }, "-=0.5");

let pt3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top bottom",
    toggleActions: "play none none pause",
    scrub: true,
  },
});

pt3.from(".pt3", { opacity: 0, stagger: 0.1, scale: 0 });

let pt4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "top bottom",
    toggleActions: "play none none pause",
    scrub: true,
  },
});

pt4.from(".pt4", { opacity: 0, stagger: 0.1, scale: 0 });
