/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();

 document.getElementById('btn__reset').addEventListener('click', function(){
    let wrongButtons = document.getElementsByClassName('wrong');
    const amount = wrongButtons.length;
    for(let i =0; i<amount; i++){
      wrongButtons[0].disabled = false;
      wrongButtons[0].className = 'key';
    }

    let keyButtons = document.getElementsByClassName('key');
    const amount2 = keyButtons.length;
    for(let i =0; i<amount2; i++){
      keyButtons[i].disabled = false;
      keyButtons[i].className = 'key';
      keyButtons[i].style.backgroundColor = '';
    }


    let phraseDisplay = document.getElementById('phrase').firstElementChild;
    let length = phraseDisplay.childElementCount
    for(let i=0; i < length; i++){
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

 document.getElementById('qwerty').addEventListener('click', (event) => {
   if(event.target.className === 'key'){
     game.handleInteraction(event)
   }
 });

 document.addEventListener('keydown', (event) => {
   const regex = /\w/
   if(regex.test(event.textContent)){
      console.log(event.key)
      game.handleInteraction(event.key)
    }
 });
