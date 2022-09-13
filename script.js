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
