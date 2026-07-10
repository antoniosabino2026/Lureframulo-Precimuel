console.log("Está conectado!")
/* ==========================================================
   SELETORES
========================================================== */

const header = document.querySelector(".header");

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


/* ==========================================================
   MENU MOBILE
========================================================== */

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

    menuToggle.classList.toggle("active");

});


/* ==========================================================
   FECHAR MENU AO CLICAR NUM LINK
========================================================== */

const menuLinks = document.querySelectorAll(".main-nav a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuToggle.classList.remove("active");

    });

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