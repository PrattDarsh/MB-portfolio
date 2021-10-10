gsap.from(".header", { y: 30, opacity: 0, delay: 0.5, stagger: 0.5 });
gsap.from(".hero", { x: 30, opacity: 0, delay: 0.5 });
gsap.from(".progressbar", { y: 30, opacity: 0 });
// let line = gsap.timeline().pause()
// line.from('.line', { opacity: 0, y: 30 })

let tl = gsap.timeline({
  ease: "linear",
  scrollTrigger: {
    trigger: "#fluid",
    toggleActions: "play none none pause",
    pin: true,

    scrub: 0.8,

    end: "+=" + window.innerHeight * 4,
  },
});

tl.from(".line", { opacity: 0, y: 30 })
  .from(".point1", { opacity: 0, y: 30, stagger: 0.5 })
  .from(".ilus1", { opacity: 0, x: 30 }, "-=1")
  // .to(".ilus1", { opacity: 0, x: 30 }, "+=1")
  .to(".point1", { opacity: 0, y: -200 })
  .from(".point2", { opacity: 0, y: 30 })
  .from(".yugen", { opacity: 0, x: -30 })
  .from(".cls-1", { opacity: 0, y: 30, stagger: 0.5 }, "-=0.5")
  // .from(".ilus2", { opacity: 0, x: -30 }, "-=1")
  .to(".ilus1", { opacity: 0, x: 30 })
  // .to(".ilus2", { opacity: 0, x: -30 }, "+=1")
  .to(".yugen", { opacity: 0, x: 30 })
  .to(".cls-1", { opacity: 0, x: 30 })
  .to(".point2", { opacity: 0, y: -200 }, "-=1")
  .to(".yg", { opacity: 0, x: 30 }, "-=0.5")
  .from(".point3", { opacity: 0, y: 30 })
  .from(".ilus2", { opacity: 0, x: -30 }, "-=1")
  // .to(".ilus2", { opacity: 0, x: -30 }, "+=1")
  // .from(".ilus3", { opacity: 0, x: -30 }, "-=1")

  .to(".point3", { opacity: 0, y: -200 })
  .from(".point4", { opacity: 0, y: 30 });
// .to(".ilus2", { opacity: 0, x: -30 }, "+=1");
// .from(".ilus3", { opacity: 0, x: -30 }, "-=1");
// .from(".ilus4", { opacity: 0, x: -30 }, "-=1");
