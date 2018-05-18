'use srtict';
//Guessing game with five questions ** be creative/fun/whimsical**
//f'ive questions must contain
//yes/no
//must accept y/n, Y/N, yes/no, YES/NO
//must use .toUpperCase() or .toLowerCase()
//must use console.log() to send to the console log
//Use CSS to style the page
//** add,commit,push to github regularly with good commit messages and explain why for commit
//Questions:
//what is your name
var userPoints = 0;
console.log('helllooooo');
alert(' You want to play a guessing game don\'t you?  yes you do.');
//name
var user;

function userName() {
  user = prompt(' What is your name?');
  alert('Hi ' + user + ' ! Welcome to the game, now get ready!');
  return user;
}
userName();

// // question 1
var question1;

function quest1() {
  question1 = prompt(user + ' Am I originaly from Seattle?', ' type yes or no').toLowerCase();
  console.log(question1);
  if (question1 === 'no' || question1 === 'n') {
    alert(' You are correct im originally for North Carolina; I was stationed here in 2007, we liked it so when I got out of the Army we came back.');
    userPoints++;
  } else {
    alert(' I grew up in Rocky Mount, NC and left at the age of 19 to join the Army');
  }
  alert(user + ' you have ' + userPoints + ' points');
}
quest1();
// // end editing question 1

// //question 2
var question2;

function quest2() {
  question2 = prompt(user + ' Am I married?', ' type yes or no').toLowerCase();
  console.log(question2);
  if (question2 === 'yes' || question2 === 'y') {
    alert(' You are correct I have a beautiful Wife and I\'m wrapped around the finger of my wonderful 10 year old daughter.');
    userPoints++;
  } else {
    alert(' Belive it or not someone loves my ugly mugg; can you belive that?');
  }
  alert(user + ' you have ' + userPoints + ' points');
}
quest2();
// // end editing question 2

// //question 3
var question3;

function quest3() {
  question3 = prompt(user + ' Do I like the Seahawks?', ' type yes or no').toLowerCase();
  console.log(question3);
  if (question3 === 'no' || question3 === 'n') {
    alert(' Although I do like the Mariners!, I am a huge DC Sports fan at heart, I like the Redskins, Capitals, Nats, and Wizards.');
    userPoints++;
  } else {
    alert('Although the Seahawks are much better than the Redskins, I remain loyal to my childhood team.');
  }
  alert(user + ' you have ' + userPoints + ' points');
}
quest3();
// // end editing question 3

// //question 4
var question4;

function quest4() {
  question4 = prompt(user + ' The culture in Washington brought us back?', 'type yes or no').toLowerCase();
  console.log(question4);
  if (question4 === 'yes' || question4 === 'y') {
    alert('CORRECTAMUNDO!!!! My wife is Korean and we saw how everyone here is so welcoming, accepting, and they are vast that we fell in love with this place.');
    userPoints++;
  } else {
    alert(' How can you not love the culture out here.');
  }
  alert(user + ' you have ' + userPoints + ' points');
}
quest4();
// // end editing question 4

// //question 5
var question5;

function quest5() {
  question5 = prompt(user + ' Did the beauty of the Pacfic Northwest make us want to come back?', 'type yes or no').toLowerCase();
  console.log(question5);
  if (question5 === 'yes' || question5 === 'y') {
    alert(' Hell Yeah, I love nature my family and I love to go on short hikes around washington! ');
    userPoints++;
  } else {
    alert(' It is so beautiful I will never leave this place');
  }
  alert(user + ' you have ' + userPoints + ' points');
}
quest5();
// //end editing question 5

// //question 6
var userNumber = 10; // between 1-10
var favNumber = '3'; //correct number
var tries = 1; // # of tries
var maxTries = 4; // # of max tries
var question6;

function quest6() {
  while (question6 !== favNumber && tries <= maxTries) {
    question6 = prompt(user + ' what is my favorite number from 1 to ' + userNumber);
    tries++;
    console.log(question6);
    if (question6 === favNumber) alert('Correct');
    if (question6 < favNumber) alert('Too Low');
    if (question6 > favNumber) alert('Too High');
    if (tries < maxTries);
  }
  if (question6 === '3') userPoints++;
  alert(user + ' you have ' + userPoints + ' points');
}
quest6();
// //end editing question 6

//question 7
var countriesBeen = ['south korea', 'iraq', 'louisanna', 'afghanistan', 'japan'];
var guesses = 0;
var maxGuesses = 6;
var question7;
var correctAnswer;

function quest7() { // Question 7
  while (question7 !== countriesBeen && guesses <= maxGuesses) {
    question7 = prompt('Can you guess what countries I have been to?').toLowerCase();
    for (var i = 0; i < countriesBeen.length; i++) {
      if (question7 === countriesBeen[i]) { // just check if the answer is one of the answer in the array
        correctAnswer = true;
      }
    }
    if (!correctAnswer) { // if user guesses wrong
      alert('try again ');
      guesses++;
    } else if (correctAnswer === true) { // if user gets answer corect
      alert('You are correct!!!');
      userPoints++;
      guesses += 6;
    }
    if (guesses === 6) { // if user runs out of guesses
      alert('You have ran out of guesses; GAME OVER. I have been to the following countries: South Korea, Iraq, Lousianna (yes I know Lousianna is a state but it is waay different. Have you ever been?), Afghanistan, and Japan.');
      guesses += 6;
    }
  }
}
quest7();
//end of editing question 7
alert('Gongratulations ' + user + ' you have ' + userPoints + ' out of 7'); // total points user has
console.log(user + 'your points are ' + userPoints + 'out of 7');