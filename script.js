let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    const  list1 = ['rock','paper','scissors'];
    let randomPick = list1[Math.floor(Math.random() * list1.length)];
    return randomPick;
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        document.getElementById("commentaryline").innerHTML = "It's a Tie!";
    }
    else if(playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore = ++computerScore;
            document.getElementById("commentaryline").innerHTML = "You Lose! Paper beats Rock";
            document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
            document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        }
        else if (computerSelection == "scissors") {
            playerScore = ++playerScore;
            document.getElementById("commentaryline").innerHTML = "You Win! Rock beats Scissors";
            document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
            document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        }
    }
    else if(playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore = ++playerScore;
            document.getElementById("commentaryline").innerHTML = "You Win! Paper beats Rock";
            document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
            document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        }
        else if (computerSelection == "scissors") {
            computerScore = ++computerScore;
            document.getElementById("commentaryline").innerHTML = "You Lose! Scissors beats Paper";
            document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
            document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        }
    }
    else if(playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerScore = ++playerScore;
            document.getElementById("commentaryline").innerHTML = "You Win! Scissors beats Paper";
            document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
            document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        }
        else if (computerSelection == "rock") {
            computerScore = ++computerScore;
            document.getElementById("commentaryline").innerHTML = "You Lose! Rock beats Scissors";
            document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
            document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        }
    }
    winCheck();
}

const rockSelected = document.getElementById("rock");
const paperSelected = document.getElementById("paper");
const scissorsSelected = document.getElementById("scissors");

function rockFunction() {
    playRound("rock",computerPlay());
}

function paperFunction() {
    playRound("paper",computerPlay());
}

function scissorsFunction() {
    playRound("scissors",computerPlay());
}

rockSelected.addEventListener("click", rockFunction);
paperSelected.addEventListener("click",paperFunction);
scissorsSelected.addEventListener("click",scissorsFunction);



function winCheck() {
    if (playerScore == 5) {
        document.getElementById("commentaryline").innerHTML = "You Won The Match! Great Job!";
        document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
        document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;

    }
    else if (computerScore == 5) {
        document.getElementById("commentaryline").innerHTML = "You Lost The Match! Better Luck Next Time!";
        document.getElementById("humanscore").innerHTML = `Human: ${playerScore}`;
        document.getElementById("computerscore").innerHTML = `Computer: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

