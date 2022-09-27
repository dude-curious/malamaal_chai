// -----------preloader-----------
window.addEventListener('load',()=>{
    const preloader=document.querySelector(".preloader");

        preloader.style="transform:scaleY(0)";
        

    window.setTimeout(()=>{
    preloader.style.display='none';

    },1000)

})

