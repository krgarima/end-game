
var readlineSync = require("readline-sync");
var score=0;
var userName = readlineSync.question("What's your Name? ");
console.log("\nWelcome "+userName+ " to how well you know Garima Quiz! \n")

function play(question,answer)    //Function
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer)
  {
    console.log("Correct answer!")
    score++;
  }
  else
  console.log("Sorry, you are Wrong.")
  console.log();
}

questionOne =                     //Data Structures
{
question: "Where do I live? ",
answer:"Lucknow"
}
questionTwo = 
{
question: "What's my pet's name? ",
answer:  "Bruno"
}
questionThree = 
{
  question: "What's my favorite color? ",
  answer: "Black"
}

var knowMe = [questionOne, questionTwo, questionThree];     //Array

var i;
for(i=0;i<knowMe.length;i++)
{
  var current = knowMe[i];
  play(current.question, current.answer);
}

console.log("Final Score: ",score);


//----------------------------------------------------
/*
var readlineSync = require("readline-sync");
var score=0;
var userName = readlineSync.question("What's your Name? ");
console.log("Welcome "+userName+ "! How well do you know Garima Quiz")

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer)
  {
    console.log("Correct answer!")
    score++;
  }
  else
  console.log("Sorry, you are Wrong.")

}


play("Where do I live? ","Lucknow");
play("What's my pet's name? ", "Bruno");
console.log("Your Score: ",score);
*/