var imgs = document.querySelectorAll('.images');
var intro = document.querySelector('#intro');
var navi = document.querySelector('#nav');
var page1 = document.querySelector('#page1');
var website = document.querySelector('#website');
var by = document.querySelector('body');
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
        by.classList.remove('overflow-hidden');
        by.classList.add('overflow-y-scroll')
    }
})
var lastScrollY = window.scrollY;
window.addEventListener('scroll',()=>{
    var currentScroll = window.scrollY;
    if(currentScroll + 0.5 > lastScrollY){
        navi.classList.remove('opacity-100','translate-y-0')
        navi.classList.add('opacity-0','-translate-y-full');
    }
    else{
        navi.classList.remove('opacity-0','-translate-y-full');
        navi.classList.add('opacity-100','translate-y-0')
    }
    lastScrollY = currentScroll;
})