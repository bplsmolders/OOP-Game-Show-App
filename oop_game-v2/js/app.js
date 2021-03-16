/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();

 //the function underneath is activated when the start button is clicked. Resets board and starts new game.
 document.getElementById('btn__reset').addEventListener('click', function(){
    let wrongButtons = document.getElementsByClassName('wrong');
    const amount = wrongButtons.length;
    for(let i =0; i<amount; i++){
      wrongButtons[0].disabled = false;
      wrongButtons[0].className = 'key';
    }

    let chosenButtons = document.getElementsByClassName('chosen');
    const amount2 = chosenButtons.length;
    for(let i =0; i<amount2; i++){
      chosenButtons[0].disabled = false;
      chosenButtons[0].className = 'key';
    }

    let phraseDisplay = document.getElementById('phrase').firstElementChild;
    let amount3 = phraseDisplay.childElementCount
    for(let i=0; i < amount3; i++){
      phraseDisplay.removeChild(phraseDisplay.lastElementChild);
    }

    var tries = document.getElementsByClassName("tries");
    for(let i = 0; i<tries.length; i++){
      if (tries[i].firstElementChild.src === "file:///Users/bartsmolders/Documents/GitHub/OOP-Game-Show-App/oop_game-v2/images/lostHeart.png"){
        tries[i].firstElementChild.src = "images/liveHeart.png";
      }
    }
    game.startGame();
 });

 //the function underneath is activated when keybuttons are clicked
 document.getElementById('qwerty').addEventListener('click', (event) => {
   if(event.target.className === 'key'){
     game.handleInteraction(event);
   }
 });

 //the function underneath is activated when the user presses down a letter on the keyboard.
 document.addEventListener('keydown', (event) => {
   const buttons = document.querySelectorAll('button');
   for(let i = 0 ; i<buttons.length; i++){
     if(buttons[i].textContent === event.key && buttons[i].disabled === false){
       game.keyHandleInteraction(buttons[i])
     }
   }
 });
