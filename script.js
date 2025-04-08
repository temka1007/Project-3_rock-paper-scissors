/**
 * Rock-Paper-Scissors Game
 * @module RockPaperScissors
 */

/** @typedef {"rock" | "paper" | "scissors"} Choice */

const WINNING_SCORE = 3;
const IMAGE_PATH = "./images/";
const EMPTY_IMAGE = `${IMAGE_PATH}empty.png`;

const CHOICES =
  /** @type {{ROCK: "rock", PAPER: "paper", SCISSORS: "scissors"}} */ ({
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  });

/** @type {HTMLButtonElement} */
const btnRock = document.querySelector("#rock");
/** @type {HTMLButtonElement} */
const btnPaper = document.querySelector("#paper");
/** @type {HTMLButtonElement} */
const btnScissors = document.querySelector("#scissors");

/** @type {HTMLDivElement[]} */
const computerScoreDiv = Array.from(
  document.querySelectorAll(".computer-display > .score-counter > div")
);
/** @type {HTMLDivElement[]} */
const humanScoreDiv = Array.from(
  document.querySelectorAll(".player-display > .score-counter > div")
);

/** @type {HTMLImageElement} */
const playerSelectionImg = document.querySelector(".player-choice > img");
/** @type {HTMLImageElement} */
const computerSelectionImg = document.querySelector(".computer-choice > img");

let computerScore = 0;
let humanScore = 0;

/**
 * Updates the score display.
 * @returns {void}
 */
const updateScoreDisplay = () => {
  computerScoreDiv.forEach((div, index) => {
    div.classList.toggle("score", index < computerScore);
  });
  humanScoreDiv.forEach((div, index) => {
    div.classList.toggle("score", index < humanScore);
  });
};

/**
 * Resets the score and image display.
 * @returns {void}
 */
const resetGameDisplay = () => {
  computerScoreDiv.forEach((div) => div.classList.remove("score"));
  humanScoreDiv.forEach((div) => div.classList.remove("score"));
  playerSelectionImg.src = EMPTY_IMAGE;
  computerSelectionImg.src = EMPTY_IMAGE;
};

/**
 * Returns a random computer choice.
 * @returns {Choice}
 */
const getComputerChoice = () => {
  const values = Object.values(CHOICES);
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

/**
 * Displays the selected choices.
 * @param {Choice} humanChoice
 * @param {Choice} computerChoice
 * @returns {void}
 */
const displayChoices = (humanChoice, computerChoice) => {
  playerSelectionImg.src = `${IMAGE_PATH}${humanChoice}.png`;
  computerSelectionImg.src = `${IMAGE_PATH}${computerChoice}.png`;
};

/**
 * Determines the winner of the round and updates scores.
 * @param {Choice} humanChoice
 * @param {Choice} computerChoice
 * @returns {void}
 */
const resolveRound = (humanChoice, computerChoice) => {
  displayChoices(humanChoice, computerChoice);

  if (humanChoice === computerChoice) {
    console.log("Tie!");
    return;
  }

  const winsAgainst = {
    [CHOICES.ROCK]: CHOICES.SCISSORS,
    [CHOICES.PAPER]: CHOICES.ROCK,
    [CHOICES.SCISSORS]: CHOICES.PAPER,
  };

  const humanWins = winsAgainst[humanChoice] === computerChoice;

  if (humanWins) {
    humanScore += 1;
    console.log("Human wins this round.");
  } else {
    computerScore += 1;
    console.log("Computer wins this round.");
  }

  console.log(`Score => Human: ${humanScore}, Computer: ${computerScore}`);
  updateScoreDisplay();
};

/**
 * Checks for a winner and resets the game if needed.
 * @returns {void}
 */
const handleGameEnd = () => {
  if (computerScore === WINNING_SCORE || humanScore === WINNING_SCORE) {
    const winner = computerScore === WINNING_SCORE ? "Computer" : "Human";
    computerScore = 0;
    humanScore = 0;
    setTimeout(() => {
      resetGameDisplay();
      alert(`Game over! ${winner} wins.`);
    }, 100);
  }
};

/**
 * Handles button click events.
 * @param {MouseEvent} e
 * @returns {void}
 */
const onChoiceSelected = (e) => {
  /** @type {Choice} */
  const humanChoice = e.currentTarget.id;
  const computerChoice = getComputerChoice();
  resolveRound(humanChoice, computerChoice);
  handleGameEnd();
};

[btnRock, btnPaper, btnScissors].forEach((btn) => {
  btn.addEventListener("click", onChoiceSelected);
});
