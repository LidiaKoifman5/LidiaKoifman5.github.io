"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
            menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        menu.classList.remove('animate__rollOut');
        menu.classList.add('animate__rollIn');
        
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        menu.classList.remove('animate__rollIn');
        menu.classList.add("animate__rollOut");
    });
    //animation
    
    // color
    const red = document.querySelector(".menu__red"),
          green = document.querySelector(".menu__green"),
          blue  = document.querySelector(".menu__blue"),
          orange= document.querySelector(".menu__orange"),
          painter= document.querySelector(".menu__painter");
      
    red.addEventListener('click', () => {  
        document.documentElement.style.setProperty('--main-color', '#bd3a3a');
        painter.style = red;
    });
    green.addEventListener('click', () => {
        document.documentElement.style.setProperty('--main-color', '#52d652');  
    });
    blue.addEventListener('click', () => {
        document.documentElement.style.setProperty('--main-color', '#01C2FF');  
    });
    orange.addEventListener('click', () => {
        document.documentElement.style.setProperty('--main-color', '#f89e16'); 
    });
  
        //progress
    const progress = document.querySelectorAll(".skills__progress-counter"),
             lines = document.querySelectorAll(".skills__progress-line span");
    progress.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });  

    // validate

//    const form = document.querySelectorAll(".contacts__form"),
//           name = document.querySelectorAll(".contacts__name"),
//           email = document.querySelectorAll(".contacts__email"),
//           inputs = document.querySelectorAll("input");
   
    
//         const pristine = new Pristine(form);
//         form.addEventListener('submit', function (e) {
//             e.preventDefault();
//             const valid = pristine.validate();
            
//             if (valid == false) {
//                 form.style.backgroundColor = "lightgrey";
//                 inputs.forEach(input => {
                    
//                     input.style.cssText =`border: 2px solid red;`;
//                 });
//             } else if (valid == true) {
//                 inputs.forEach(input => {
//                     input.style.cssText =`border: 2px solid green;`;
//                     input.style.backgroundColor = "#fff";
//                 });
//                 form.style.backgroundColor = "";
//                 e.target.reset();
//             }       
           
//         });

    new WOW().init();


    // sidepanel
    function offset(a) { 
        for (var b = 0; a;) {
            b += parseInt(a.offsetTop); 
            a = a.offsetParent;
            return b;
        }
    }
    let s = !0;
    window.onload = function () {
        const a = document.querySelector(".sidepanel"),
            b = offset(a),
            f = window.getComputedStyle ? getComputedStyle(a, "") : a.currentStyle, 
            d = a.offsetHeight + parseInt(f.marginTop) || 0,
            e = offset(document.querySelector(".price"));
        
        window.onscroll = function () {
            var c = window.pageYOffset || document.documentElement.scrollTop;
                c = e - (c + d + b);
                s != 0 < c && ((s = 0 < c) ? (a.style.top = b + "px", a.style.position = "fixed") : (a.style.top = e - d + "px", a.style.position = "absolute"));    
        };
    };
        
    
    
    // pageUp
    const scrollPageUp = document.querySelector(".pageup");
    function scrollFunction() {
        if (document.documentElement.scrollTop > 2000) {
            scrollPageUp.style.display = "block";
        } else {
            scrollPageUp.style.display = "none";
        }
    }
    window.addEventListener("scroll", ()=>{
        scrollFunction();
    });
    function myAnimation() {
        console.log(2);
        document.documentElement.scrollBy(0,-50);
        if (document.documentElement.scrollTop > 0 ) {
            requestAnimationFrame(myAnimation);
        }
    }
    scrollPageUp.addEventListener("click", () => {
        requestAnimationFrame(myAnimation);
        console.log(1);
    });     
            
});