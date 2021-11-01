gsap.from(".title", { opacity: 0, scale: 0 });
gsap.from("#bottomLine", { opacity: 0, y: 30 });
gsap.from("#dot", { opacity: 0, scale: 2 });
gsap.from(".img1", { opacity: 0, x: 50, rotate: 45 });

var follow = document.querySelector(".follower");
var cur = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
  gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
});

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

// ------------MENU------------------
gsap.from(".whiteLine", { scale: 0 });
let menuAnim = gsap.timeline().pause();
var flag = 0;
menuAnim.from(".menuItems", {
  opacity: 0,
  x: 30,
  stagger: 0.1,
  ease: "bounce",
});

function showMenu() {
  document.getElementById("menuTray").classList.toggle("hidden");
  menuAnim.play();

  // document.getElementById('upperLine').classList.toggle('rotate-45')
  // document.getElementById('lowerLine').classList.toggle('-rotate-45')
}
