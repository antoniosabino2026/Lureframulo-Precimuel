console.log("Está conectado!")
/* ==========================================================
   SELETORES
========================================================== */

const header = document.querySelector(".header");

const menuToggle = document.getElementById("menuToggle");

const closeMenu = document.getElementById("closeMenu");

const mainNav = document.getElementById("mainNav");

const overlay = document.getElementById("overlay");


/*===========================================
ABRIR MENU
===========================================*/

function openMenu(){

    mainNav.classList.add("active");

    overlay.classList.add("active");
    
    

    document.body.style.overflow="hidden";

}


/*===========================================
FECHAR MENU
===========================================*/

function closeNav(){

    mainNav.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow="";

}


menuToggle.addEventListener("click",openMenu);

closeMenu.addEventListener("click",closeNav);

overlay.addEventListener("click",closeNav);


/*===========================================
LINKS
===========================================*/

document.querySelectorAll(".main-nav a")

.forEach(link=>{

    link.addEventListener("click",closeNav);

});


/* ==========================================================
   NAVBAR STICKY
========================================================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});