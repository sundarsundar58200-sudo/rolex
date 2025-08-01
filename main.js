const menuBtn = document.getElementById( "menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains9("open");
    menuBtnIcon.setAttribute(
      "class",
        isOpen ?"ri-close-line" : "ri-menu-3-line"
    );
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menuBtn.setAttribute("class","ri-menu-3-line");
});    

 const scrollrevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 100,
 };
 scrollReveal().reveal(".header__content h1"; {
    ...scrollrevealOption,
 });

 scrollReveal().reveal("header__content .section__description", {
    ...scrollrevealOption,
    delay: 500,
 });
 scrollReveal().reveal(".header__content from",{
    ...scrollrevealOption,
    delay:1000,
 });
 scrollReveal().reveal(".header__content img", {
    ...scrollrevealOption,
    origin:"left",
    delay:1500,
 });    

 scrollReveal9().reavel(".about__content . section__header", {
    ...scrollrevealOption,
 });
 scrollReveal().reavel(".about__content . section__description", {
    ...scrollrevealOption,
    delay: 500,
 });
 scrollReveal().reavel(".about__signature", {
    ...scrollrevealOption,
    delay: 1000,
 });         

 scrollReveal().reavel("tour__card", {
    ...scrollrevealOption,
    intrvel:500,
 });   