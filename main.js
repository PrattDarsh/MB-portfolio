function removeElement(element) {
  element = document.getElementById(element);

  element.classList.toggle("hidden");
}
let fluid = gsap.timeline({
  ease: "linear",
  scrollTrigger: {
    trigger: "#landing",
    toggleActions: "play none none pause",
    scrub: 0.8,
    pin: true,
    end: "+=" + window.innerHeight * 8,
  },
});

// gsap.from('.title', { opacity: 0, x: 100, stagger: 0.3 })

fluid
  .to(".title", { opacity: 0, y: -100 })
  .to(".desc", { opacity: 0, y: -100 }, "-=0.5")
  .from(".timeLine", { opacity: 0, y: 100 }, "-=0.5")
  .to(".dandelion", { opacity: 0, y: -100 }, "-=0.5")
  .from(".leaf", { opacity: 0, y: -500, x: 1200 }, "-=0.5")
  .from(".leaf2", { opacity: 0, y: -500, x: 1200 }, "-=0.5")
  .from(".leaf3", { opacity: 0, y: -500, x: 1200 }, "-=0.5")
  .from(".img1", { opacity: 0, x: -100 }, "-=0.5")
  .from(".desc2", { opacity: 0, y: 200 }, "-=0.5")
  .from(".desc2x", { opacity: 0, y: 200 }, "+=1")
  .from(".btn1", { opacity: 0, y: 200 }, "+=1")
  .to(".leaf", { y: -500 }, "-=1")
  .to(".leaf2", { y: -500, rotate: 45 }, "-=1")
  .to(".leaf3", { y: -500, rotate: 90 }, "-=1")
  .to(".desc2", { opacity: 0, y: -100 })
  .to(".desc2x", { opacity: 0, y: -100 }, "-=0.5")
  .to(".btn1", { opacity: 0, y: -100 }, "-=0.5")
  // .to(".img1", { opacity: 0, x: 100 }, "-=0.5")
  .from(".sun", { opacity: 0, x: 200 })
  .from(".desc3", { opacity: 0, y: 200, onComplete: () => bgBlack() }, "-=0.2")
  .from(".btn2", { opacity: 0, y: 200 }, "+=1")
  .from(".img2", { opacity: 0, x: -100, stagger: 0.5 }, "-=0.2")
  .from(".cls-1", { opacity: 0, y: -100, stagger: 0.5 }, "-=0.2")
  .to(".leaf", { x: 800, y: 10, rotate: -45 }, "-=0.2")
  .to(".leaf2", { x: 800, y: 10, rotate: 90 }, "-=0.2")
  .to(".leaf3", { x: 800, y: 10, rotate: 180 }, "-=0.2")
  .to(".desc3", { opacity: 0, y: -100 }, "+=0.2")
  .to(".btn2", { opacity: 0, y: -100 }, "-=0.5")
  .to(".img1", { opacity: 0, x: 100 }, "-=0.5")
  .to(".img2", { opacity: 0, x: 100 }, "-=0.2")
  .to("#Layer_2", { opacity: 0, y: 100 }, "-=0.2")
  .to(".sun", { opacity: 0, scale: 100 }, "-=0.2")
  .to(".leaf", { x: 200, y: -500, rotate: 180 }, "-=0.2")
  .to(".leaf2", { x: 200, y: -500, rotate: -90 }, "-=0.2")
  .to(".leaf3", { x: 200, y: -500 }, "-=0.2")
  .from(".desc4", { opacity: 0, y: 200 }, "+=0.2")
  .from(".btn3", { opacity: 0, y: 200 }, "+=1")

  .from(".img3", { opacity: 0, x: -100, scale: 50 }, "-=0.2")
  .from(".butterfly", { opacity: 0, x: -200, y: 100 }, "-=0.1")
  .to(".desc4", { opacity: 0, y: -100 }, "+=0.2")
  .to(".btn3", { opacity: 0, y: -100 }, "-=0.5")

  // .to(".img3", { opacity: 0, x: 100 }, "-=0.2")
  .to(".butterfly", { opacity: 0, x: 400, y: -300 }, "-=0.2")
  .from(".desc5", { opacity: 0, y: 200 }, "+=0.2")
  .from(".btn4", { opacity: 0, y: 200 }, "+=1")
  // .from(".img4", { opacity: 0, x: -100 }, "-=0.2")
  .to(".leaf", { x: 20, y: 20, rotate: -45 }, "-=0.2")
  .to(".leaf2", { x: 20, y: 20, rotate: -180 }, "-=0.2")
  .to(".leaf3", { x: 20, y: 20, rotate: 180 }, "-=0.2")
  .from(".bird", { opacity: 0, x: -100 }, "-=0.2")
  .to(".desc5", { opacity: 0, y: -100, scale: 0.5 }, "+=0.2")
  .to(".btn4", { opacity: 0, y: -100 }, "-=0.5")
  .to(".img3", { opacity: 0, x: 100 }, "-=0.2")
  .to(".bird", { opacity: 0 }, "-=0.2")
  .from(".desc6", { opacity: 0, y: 200, scale: 50 }, "+=0.2")
  .from(".img5", { opacity: 0, x: -300, rotate: -45 }, "-=0.2")
  .to(".leaf", { x: 800, rotate: -45 }, "-=0.2")
  .to(".leaf2", { x: 800, rotate: 180 }, "-=0.2")
  .to(".leaf3", { x: 800, rotate: -45 }, "-=0.2")
  .to(".desc6", { opacity: 0, y: -100 }, "+=0.2")
  .to(".compass", { opacity: 0, x: -10 }, "+=0.2")
  .to(
    ".img5",
    {
      opacity: 0,
      scale: 100,
      rotate: 45,
      duration: 5,
      onStart: () => bgPaper(),
      onReverseComplete: () => bgBlack(),
    },
    "-=0.2"
  )
  .from(".desc7", { opacity: 0, x: 100 }, "-=0.2")
  .from(
    ".card",
    { opacity: 0, x: 100, stagger: 0.3, rotate: 10, onStart: () => bgBlack() },
    "+=2"
  )
  .to(".card", { opacity: 0, x: -100, stagger: 0.3, rotate: -10 });
