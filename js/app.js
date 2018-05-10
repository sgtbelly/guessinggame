'use srtict';
//Guessing game with five questions ** be creative/fun/whimsical**
//five questions must contain
//yes/no
//must accept y/n, Y/N, yes/no, YES/NO
//must use .toUpperCase() or .toLowerCase()
//must use console.log() to send to the console log
//Use CSS to style the page
//** add,commit,push to github regularly with good commit messages and explain why for commit
//Questions:
// what is your name
//

var userPoints = 0;

console.log('helllooooo');

alert('You want to play a guessing game don\'t you? yes you do.');

var user = prompt('What is your name?');

alert('Hi' + user + '! Welcome to the game, now get ready!');

var question1 = prompt(user + ' Am I originaly from Seattle?', 'type yes or no').toLowerCase();
console.log(question1);
if (question1 === 'yes' || question1 === 'y'); else {
  alert (' You are correct im originally for North Carolina; I was stationed here in 2007 and stayed.');
  userPoints++;
}
alert('you have ' + userPoints + ' points');

var question2 = prompt(user + ' Am I married?', 'type yes or no').toLowerCase();
console.log(question2);
if (question2 === 'yes' || question2 === 'y') {
  alert ('You are correct I have a beautifu wife and im wrapped around the finger of my wonderful 10 year old daughter.');
  userPoints++;
}else {
  alert ('Try again');}
alert(' you have ' + userPoints + ' points');

var question3 = prompt(user + ' Do I like the Seahawks?', 'type yes or no' ).toLowerCase();
console.log(question3);
if (question3 === 'yes' || question3 === 'y'){
  alert ('Sorry try again');
}else {
  alert( 'Although I do like the Mariners!, I am a huge DC Sports fan at heart, I like the Redskins, Capitals, Nats, and Wizards');
  userPoints++;}
alert(' you have' + userPoints + ' points');

var question4 = prompt(user + ' Was it the culture that kept me and my family here?', 'type yes or no' ).toLowerCase();
console.log(question4);
if (question4 === 'yes' || question4 === 'y') {
  alert ('CORRECTAMUNDO!!!! My wife is Korean and we saw how everyone here is so welcoming, accepting, and they are vast that we fell in love with this place.');
} else {
  alert(' How can you not love the culture out here.');
}
userPoints++;

var question5 = prompt(user + ' Was it also the beauty of the natrual landscape that kept me here also?', 'type yes or no' ).toLowerCase();
console.log(question5);
if (question5 === 'yes' || question5 === 'y') {
  alert ('Hell Yeah, I love nature my family and I love to go on short hikes around washington! ');
} else {
  alert( 'It is so beautiful i will never leave this place');
}
userPoints++;

alert('you have ' + userPoints + ' points' );


