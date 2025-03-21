"use strict";

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const computerScoreDiv = [
  ...document.querySelectorAll(".computer-display > .score-counter > div"),
];
const humanScoreDiv = [
  ...document.querySelectorAll(".player-display > .score-counter > div"),
];

const playerSelectionImg = document.querySelector(".player-choice > img");
const computerSelectionImg = document.querySelector(".computer-choice > img");

let computerScore = 0;
let humanScore = 0;

function countScore() {
  for (let i = 0; i < computerScore; i++) {
    computerScoreDiv[i].className = "score";
  }
  for (let i = 0; i < humanScore; i++) {
    humanScoreDiv[i].className = "score";
  }
}

function clearScore() {
  computerScoreDiv.forEach((div) => div.classList.remove("score"));
  humanScoreDiv.forEach((div) => div.classList.remove("score"));

  playerSelectionImg.src = "";
  computerSelectionImg.src = "";
}

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

let humanSelection;

btnRock.addEventListener("click", (e) => {
  humanSelection = e.currentTarget.id;
  playRound();
  playGame();
});

btnPaper.addEventListener("click", (e) => {
  humanSelection = e.currentTarget.id;
  playRound();
  playGame();
});

btnScissors.addEventListener("click", (e) => {
  humanSelection = e.currentTarget.id;
  playRound();
  playGame();
});

function displaySelection(human, computer) {
  playerSelectionImg.src = `./images/${human}.png`;
  computerSelectionImg.src = `./images/${computer}.png`;
}

function playRound() {
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  displaySelection(humanSelection, computerSelection);

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
  countScore();
}

function playGame() {
  if (computerScore == 3) {
    computerScore = 0;
    humanScore = 0;
    setTimeout(function () {
      clearScore();
      alert("Game over! Computer wins.");
    }, 100);
  } else if (humanScore == 3) {
    computerScore = 0;
    humanScore = 0;
    setTimeout(function () {
      clearScore();
      alert("Game over! Human wins.");
    }, 100);
  }
}
