gsap.from(".page1 .box", {
    scale:0,
    duration:1,
    delay:1,
    ease:"elastic"
});
gsap.from(".page2 .box", {
    scale:0,
    duration:1,
    delay:1,
    rotate:360,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "bottom 30%",
        scrub: true,
    }
});
gsap.to(".page3 h1", {
    transform:"translateX(-240%)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
});
// gsap.from(".page4", {
//     scale:0,
//     duration:1,
//     delay:1,
//     ease:"elastic",
//     scrollTrigger: {
//         trigger: ".page3 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "bottom 30%",
//         scrub: true,
//         pin: true,
//     }
// });