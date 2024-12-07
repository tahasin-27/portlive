const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// Mouse flate
var timeout;

function mouseFlate() {
    var xscale = 1;
    var yscale = 1;

    var xpre = 0;
    var ypre = 0;

    window.addEventListener("mousemove", function(dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xpre);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - ypre);

        xpre = dets.clientX;
        ypre = dets.clientY;

        mouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector(
              ".circle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
          }, 100);
    })
};

mouseFlate();

// Mouse follower
function mouseFollower(xscale, yscale) {
    var circle = document.querySelector(".circle");
    window.addEventListener("mousemove", function(dets) {
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;       
    })
};

mouseFollower();


// Link hover on my name mouse follower animation
var circle = document.querySelector(".circle")
var navh3 = document.querySelector("#nav h3");
navh3.addEventListener("mouseover", function() {
    circle.style.height = "25px";
    circle.style.width = "25px";
});

navh3.addEventListener("mouseleave", function() {
    circle.style.height = "12px";
    circle.style.width = "12px";
});