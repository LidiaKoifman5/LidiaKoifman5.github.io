"use strict";
window.addEventListener('DOMContentLoaded', () => {

    const buttonStart = document.querySelector('.glass__button-start'),
          buttonClose = document.querySelector('.modal__thanks'),
          modalBlock = document.querySelector('.modal-help'),
          welcomeGame = document.querySelector('.modal-welcome'),
          openModal = document.querySelector('.glass__button-guide'), 
          map   = document.querySelector('.glass__map'),
          center   = document.querySelector('.glass__center'),
          closeModal = modalBlock.querySelector('.modal__submit_ok-butt');
    
    buttonStart.addEventListener('click', ()=> {
      welcomeGame.classList.add('show-modal-welcome');

    });
    buttonClose.addEventListener('click', ()=> {
      welcomeGame.classList.remove('show-modal-welcome');

    });

    //

    openModal.addEventListener('click', ()=> {
      modalBlock.classList.add('show-modal-help');

    });

    closeModal.addEventListener('click', ()=> {
      modalBlock.classList.remove('show-modal-help');
    });

    function buttonClick () {
        buttonStart.removeEventListener('click', buttonClick, false);
        let game = new Game;
        game.startGame();
    }
      
    buttonStart.addEventListener('click', buttonClick);
    //map active
    center.addEventListener('click', () => {
      map.classList.add('active'); 
    });
    //sun active
    const sun = document.querySelector(".glass__sun"),
          rotating = document.querySelector(".glass__rotating");
    sun.addEventListener('click', () => {
      rotating.classList.add('active'); 
    });
    //ballon active
    const ballon = document.querySelector(".glass__ballon"),
          ball = document.querySelector(".glass__ball");
    ballon.addEventListener('click', () => {
      ball.classList.add('active'); 
    });

// game-zone
    const boat = document.querySelector('.glass__boat');
    boat.onclick = function() {
  
        this.onclick = null; // only the first click should start the animation
  
        let times = 1;
  
        function go() {
          if (times % 2) {
            boat.classList.remove('glass__back');
            boat.style.marginLeft = 5 * times + 100 + 'px';
          } else {
            boat.classList.add('glass__back');
            boat.style.marginLeft = 5 * times - 100 + 'px';
          }
        }
        go();
        boat.addEventListener('transitionend', function() {
          times++;
          go();
        });
    };
    console.log(boat); 
   
});
          
