
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

/**
     * Easy event listener function
     */
 const on = (type, el, listener, all = false) => {
   if (all) {
     select(el, all).forEach(e => e.addEventListener(type, listener))
   } else {
     select(el, all).addEventListener(type, listener)
   }
 }

 /**
  * Easy on scroll event listener 
  */
 const onscroll = (el, listener) => {
   el.addEventListener('scroll', listener)
 }