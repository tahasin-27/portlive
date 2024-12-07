const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// hero section
function heroAnimation() {

    let tl = gsap.timeline();
        tl.from("#nav", {
            y: "20",           
            opacity: 0,
            duration: 1.2,
            ease: Expo.easeInOut,
        })

        .to(".elem_effect", {
            y: "0",
            ease: Power4,
            duration: 1,

        })

        .from("#based", {
            y: "-10",
            opacity: 0,
            ease: Expo.easeInOut,
        })

        .from("#time", {
            y: "-10",
            duration: 0.5,
            opacity: 0,
            ease: Expo.easeInOut,
        })

        .from("#hero_footer", {
            opacity: 0,
        })
}

heroAnimation();

// Link hover on my name mouse follower animation
var circle = document.querySelector(".circle")
var navh3 = document.querySelector("#nav h3");
navh3.addEventListener("mouseover", function() {
    circle.style.height = "25px";
    circle.style.width = "25px";
})

navh3.addEventListener("mouseleave", function() {
    circle.style.height = "12px";
    circle.style.width = "12px";
})

// Link hover on button mouse hover animation
document.querySelector("#work a").addEventListener("mouseover", function() {
    circle.style.height = "25px";
    circle.style.width = "25px";
})

document.querySelector("#work a").addEventListener("mouseleave", function() {
    circle.style.height = "12px";
    circle.style.width = "12px";
})

document.querySelector(".talk a").addEventListener("mouseover", function() {
    circle.style.height = "25px";
    circle.style.width = "25px";
})

document.querySelector(".talk a").addEventListener("mouseleave", function() {
    circle.style.height = "12px";
    circle.style.width = "12px";
})



// Experience section

// function ExperienceAnimation() {
//     var elem = document.querySelectorAll(".product");

//     elem.forEach(function (val) {
//         console.log(val);
//         var rotation = 0;
//         var rotationDiff = 0;

        
//         val.addEventListener("mousemove", function(dets) {
//             console.log("mouse move");
//             var mousePositionY = dets.clientY;
//             var valPositionY = val.getBoundingClientRect().top
//             var mousePositionDiff = mousePositionY - valPositionY;
//             // console.log(mousePositionDiff)

//             rotationDiff = dets.clientX - rotation;
//             rotation = dets.clientX;

//             var img = val.querySelector("img");

//             gsap.to(img, {
//                 opacity: 1,
//                 top: mousePositionDiff,
//                 ease: Power4,
//                 left: dets.clientX,
//                 rotate: gsap.utils.clamp(-20, 20, rotationDiff * 0.5),
//                 // left: dets.clientX,
//             });
//         });

//         val.addEventListener("mouseleave", function(dets) {
//             console.log("mouse left")
           

//             var img2 = val.querySelector("img");

//             console.log(img2);
//             gsap.to(img2, {
//                 opacity: 0,
//                 duration: 1,
//                 ease: Power3,

                
//                 // left: dets.clientX,
//             });
//         });

//     });   
// }

// ExperienceAnimation();

// Button events
function mousePointerColor() {
    const work = document.querySelector("#work a");
    work.addEventListener("mouseover", function() {
        const circle = document.querySelector(".circle");
        // xposition = `${dets.clientX}px`;
        // yposition = `${dets.clientY}px`;
        // circle.style.backgroundColor = "#000";
    });
    work.addEventListener("mouseleave", function() {
        const circle = document.querySelector(".circle");
        // xposition = `${dets.clientX}px`;
        // yposition = `${dets.clientY}px`;
        // circle.style.backgroundColor = "#fff";
    });


}

mousePointerColor();
// document.querySelectorAll(".product").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     elem.addEventListener("mouseleave", function (dets) {
//       gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
  
//     elem.addEventListener("mousemove", function (dets) {
//       var diff = dets.clientY - elem.getBoundingClientRect().top;
//       diffrot = dets.clientX - rotate;
//       rotate = dets.clientX;
//       gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: dets.clientX,
//         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//       });
//     });
//   });


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
}



function mouseFollower(xscale, yscale) {
    var circle = document.querySelector(".circle");
    window.addEventListener("mousemove", function(dets) {
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;       
    })
}

mouseFollower();
mouseFlate();


// View animation

function viewAnimation() {
    var elem = document.querySelectorAll(".product");

    elem.forEach(function (val) {

        val.addEventListener("mouseenter", function() {
            var visibility = document.querySelector(".visibility")
            visibility.style.opacity = 1;
        })

        val.addEventListener("mouseleave", function() {
            var visibility = document.querySelector(".visibility")
            visibility.style.opacity = 0;
        })
    })
}

viewAnimation();

// Update mouse follower position




//more efficient way
// function circleFlate() {
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     var circle = document.querySelector(".circle");
//     clearTimeout(timeout);
//     window.addEventListener("mousemove", function(dets) {
//         xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//         yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
//         console.log(xscale);
//         console.log(yscale);

//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

//         timeout = setTimeout(function() {
//             circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

//         }, 100)


//     })
// }

// circleFlate();




//redirect to another page using javascript 

// document.querySelectorAll(".product img").forEach((img) => {
//     console.log("my image is", img);
//     img.addEventListener("mouseenter", function () {
//         console.log("pointer event");
//         img.style.pointerEvents = "auto";
//     });

//     img.addEventListener("mouseleave", function () {
//         console.log("leave pointer event");
//         img.style.pointerEvents = "none";
//     });

//     img.addEventListener("click", function () {
//         window.location.assign("sundown.html"); // Redirect logic here
//     });
// });






// function sundown() {
//     img.style.pointerEvents = "auto";
//     location.assign("sundown.html");
//   }



// function gamezone() {
//     location.assign("gamerzone.html");
//   }



//experience section
var elem = document.querySelectorAll(".product");

elem.forEach(function(val) {

    val.addEventListener("mouseenter", function() {
        console.log("child nodes", val.childNodes[5]);
        val.childNodes[5].style.opacity = 1;
    })

    val.addEventListener("mouseleave", function() {
        val.childNodes[5].style.opacity = 0;
    })

    val.addEventListener("mousemove", function(details) {
        val.childNodes[5].style.left = details.x + "px";
        // val.childNodes[3].style.top = details.y + "px";
    })
});


// redirecting to sundown page
function sundown() {
    location.assign("sundown.html");
  }

// redirection to gamerzone page
function gamerzone() {
    location.assign("gamerzone.html");
  }

// redirection to amazon page
function amazon() {
    location.assign("amazon.html");
    }

// redirection to portfolio page
function portfolio() {
    location.assign("portfolio.html");
  }

// redirection to architect page
function architect() {
    location.assign("gthree.html");
  }