// .to('.desc6', { opacity: 0, y: -100, }, '+=0.2')
// .to('.img5', { opacity: 0, x: 100, }, '-=0.2')
// let tl1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '#section1',
//         toggleActions: 'play none none pause',
//         scrub: true,
//         pin: true
//     }
// })

// tl1.from('.point1', { opacity: 0, y: 200, duration: 0.5 })
//     .from('.img1', { opacity: 0, x: -200 }, '-=0.5')

// -----------------------------EDU----------------------------

function bgBlack() {
  document.body.classList.remove("bg-purple-400");
  document.body.classList.remove("bgPaper");
}

// -----------------BOOK----------------
function bgPaper() {
  document.body.style.transition = "all 1s";
  document.body.classList.add("bgPaper");
}

// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// function pageTransition() {
//   var scroller = gsap.timeline();
//   scroller.to(".loading", {
//     duration: 1.2,
//     width: "100%",
//     left: "0%",
//     ease: "Expo.easInOut",
//   });

//   scroller.to(".loading", {
//     duration: 1,
//     width: "100%",
//     left: "100%",
//     ease: "Expo.easInOut",
//     delay: 0.3,
//   });

//   scroller.set(".loading", { left: "-100%" });
// }

// function contentAnimation() {
//   var tl = gsap.timeline();
// }

// barba.init({
//   sync: true,
//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();
//         pageTransition();
//         await delay(1000);
//         done();
//       },
//       async enter(data) {
//         contentAnimation();
//       },
//       async once(data) {
//         contentAnimation();
//       },
//     },
//   ],
// });
