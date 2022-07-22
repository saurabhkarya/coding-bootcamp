// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let chinku = " Diet Limca ";
console.log(chinku.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let dinko;
dinko = "apple banana orange";

if (dinko.search("apple") !== -1) {
  console.log("yes");
} else {
  console.log("no");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }

  //   options = ["rock", "paper", "scissors"];
  //   return options.random();
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rPS(choice) {
  if (rockPaperScissors() == choice) {
    return "draw";
  } else if (rockPaperScissors() === "rock" && choice === "paper") {
    return "win";
  } else if (rockPaperScissors() === "paper" && choice === "scissors") {
    return "win";
  } else if (rockPaperScissors() === "scissors" && choice === "rock") {
    return "win";
  } else {
    return "lose";
  }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr) {
  arr.forEach((choice) => rPS(choice));
}

playGameXTimes(["rock", "paper", "scissors"]);
