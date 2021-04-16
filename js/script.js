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

    const form = document.querySelector(".contacts__form"),
          name = document.querySelector(".contacts__name input"),
          email = document.querySelector(".contacts__email input"),
          policy = document.querySelector(".contacts__policy"),
          policyInput = policy.querySelector("input"),
          divName = document.createElement("div"),
          divEmail = document.createElement("div"),
          divPolicy = document.createElement("div"),
          status = document.querySelector("#my-form-status");
    let nameValide = false,
        emailValide = false,
        policyValide = false;
    function inputStyle(input) {
        input.style.cssText = `
            font-size: 13px;
            color: #000;
            margin-top: 5px;
            font-weight: bold;
        `;
    }
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!res.ok) {
            status.innerHTML = "Oops! There was a problem submitting your form";
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();     

    };
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        if (name.value){
            if(name.value.length >= 5 && (/\d/i).test(name.value) == false && (/\s/i).test(name.value) == true && (name.value).search(/\s/i) != name.value.length-1) {
                divName.textContent = "";
                name.style.border = "none";
                nameValide = true;
            } else {
                name.style.border = "3px solid red";
                divName.textContent = "Поле неправильно заполнено.";
                inputStyle(divName);
                name.after(divName);
                nameValide = false;
            }
        } else {
            nameValide = false;
            name.style.border = "3px solid red";
            divName.textContent = "Введите ваше имя.";
            name.after(divName);
            inputStyle(divName);
        }

        if (email.value) {
            if ((/@/i).test(email.value) && ((/.ua/i).test(email.value) || (/.com/i).test(email.value) || (/.ill/i).test(email.value) || (/.net/i).test(email.value) || (/.gov/i).test(email.value) || (/.co/i).test(email.value) || (/.org/i).test(email.value) || (/.us/i).test(email.value) || (/.con/i).test(email.value))) {
                divEmail.textContent = "";
                email.style.border = "none";
                emailValide = true;
            } else {
                email.style.border = "3px solid red";
                divEmail.textContent = "Поле неправильно заполнено.";
                inputStyle(divEmail);
                email.after(divEmail);
                emailValide = false;
            }
        } else {
            emailValide = false;
            email.style.border = "3px solid red";
            divEmail.textContent = "Введите ваш email.";
            email.after(divEmail);
            inputStyle(divEmail);
        }

        if (policyInput.checked) {
            divPolicy.style.display = "none";
            policyValide = true;
            policy.style.border = "none";
        } else {
            policyValide = false;
            policy.style.border = "3px solid red";
            divPolicy.textContent = "Введите V";
            policyInput.before(divPolicy);
            divPolicy.style.cssText = `
                font-size: 13px;
                color: #000;
                margin-top: -20px;
                font-weight: bold;    
            `;
        }
        if (nameValide && emailValide && policyValide) {
            postData(form.action, data)
            .then(response => {
                status.innerHTML = "Спасибо за сообщение!";
            }).catch(error => {
                status.innerHTML = "Ой! При отправке формы возникла проблема";
            }).finally(()=>{
                e.target.reset();
            });
        } 
    });
        








    //animation

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