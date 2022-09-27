// -----------preloader-----------
window.addEventListener('load',()=>{
    const preloader=document.querySelector(".preloader");

        preloader.style="transform:scaleY(0)";
        

    window.setTimeout(()=>{
    preloader.style.display='none';

    },1000)

})

// ----------navbar----------------
const hamburgerPath=document.querySelector("#hamburger svg path");
const hamburger=document.querySelector("#hamburger");
const mobileNav=document.querySelector('#mobileNav');

hamburger.addEventListener('click',()=>{
    
    if(hamburgerPath.getAttribute('d')!="M6 18L18 6M6 6l12 12"){
        hamburgerPath.setAttribute('d',"M6 18L18 6M6 6l12 12");
        mobileNav.style="opacity:1;display:block;";
    }
    else{
        hamburgerPath.setAttribute('d',"M4 6h16M4 12h16m-7 6h7");
        mobileNav.style="opacity:0;display:none;";

    }
});

// const header=document.querySelector("header");
// const head=document.querySelector("header .head");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       header.classList.add('bg-beige');
//       header.classList.remove('bg-transparent');
//       mobileNav.classList.add('bg-beige')
//     } else {
//         header.classList.remove('bg-beige');
//         header.classList.add('bg-transparent');
//         mobileNav.classList.remove('bg-beige')
//     }
//   }

