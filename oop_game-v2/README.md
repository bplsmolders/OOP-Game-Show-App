This is a classic phrase hunter game.
The user has to guess the letters to find out what the phrase is made of.
This can be done by 'clicking' the keybuttons or simply using the keyboard.

Extra css styling:
- changed the .start background styling to a funky color.
- changed the .title and gave it a old school shadow.
= changed background and color of start button.

=============================================================================================
A bug that I've fixed, but could use some feedback on:
Inside phrase.js I've created the following method:
  showMatchedLetter(choice){
    var letters = document.getElementsByClassName(`hide letter ${choice}`);
    const amount = letters.length;
    for(let i =0; i<amount; i++){
      letters[0].className = 'show';
    }

This seems to work perfectly. But stumbled on this by accident. As you see, I needed to loop
trough a html-collection. I've tried this with all kinds of loops, but somehow it always
'breaked' before finishing up the loop. As you see, in the loop I'm using letters[0].
Replacing the [0] with the regular used [i] makes the method malfunctioning.

All seems the work fine now, but I would love to have some deeper explaining about this,
for future endeavours. Thank you!
