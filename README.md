# guessinggame

# ABOUT
This is a fun little game so that youcan learn more about me.

## JS Code-explanation
var userPoints = 0;
- Starts the users points at 0

console.log('helllooooo');
- shows Hellloooooo in the console of the browser

alert(' You want to play a guessing game don\'t you?  yes you do.');
- asks user to play a game

var user = prompt(' What is your name?');
- asks user for their name

alert('Hi ' + user + ' ! Welcome to the game, now get ready!');
- lets the user know that the computer knows their name and welcomes the user to the game

var question1 = prompt(user + ' Am I originaly from Seattle?', ' type yes or no').toLowerCase();
console.log(question1);
if (question1 === 'no' || question1 === 'n'){
  alert (' You are correct im originally for North Carolina; I was stationed here in 2007, we liked it so when I got out of the Army we came back.');
  userPoints++;}else { alert (' Please try again');}
alert(user + ' you have ' + userPoints + ' points');
- this code asks the user a question; the user inputs the answer then the computer takes that answer and checks it to see if it is correct if it is correct the system then outputs the that the user has it correct or not. Afterwhich it lets the user know how many points they have. 

var question2 = prompt(user + ' Am I married?', ' type yes or no').toLowerCase();
console.log(question2);
if (question2 === 'yes' || question2 === 'y') {
  alert (' You are correct I have a beautiful Wife and I\'m wrapped around the finger of my wonderful 10 year old daughter.');
  userPoints++;
}else {
  alert ('Try again');}
alert(user + ' you have ' + userPoints + ' points');
- this code asks the user a question; the user inputs the answer then the computer takes that answer and checks it to see if it is correct if it is correct the system then outputs the that the user has it correct or not. Afterwhich it lets the user know how many points they have. 

var question3 = prompt(user + ' Do I like the Seahawks?', ' type yes or no' ).toLowerCase();
console.log(question3);
if (question3 === 'no' || question3 === 'n'){
  alert ('Although I do like the Mariners!, I am a huge DC Sports fan at heart, I like the Redskins, Capitals, Nats, and Wizards');
  userPoints++;}
else {
  alert( 'Im sorry try again');}
alert(user + ' you have ' + userPoints + ' points');
-  this code asks the user a question; the user inputs the answer then the computer takes that answer and checks it to see if it is correct if it is correct the system then outputs the that the user has it correct or not. Afterwhich it lets the user know how many points they have. 

var question4 = prompt(user + ' Did the Seattle culture keep us here?', 'type yes or no' ).toLowerCase();
console.log(question4);
if (question4 === 'yes' || question4 === 'y') {
  alert ('CORRECTAMUNDO!!!! My wife is Korean and we saw how everyone here is so welcoming, accepting, and they are vast that we fell in love with this place.');
} else {
  alert(' How can you not love the culture out here.');}
userPoints++;
alert(user + ' you have ' + userPoints + ' points');
-  this code asks the user a question; the user inputs the answer then the computer takes that answer and checks it to see if it is correct if it is correct the system then outputs the that the user has it correct or not. Afterwhich it lets the user know how many points they have. 

var question5 = prompt(user + ' Did the beauty of the Pacfic Northwest make us want to come back?', 'type yes or no' ).toLowerCase();
console.log(question5);
if (question5 === 'yes' || question5 === 'y') {
  alert (' Hell Yeah, I love nature my family and I love to go on short hikes around washington! ');
} else {
  alert( ' It is so beautiful I will never leave this place');
}
-  this code asks the user a question; the user inputs the answer then the computer takes that answer and checks it to see if it is correct if it is correct the system then outputs the that the user has it correct or not. Afterwhich it lets the user know how many points they have. 

userPoints++;
alert(user + ' you have ' + userPoints + ' points');
- This code lets the user know how many poits that they have at the end.


