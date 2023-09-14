function getPlayerChoice(e) {
    const clicked = e.target.id;

    return clicked;
}


function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];

    let randomNum = (Math.floor(Math.random() * computerChoices.length) + 1);

    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}


let roundCount = 1;
let wins = 0;

function playRound(e) {
    if (roundCount > 5) {
        alert("You've already played 5 rounds!");
        return;
    }

    let playerChoice = getPlayerChoice(e);
    let computerChoice = getComputerChoice();

    const results = document.querySelector('.results');
    const roundResult = document.createElement('p');
    const roundNum = document.createElement('h3');
    const finalRound = document.createElement('h1');
    const finalResult = document.createElement('h4');

    results.appendChild(roundNum);
    results.appendChild(roundResult);
    results.appendChild(finalRound);
    results.appendChild(finalResult);

    roundResult.classList.add('round-outcome');
    roundNum.classList.add('round-count');
    finalRound.classList.add('final-round');
    finalResult.classList.add('final-outcome');

    if (playerChoice === computerChoice) {
        roundNum.textContent = `Round ${roundCount}`;
        roundResult.textContent = "It's a tie!";
        wins = wins + 0.5;
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") || 
        (playerChoice === "paper" && computerChoice === "rock")) {
        roundNum.textContent = `Round ${roundCount}`;
        roundResult.textContent = `You win! Your choice, ${playerChoice}, beats computer choice, ${computerChoice}!`;
        wins++;
    } else {
        roundNum.textContent = `Round ${roundCount}`;
        roundResult.textContent = `You lose! Computer choice, ${computerChoice}, beats your choice, ${playerChoice}!`;
    };

    if (roundCount === 5) {
        finalRound.textContent = "Final Result!";

        if (wins > 2.5) {
            finalResult.textContent = "You won the game!";
        }
        else if (wins < 2.5) {
            finalResult.textContent = "Computer won the game! Better luck next time";
        } else {
            finalResult.textContent = "It's a tie!";
        }
    }

    roundCount++;
}

document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('button');
    console.log(options);

    options.forEach(option => {
        option.addEventListener('click', playRound);
    });
});