//  NAVBAR STYLE ON SCROLL

window.addEventListener("scroll",()=>{
    document.querySelector(".nav").classList.toggle("window-scroll",window.scrollY > 0)
})

// SHOW HIDE FAQ ANSWER 
const faqs = document.querySelectorAll(".faq")
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("faq__open");

        // change icon
        const icon = faq.querySelector(".faq__icon i")
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }else if(icon.className === "uil uil-minus"){
            icon.className = "uil uil-plus";
        }
    })
})

// COLLAPSABLE MENU
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener("click",()=>{
    menu.style.display = "flex"
    menu.style.animation = "openNav .3s ease forwards"
    openBtn.style.display = "none"
    closeBtn.style.display = "inline-block"
})
closeBtn.addEventListener("click", () => {
    menu.style.animation = "none"
    menu.style.animation = "closeNav .3s ease forwards"
    closeBtn.style.display = "none"
    openBtn.style.display = "inline-block"
})