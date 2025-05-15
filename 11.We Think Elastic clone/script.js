var imgs = document.querySelectorAll('.images');
var intro = document.querySelector('#intro');
const tl = gsap.timeline();
imgs.forEach((a)=>{
    tl.to(a,{opacity:1,duration:0.28})
    .to(a,{opacity:0,duration:0});
})
tl.to('#intro',{
    y: "-100%",
    duration:1.2,
    delay:-0.6,
    ease:"power3.inOut",
    onComplete:()=>{
        intro.style.display = 'none'
    }
})