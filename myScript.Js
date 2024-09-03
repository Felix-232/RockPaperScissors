const Choices = ["Rock", "Paper", "Scissors"];
let input = prompt("Choose between Rock, Paper and Scissors:")

humanScore = 0;
computerScore = 0;

function getComputerChoice () {
    random = Math.round(Math.random() * 3);
    let computerChoice = Choices[random];
    return computerChoice;
}

function getHumanChoice () {
    strLower = input.toLowerCase();
    strFirstChar = strLower.charAt(0).toUpperCase();
    strRest = strLower.slice(1);
    humanChoice = strFirstChar + strRest;
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            alert("It's a tie!")
        } 
        else if (computerChoice === "Paper") {
            alert("You lose! The computer chose Paper.")
            humanScore += 1
        } 
        else if (computerChoice === "Scissors") {
            alert("You win! The computer chose Scissors")
        }

    } else if (humanChoice === "Paper") {
        if (computerChoice === "Paper") {
            alert("It's a tie!")
        }
        else if (computerChoice === "Scissors") {
            alert("You lose! The computer chose Scissors.")
            humanScore += 1
        }
        else if (computerChoice === "Rock") {
            alert("You win! The computer chose Rock")
        }

    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Scissors") {
            alert("It's a tie!")
        }
        else if (computerChoice === "Rock") {
            alert("You lose! The computer chose Rock.")
            humanScore += 1
        }
        else if (computerChoice === "Paper") {
            alert("You win! The computer chose Paper")
        }

    }
}
(playRound(getHumanChoice(), getComputerChoice()));
