/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = [
       'Thank you for playing',
       'You are awesome',
       'Do not let time pass by',
       'We are going to play a game',
       'Guessing is part of life'
     ];
     this.activePhrase = null;
     // this.phrase = new Phrase(this.activePhrase)
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
     let newPhrase = new Phrase (this.activePhrase);
     newPhrase.addPhraseToDisplay();
   }

   // this method keeps hold of, and displays the score. Activates gameOver() after 5 false tries
   removeLife(check){
     var li = document.getElementsByClassName("tries");
     for(let i = 0; i<li.length; i++){
       if (li[i].firstElementChild.src === "file:///Users/bartsmolders/Documents/GitHub/OOP-Game-Show-App/oop_game-v2/images/liveHeart.png"){
         li[i].firstElementChild.src = "images/lostHeart.png"
         if (i === 4){
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
   }

   // this method checks for if the player wins
   checkForWin(){
      if (document.getElementsByClassName(`hide letter`).length === 0) {
        this.gameOver()
      }
   }


   // this method controls user interaction based on clicks
   handleInteraction(event){
     event.target.disabled = true;
     if(new Phrase(this.activePhrase).checkLetter(event.target.textContent) === true){
       new Phrase(this.activePhrase).showMatchedLetter(event.target.textContent)
       this.checkForWin();
       event.target.className ='chosen';
     } else {
       this.removeLife();
       event.target.className ='wrong';
     }
   }

   // this method controls user interaction based on keyboard actions
   keyHandleInteraction(button){
     button.disabled = true;
     if(new Phrase(this.activePhrase).checkLetter(button.textContent) === true){
       new Phrase(this.activePhrase).showMatchedLetter(button.textContent)
       this.checkForWin();
       button.className ='chosen';
     } else {
       this.removeLife();
       button.className ='wrong';
     }
   }
 }
