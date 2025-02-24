"use strict";

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randomness = Math.random() * 100;
  if (randomness < 33.3) {
    return "rock";
  } else if (randomness < 66.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Choose from 'rock', 'paper', and 'scissors'!"
  ).toLowerCase();
  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    return humanChoice;
  } else {
    alert("Wrong input!");
    getHumanChoice();
  }
}

function playRound() {
  const computerSelection = getHumanChoice();
  const humanSelection = getComputerChoice();

  if (computerSelection == humanSelection) {
    console.log("Tie!");
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
  } else if (computerSelection == "rock" && humanSelection == "scissors") {
    computerScore++;
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
    console.log("computer wins!");
  } else if (computerSelection == "paper" && humanSelection == "rock") {
    computerScore++;
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
    console.log("computer wins!");
  } else if (computerSelection == "scissors" && humanSelection == "paper") {
    computerScore++;
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
    console.log("computer wins!");
  } else if (computerSelection == "scissors" && humanSelection == "rock") {
    humanScore++;
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
    console.log("human wins!");
  } else if (computerSelection == "rock" && humanSelection == "paper") {
    humanScore++;
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
    console.log("human wins!");
  } else if (computerSelection == "paper" && humanSelection == "scissors") {
    humanScore++;
    console.log(
      `Computer score: ${computerScore}, and Human score: ${humanScore}`
    );
    console.log("human wins!");
  }
}

function playGame() {
  if (computerScore == 3) {
    console.log("Game over! Computer wins.");
  } else if (humanScore == 3) {
    console.log("Game over! Human wins.");
  } else {
    playRound();
    playGame();
  }
}

playGame();
