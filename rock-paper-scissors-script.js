function utilityFunctionForComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 4) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 4 && randomNumber < 2 / 4) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 4 && randomNumber < 3 / 4) {
    computerMove = "scissors";
  } else if (randomNumber >= 3 / 4 && randomNumber <= 1) {
    computerMove = "Thermonuclear Warhead";
  }

  return computerMove;
}

let result = "";

// Rock button

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  const computerMove = utilityFunctionForComputerMove();

  if (computerMove === "rock") {
    result = "Tie!";
  } else if (computerMove === "paper") {
    result = "You lose!";
  } else if (computerMove === "scissors") {
    result = "You win!";
  } else if (computerMove === "Thermonuclear Warhead") {
    result = "You lose, lmao";
  }

  alert(`You picked rock, computer picked ${computerMove},${result}`);
});

// Paper button

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
  const computerMove = utilityFunctionForComputerMove();

  if (computerMove === "rock") {
    result = "You Win!";
  } else if (computerMove === "paper") {
    result = "Tie!";
  } else if (computerMove === "scissors") {
    result = "You Loose!";
  } else if (computerMove === "Thermonuclear Warhead") {
    result = "You lose,lmao";
  }

  alert(`You picked paper, computer picked ${computerMove},${result}`);
});

// Scissors button

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
  const computerMove = utilityFunctionForComputerMove();

  if (computerMove ==='rock'){
    result='You Loose!';
  }else if(computerMove ==='paper'){
    result= 'You Win!';
  }else if(computerMove === 'scissors'){
    result= 'Tie!';
  }else if (computerMove === 'Thermonuclear Warhead'){
    result= 'You lose,lmao';
  }
  alert(`You picked Scissors, computer picked ${computerMove},${result}`)
});
