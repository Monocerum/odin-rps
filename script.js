// Function to get player choice
function getPlayerChoice() {
    // Prompt user to input a choice
    let playerSelection = (prompt("Rock, paper, or scissors? ")).toLowerCase();
    console.log("Player Choice: " + playerSelection);
    return playerSelection;
}

// Function to get computer choice
function getComputerChoice() {
    // Declare the possible choices of computer
    let computerChoices = ["rock", "paper", "scissors"];

    // Randomly generate a number between 1 to 3
    let randomNum = (Math.floor(Math.random() * computerChoices.length) + 1);
    console.log(randomNum);

    // Assign each choice to a number
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // If player selection is the same as computer selection, the game is a tie
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // If player selection is rock and computer selection is scissors, player wins.
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // If player selection is scissors and computer selection is paper, player wins.
        return "You win! Scissors beat paper!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        // If player selection is rock and computer selection is paper, computer wins.
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // If player selection is scissors and computer selection is rock, computer wins.
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // If player selection is paper and computer selection is rock, player wins.
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        // If player selection is paper and computer selection is scissors, computer wins.
        return "You lose! Scissors beat paper!";
    }
}

// Function to play five rounds of rock, paper, scissors
function game() {
    // Initialize variables
    let playerWin = 0;
    let computerWin = 0;

    // Loop five times
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();

        // Check if player input is valid, else, try again
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            alert("Invalid option! Please try again.");
            playerSelection = getPlayerChoice();
        }

        let computerSelection = getComputerChoice();
        console.log("Computer Choice: " + computerSelection);
        
        let winner = playRockPaperScissors(playerSelection, computerSelection);
        console.log(winner);

        if (winner.includes("win", 0)) {
            // If "win" is in the string, player wins, so increment playerWin by 1.
            playerWin++;
        } else if (winner.includes("lose", 0)) {
            // If "lose" is in the string, computer wins, so increment computerWin by 1.
            computerWin++;
        } else if (winner.includes("tie"), 0) {
            // If "tie" is in the string, increment playerWin and computerWin by 0.5.
            playerWin + 0.5;
            computerWin + 0.5;
        }
    }

    if (playerWin > computerWin) {
        // If the number of player wins is greater than computer wins, alert that the player wins.
        alert("Player wins!");
    } else if (computerWin > playerWin) {
        // If the number of computer wins is greater than player wins, alert that the computer wins.
        alert("Computer wins! Better luck next time!");
    } else {
        // If the number of player wins and computer wins are equal, alert that it is a tie.
        alert("It's a tie!");
    }
}

// Use the function
game();