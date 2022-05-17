let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    const  list1 = ['rock','paper','scissors'];
    let randomPick = list1[Math.floor(Math.random() * list1.length)];
    return randomPick;
}

function playRound(playerSelection,computerSelection) {
    selection = prompt("Rock,paper or Scissors?");
    playerSelection = selection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        playerScore = ++playerScore;
        computerScore = ++computerScore;
        return "It's a Tie!"
    }
    else if(playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore = ++computerScore;
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection == "scissors") {
            playerScore = ++playerScore;
            return "You Win! Rock beats Scissors"
        }
    }
    else if(playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore = ++playerScore;
            return "You Win! Paper beats Rock"
        }
        else if (computerSelection == "scissors") {
            computerScore = ++computerScore;
            return "You Lose! Scissors beats Paper"
        }
    }
    else if(playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerScore = ++playerScore;
            return "You Win! Scissors beats Paper"
        }
        else if (computerSelection == "rock") {
            computerScore = ++computerScore;
            return "You Lose! Rock beats Scissors"
        }
    }
    else {
        return "Enter a valid input!"
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    // for (let i = 0; i < 5; i++) {
    //     console.log(playRound());
    //     console.log("Player Score = " + playerScore);
    //     console.log("Computer Score = " + computerScore);
    // }
    if (playerScore == computerScore) {
        return "It's a Tie"
    }
    else if (playerScore > computerScore) {
        return "You Win!"
    }
    else if (playerScore < computerScore) {
        return "You Lose!"
    }
    else {
        return "Something Went Wrong!"
    }
}
