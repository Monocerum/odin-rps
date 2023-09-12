function getPlayerChoice() {
    let playerSelection = (prompt("Rock, paper, or scissors? ")).toLowerCase();
    console.log("Player Choice: " + playerSelection);
    return playerSelection;
}

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];

    let randomNum = (Math.floor(Math.random() * computerChoices.length) + 1);
    console.log(randomNum);

    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}

// Plays five rounds of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper!";
    }
}

// Function to play five rounds of rock, paper, scissors
function playGame() {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();

        // Check if player input is valid, else, try again
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            alert("Invalid option! Please try again.");
            playerSelection = getPlayerChoice();
        }

        let computerSelection = getComputerChoice();
        console.log("Computer Choice: " + computerSelection);
        
        let winner = playRound(playerSelection, computerSelection);
        console.log(winner);

        // Increment count for player wins and computer wins
        if (winner.includes("win", 0)) {
            playerWin++;
        } else if (winner.includes("lose", 0)) {
            computerWin++;
        } else if (winner.includes("tie"), 0) {
            playerWin + 0.5;
            computerWin + 0.5;
        }
    }

    if (playerWin > computerWin) {
        alert("Player wins!");
    } else if (computerWin > playerWin) {
        alert("Computer wins! Better luck next time!");
    } else {
        alert("It's a tie!");
    }
}

playGame();