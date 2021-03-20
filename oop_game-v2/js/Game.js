/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = [
       new Phrase('Thank you for playing'),
       new Phrase('You are awesome'),
       new Phrase('Do not let time pass by'),
       new Phrase('We are going to play a game'),
       new Phrase('Guessing is part of life')
     ];
     this.activePhrase = null;
   }

   // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
   getRandomPhrase(){
     let randomNumber = Math.floor (Math.random() * this.phrases.length);
     return this.phrases[randomNumber]
   };

   // this method starts the game by selecting a random phrase and displays it on the screen.
   startGame(){
     let screenOverlay = document.getElementById('overlay');
     screenOverlay.style.display = 'none';
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }

   // this method keeps hold of, and displays the score. Activates gameOver() after 5 false tries
   removeLife(check){
     var li = document.getElementsByClassName("tries");
     for(let i = 0; i<li.length; i++){
       if (li[i].firstElementChild.getAttribute('src') === "images/liveHeart.png"){
         li[i].firstElementChild.src = "images/lostHeart.png";
         this.missed ++;
         if (this.missed === 5){
           this.gameOver('lose')
         }
         break;
       }
     };
   }

   // this method display the gameOver screen for a win or a lose scenario
   gameOver(outcome){
     let screenOverlay = document.getElementById('overlay');
     let gameOverMessage = document.getElementById('game-over-message');
     if(outcome ==='lose'){
       gameOverMessage.textContent = 'To bad, try again!'
       screenOverlay.className = 'lose'
       screenOverlay.style.display = 'flex';
     } else{
       gameOverMessage.textContent = 'Congratulations!';
       screenOverlay.className = 'win';
       screenOverlay.style.display = 'flex';
     }
     this.missed = 0
   }

   // this method checks if the player wins
   checkForWin(){
      if (document.getElementsByClassName(`hide letter`).length === 0) {
        return true
      }
   }


   // this method controls user interaction based on clicks
   handleInteraction(event){
     event.disabled = true;
     if(this.activePhrase.checkLetter(event.textContent) === true){
       this.activePhrase.showMatchedLetter(event.textContent)
       if(this.checkForWin() === true) {
         this.gameOver();
       };
       event.className ='chosen';
     } else {
       this.removeLife();
       event.className ='wrong';
     }
   }
 }
