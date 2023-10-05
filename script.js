let playerScore = 0;
let computerScore = 0;

const commentaryLine = document.getElementById("commentaryline");
const humanScoreDisplay = document.getElementById("humanscore");
const computerScoreDisplay = document.getElementById("computerscore");

const weapons = ["rock", "paper", "scissors"];
const selectButtons = document.querySelectorAll(".select button");

selectButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    });
});

function computerPlay() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateCommentary("It's a Tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        updateCommentary(`You Win! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
    } else {
        updateCommentary(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }

    updateScores();
    winCheck();
}

function updateCommentary(message) {
    commentaryLine.textContent = message;
}

function updateScores() {
    humanScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function winCheck() {
    if (playerScore === 5) {
        updateCommentary("You Won The Match! Great Job!");
        resetScores();
    } else if (computerScore === 5) {
        updateCommentary("You Lost The Match! Better Luck Next Time!");
        resetScores();
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
}