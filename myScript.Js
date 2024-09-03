const Choices = ["Rock", "Paper", "Scissors"];

const startButton = document.getElementById("StartGame");

humanScore = 0;
computerScore = 0;

humanChoice = undefined;
computerChoice = undefined;

function getComputerChoice () {
    random = Math.floor(Math.random() * 3);
    computerChoice = Choices[random];
    return computerChoice;
}

function getHumanChoice (humanChoice) {
    strLower = humanChoice.toLowerCase();
    strFirstChar = strLower.charAt(0).toUpperCase();
    strRest = strLower.slice(1);
    humanChoice = strFirstChar + strRest;
    return humanChoice;
}

function playRound () {
    (getComputerChoice())

    humanChoice = getHumanChoice(prompt("Choose between Rock, Paper and Scissors:"))

    console.log(humanChoice);
    console.log(computerChoice);
    
    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
        if (humanChoice === computerChoice) {
            alert("It's a tie!")
            playRound()
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            alert(`You win! The computer chose ${computerChoice}`)
            humanScore += 1
            alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)    
        } else {
            alert(`You lose! The computer chose ${computerChoice}`)
            computerScore += 1
            alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
        }
        
        
    }
    else {
        alert("Invalid input. Please choose between Rock, Paper, and Scissors.");
        playRound();
    }
}


function didHumanWin () {
    if (humanScore > computerScore) {
        alert(`You win. Congrats!\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    } else {
        alert(`You lose. Maybe next time!\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    }
}

// function startNewGame () {
//     answer = confirm(`Press "Ok" to start a new game.`)
//     if (answer == true) {
//         playGame()
//     } 
// }

function playGame () {
    for (let i = 0; i <5; i++) {
        playRound();
    }
    didHumanWin()
    // startNewGame()
}

startButton.addEventListener("click", playGame)
