'use srtict';
// //Guessing game with five questions ** be creative/fun/whimsical**
// //f'ive questions must contain
// //yes/no
// //must accept y/n, Y/N, yes/no, YES/NO
// //must use .toUpperCase() or .toLowerCase()
// //must use console.log() to send to the console log
// //Use CSS to style the page
// //** add,commit,push to github regularly with good commit messages and explain why for commit
// //Questions:
// // what is your name
// //

var userPoints = 0;

console.log('helllooooo');

// alert(' You want to play a guessing game don\'t you?  yes you do.');

var user = prompt(' What is your name?');

// alert('Hi ' + user + ' ! Welcome to the game, now get ready!');

// var question1 = prompt(user + ' Am I originaly from Seattle?', ' type yes or no').toLowerCase();
// console.log(question1);
// if (question1 === 'no' || question1 === 'n'){
//   alert (' You are correct im originally for North Carolina; I was stationed here in 2007, we liked it so when I got out of the Army we came back.');
//   userPoints++;}else { alert (' Please try again');}
// alert(user + ' you have ' + userPoints + ' points');

// var question2 = prompt(user + ' Am I married?', ' type yes or no').toLowerCase();
// console.log(question2);
// if (question2 === 'yes' || question2 === 'y') {
//   alert (' You are correct I have a beautiful Wife and I\'m wrapped around the finger of my wonderful 10 year old daughter.');
//   userPoints++;
// }else {
//   alert ('Try again');}
// alert(user + ' you have ' + userPoints + ' points');

// var question3 = prompt(user + ' Do I like the Seahawks?', ' type yes or no' ).toLowerCase();
// console.log(question3);
// if (question3 === 'no' || question3 === 'n'){
//   alert ('Although I do like the Mariners!, I am a huge DC Sports fan at heart, I like the Redskins, Capitals, Nats, and Wizards');
//   userPoints++;}
// else {
//   alert( 'Im sorry try again');}
// alert(user + ' you have ' + userPoints + ' points');

// var question4 = prompt(user + ' Did the Seattle culture keep us here?', 'type yes or no' ).toLowerCase();
// console.log(question4);
// if (question4 === 'yes' || question4 === 'y') {
//   alert ('CORRECTAMUNDO!!!! My wife is Korean and we saw how everyone here is so welcoming, accepting, and they are vast that we fell in love with this place.');
// } else {
//   alert(' How can you not love the culture out here.');}
// userPoints++;
// alert(user + ' you have ' + userPoints + ' points');

// var question5 = prompt(user + ' Did the beauty of the Pacfic Northwest make us want to come back?', 'type yes or no' ).toLowerCase();
// console.log(question5);
// if (question5 === 'yes' || question5 === 'y') {
//   alert (' Hell Yeah, I love nature my family and I love to go on short hikes around washington! ');
// } else {
//   alert( ' It is so beautiful I will never leave this place');
// }
// userPoints++;
// alert(user + ' you have ' + userPoints + ' points');
// var userNumber = 10;// between 1-10
// var favNumber = '3'; //correct number
// var tries = 1; // # of tries
// var maxTries = 4; // # of max tries


// // var tries = 1;
// // while guess < 3
// // alert "too low"
// // while guess > 3
// // alert "too high"
// // while guess === 3
// // alert "correct"
// while (question6 !== favNumber && tries <= maxTries) {
//   var question6 = prompt(user + ' what is my favorite number from 1 to ' + userNumber);tries++;console.log(question6);
//   if (question6 === favNumber)alert('Correct');
//   if (question6 < favNumber)alert('Too Low');
//   if (question6 > favNumber)alert('Too High');
//   if (tries < maxTries);}userPoints++;

alert(user + ' you have ' + userPoints + ' points');
// //
// var guesses = 0;
// var maxGuesses = 6;
// var question7 = prompt(user + ' Where have I lived besides Washington? ').toLowerCase;
// console.log(question7);guesses++;
// var placesLived = placesLived ['North Carolina' , 'Nebraska' , 'Missouri' ];
// console.log(placesLived.past);
// for (question7 === placesLived && guesses <= maxGuesses); {
//   prompt(user + ' Where have I lived besides Washington? ').toLowerCase;
//   console.log(question7);guesses++;
//   if (question7 === placesLived)alert(placesLived);
//   if (guesses < maxGuesses);}userPoints++;
// question 7
// var placesBeen = ['South Korea','Iraq', 'Louisanna', 'Afghanistan', 'Japan']
//userPoints++;
var countriesBeen = ['south korea', 'iraq', 'louisanna', 'afghanistan', 'japan'];
var guesses = 0;
var question7;
var correctAnswer;
while(guesses < 7){
  question7 = prompt('Can you guess what countries I have been to?').toLowerCase();
  for(var i = 0; i < countriesBeen.length; i++) {
    if(question7 === countriesBeen[i]){// only checks if answer is correct only
      correctAnswer = true;
    }
  }
  if(!correctAnswer){// if user guesses wrong
    alert('sorry try again');
    guesses++;
  }
  else if(guesses === 6){// if user runs out of guesses
    alert('You have ran out of guesses; GAME OVER');
    break;
  }
  else{// if user gets answer corect
    alert ('You are correct!!!');
    userPoints++;
    guesses += 7;
  }
}


// for (var i = 0; i < countriesBeen.length; i++){
//   if(question7 === countriesBeen[i]){
//     alert ('Great Job');
//   } else if(question7 !== countriesBeen[i] && guesses <= 6){
//     alert('I\'ve never been there, but I would like to go ');
//     prompt('Guess what countires I have been to?').toLowerCase();
//     guesses++;
//   }
// }

