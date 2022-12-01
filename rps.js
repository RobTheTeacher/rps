/*
1. Array of available values
   Randomly select a value
   Return

2. Get user input
   Validation = sten sax påse
   return

3. User input vs computer input
      
   user compare to computer:
    if user = sten - if computer == sax; else computer = paper
    if user = sax - " "
    if user = påse - " "

    return who won
 
4.   Display who won
*/

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}

function computerSelection() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function userSelection(tie) {
  let userInput = ""
  
  while (!(userInput === "rock" || userInput === "paper" || userInput === "scissors")) {
    userInput = prompt(tie + "\nEnter rock, paper or scissors");
  }

  return userInput;
}

function determineWinner(userInput, computerInput) {
  if (userInput === computerInput) {
    return "tie";
  }

  if (userInput === "rock") {
    if (computerInput === "paper") {
      return "Computer Wins!"
    } else {
      return "You win!"
    }
  } else if (userInput === "paper") {
    if (computerInput === "scissors") {
      return "Computer Wins!"
    } else {
      return "You win!"
    }
  } else {
    if (computerInput === "rock") {
      return "Computer Wins!"
    } else {
      return "You win!"
    }
  }
}

function playGame() {
  let result = "";
  let userInput = "";
  let computerInput = "";

  do {
    userInput = userSelection(result);
    computerInput = computerSelection();
    result = determineWinner(userInput, computerInput);
  } while(result === "tie");
    result += "\nYou chose " + userInput + " - the computer chose " + computerInput;
    alert(result);
}

console.log("\u270C");

