






// usefull code for feature portfolio

// document.addEventListener('DOMContentLoaded', function () {
//     const toggleBtn = document.getElementById('toggle-btn');
//     const leftHeader = document.getElementById('left-header');

//     toggleBtn.addEventListener('click', function () {
//         if (leftHeader.style.left === '-250px' || leftHeader.style.left === '') {
//             leftHeader.style.left = '0';
//         } else {
//             leftHeader.style.left = '-250px';
//         }
//     });

//     // Close the left header when a user clicks outside of it
//     window.addEventListener('click', function (event) {
//         if (event.target !== toggleBtn && event.target.parentNode !== leftHeader && leftHeader.style.left === '0') {
//             leftHeader.style.left = '-250px';
//         }
//     });

//     // Toggle the left header on window resize for responsiveness
//     window.addEventListener('resize', function () {
//         if (window.innerWidth > 768) {
//             leftHeader.style.left = '0';
//         } else {
//             leftHeader.style.left = '-250px';
//         }
//     });
// });

function dragger(){

}

$(function(){
    $('.dragger').click(function(){
        $('. ').css( 'transform' , "translateX(0)")
    })
})

function addspan(params) {
    document.querySelectorAll(".repeat")
    .forEach(function (elem){
        // create two span tag

       let spanParent =  document.createElement("span");
       let spanChild =  document.createElement("span");
        // add classes in the snap tag

       spanParent.classList.add("parent");
       spanChild.classList.add("child");

    //    span parent get child and child span get elam
       spanParent.appendChild(spanChild);

       spanChild.textContent = elem.textContent;
        // elem replace its value with parent span
       elem.innerHTML ="";
       elem.appendChild(spanParent)
    })
}
addspan();

let tl = gsap.timeline();

tl
.from("h1 .parent .child",{
    x: 100,
    duration: 1 ,
    // stagger: 1,
    // delay:1,
    ease:  Circ.easeInOut
})
.to(".parent .child",{
    y: "-103%",
    duration: 1 ,
    delay: 0,
    ease:  Circ.easeInOut
})
// .to(".loading" ,{
//     y: "-101%",
//     duration: 1 ,
//     delay: .1,
//     ease:  Circ.easeInOut
// })

.to( ".loader",{
    height:0,
    duration: .9 ,
    delay: -.1,
    ease:  Circ.easeInOut
})
.to( ".green",{
    height:"100%",
    top: 0,
    duration: 1 ,
    delay: -1,
    ease:  Circ.easeInOut
})
.to( ".green",{
    height:0,
    duration: 1 ,
    delay: -.5,
    ease:  Circ.easeInOut
})

.from(".t-ab",{
    scale:1.3,
    duration:1,
    yoyo: true,
    repeat:-1
})

// .to("#main",{
//     // position: absolute,
//     // top: "100%",
//     diplay:none,
// })


