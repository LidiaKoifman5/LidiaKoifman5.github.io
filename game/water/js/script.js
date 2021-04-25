"use strict";
    class Game {
      constructor(){
          this.score = 0;
          this.lives = 0;
          this.isRunning = false;
          this.isMouse = false;
          this.levelSpeed = 0;
          this.speed = 2200;
          this.currentEmoji = null;
          this.currentPipe = null;
          this.gameInterval = null;
          this.animals = ['🍁', '🍁', '🍁', '🍁', '🍁', '🍁', '🍁', '🍁', '🍁', '🍁', '🍁'];
          this.startButt = document.querySelector('.glass__button-start');
          this.selectPipe = document.querySelectorAll('.game-zone_animal');
          this.heartElem = document.querySelectorAll('.lives-wrapp__heart');
          this.livesInStock = document.querySelectorAll('.lives-wrapp__heart_active');
          this.speedValueNum = document.querySelector('.speed__value_num');
          this.modalBlock = document.querySelector('.modal-help'); // select modal guide  
          this.openModal = document.querySelector('.glass__button-guide'); // select '?' butt  
          this.closeModal = document.querySelector('.modal__submit_ok-butt'); // select 'OK' inside the modal rule
          this.modalEnd = document.querySelector('.modal__thanks');
          
      }

      mouseChance() {
        for (var i = 0; i < 11; i++) {
          this.animals.push('🍁');
        }
      }

      fillLives() {
        this.heartElem.forEach((live) => live.classList.add('lives-wrapp__heart_active'));
        this.lives = this.heartElem.length;
      }

      deleteHeart() {
        this.livesInStock = document.querySelectorAll('.lives-wrapp__heart_active');
        this.lives = this.livesInStock.length;
        this.livesInStock[this.livesInStock.length - 1].classList.remove('lives-wrapp__heart_active');
        this.lives = this.lives - 1;
      }

      fillInitScore() {
        this.score = 0;
        this.scoreElement = document.querySelector('.score__value');
        
      }

      fillMainScore(num) {
        this.score = this.score + num;
        this.scoreElement.innerHTML = this.score;
      }

      starAnimation() {
        this.speedValueNum.parentNode.classList.remove('star-animation');
        this.speedValueNum.parentNode.classList.add('star-animation');
        setTimeout(()=> this.speedValueNum.parentNode.classList.remove('star-animation'), 900);
      }
      

      fillInitLevel() {
        clearTimeout(this.animationTimeOut);
        this.levelSpeed += 1;
        this.speedValueNum.innerHTML = '';
        setTimeout(()=> this.speedValueNum.innerHTML = this.levelSpeed, 800);
        this.starAnimation();
      }

      setMoreSpeed(num) {
        this.speed = this.speed - num;
        clearInterval(this.gameInterval);
        this.gameInterval = setInterval(() => this.creatingAnimals(), this.speed);
        this.fillInitLevel();
      }

      randomPipe() {
          const indexPipe = Math.floor (Math.random() * this.selectPipe.length);
          const pipe = this.selectPipe[indexPipe];
          this.currentPipe = pipe;
          return pipe;
      }

      randomAnimals() {
          const indexEmoje = Math.floor (Math.random() * this.animals.length);
          const animals = this.animals[indexEmoje];
          return animals;
      }


      creatingAnimals() {
        let currentPipe = this.randomPipe();
        this.currentEmoji = this.randomAnimals();
        currentPipe.innerHTML = this.currentEmoji;
        currentPipe.classList.add('emoji_animation');
        setTimeout(()=> {
          currentPipe.classList.remove('emoji_animation');
          currentPipe.innerHTML = '';
        }, this.speed);
      }
      
      startGame() {
        this.mouseChance();
        this.fillLives();
        this.fillInitScore();
        this.fillInitLevel();
        this.gameInterval = setInterval(() => this.creatingAnimals(), this.speed);
        document.addEventListener('click', (e)=>{
            if(e.target !== this.startButt){
                this.clickOnEmoji(e);
            }
        });
      }
      
      clickOnEmoji(evt) {
        
        if (evt.target === this.currentPipe) {
          console.log('emoji = ' + this.currentEmoji);
        }
        if (evt.target.innerHTML === '🍁') {
          this.fillMainScore(10);
          if (this.score % 50 === 0) {
            this.setMoreSpeed(200);
          } if (this.score  === 500) {
            document.querySelector(".modal-prize").style.display = "flex";
            document.getElementById("endgame").style.display = "none";
            document.addEventListener('click', (e)=>{
              if(e.target !== this.closeModal){
                document.querySelector(".modal-prize").style.display = "none"; 
              }
            });
          }
        } else if (evt.target.closest('.glass__game')) {
          this.deleteHeart();
          
          if (this.lives == 0) {
            document.querySelector(".modal-end").style.display = "flex";
            document.getElementById("endgame").style.display = "none";
            document.addEventListener('click', (e)=>{
              if(e.target !== this.closeModal){
                document.querySelector(".modal-end").style.display = "none";
                
              }
            });
          } 
        }
        this.currentPipe.innerHTML = '';
        document.removeEventListener('click', (e) => this.clickOnEmoji(e));
         
      }
    
    } 
const startButt = document.querySelector('.glass__button-start'), // Select game butt
      modalBlock = document.querySelector('.modal-help'), // select modal guide  
      openModal = document.querySelector('.glass__button-guide'), // select '?' butt  
      closeModal = modalBlock.querySelector('.modal__submit_ok-butt'); // select 'OK' inside the modal rule

openModal.addEventListener('click', ()=> {
  modalBlock.classList.add('show-modal-help');
});

closeModal.addEventListener('click', ()=> {
  modalBlock.classList.remove('show-modal-help');
});

function buttonClick () {
    startButt.removeEventListener('click', buttonClick, false);
    let game = new Game;
    game.startGame();
} 
startButt.addEventListener('click', buttonClick);