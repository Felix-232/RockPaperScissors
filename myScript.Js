const Choices = ["Rock", "Paper", "Scissors"];
let input = prompt("Choose between Rock, Paper and Scissors:")

humanScore = 0;
computerScore = 0;

function getComputerChoice () {
    random = Math.floor(Math.random() * 3);
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
            console.log("It's a tie!")
        }
        else if (computerChoice === "Paper") {
            console.log("You lose! The computer chose Paper.")
            humanScore += 1
        }
        else if (computerChoice === "Scissors") {
            console.log("You win! The computer chose Scissors")
        }

    }
}
(playRound(getHumanChoice(), getComputerChoice()));