const tll = gsap.timeline({defaults: {duration: 1}});
tll.from("nav h2", {
    y: -30,
    opacity: 0,
})
.from("nav ul li", {
    y: -30,
    opacity: 0,
    stagger: 0.2,
})
.from(".mt", {
    y: 30,
    opacity: 0,
    scale:0.2,
})