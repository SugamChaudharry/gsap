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



gsap.to(".box:nth-child(odd)", {
    x:1200,
    duration:2,
    delay: 1,
    ease: "bounce",
    rotate: 360,
    borderRadius: "50%",
})
gsap.from(".box:nth-child(even)", {
    x:1000,
    duration:2,
    delay: 1,
    ease: "bounce",
    rotate: 360,
    borderRadius: "50%",
    repeat:1,
    yoyo: true,
})

gsap.from("h1:nth-child(odd)", {
    opacity: 0,
    duration: 1,
    y:3,
    delay: 1,
    
});


// time line

const tl = gsap.timeline({defaults: {duration: 1}});
tl.to(".box1" , {
    x: 200,
    backgroundColor: "blue",
    borderRadius: "50%",
})
.to(".box2", {
    x: 200,
    backgroundColor: "red",
    borderRadius: "50%",
})
.to(".box3", {
    x: 200,
    backgroundColor: "green",
    borderRadius: "50%",
})

