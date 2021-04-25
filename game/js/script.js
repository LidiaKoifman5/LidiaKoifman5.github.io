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


   
});
          
