/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor (phrase){
     this.phrase = phrase.toLowerCase();
   }

   // this method transforms a given phrase to an html element
   addPhraseToDisplay(){
     const lettersArr = this.phrase.split('');
     const phraseHTML = [];
     const phraseDisplay = document.getElementById('phrase').firstElementChild
     lettersArr.map(letter => {
       if(letter !== ' '){
         var li = document.createElement('li')
         li.className = `hide letter ${letter}`
         li.textContent = letter;
         phraseDisplay.appendChild(li);
       } else {
         var li = document.createElement('li')
         li.className = "space"
         li.textContent = letter;
         phraseDisplay.appendChild(li);
       }
     return lettersArr;
     })
   }

   // this method checks if a chosen letter is in the phrases.
   checkLetter(choice){
      let lettersArr = this.phrase.split('');
      if(lettersArr.filter(letter => letter === choice).length === 0){
        return false
      } else {
        return true
      }
   }

   // This method shows the letter when it's checkLetter() is true.
   showMatchedLetter(choice){
     var letters = document.getElementsByClassName(`hide letter ${choice}`);
     const amount = letters.length;
     for(let i =0; i<amount; i++){
       letters[0].className = 'show';
     }
   }
}
