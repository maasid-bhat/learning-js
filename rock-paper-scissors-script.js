let score;

const persistedScore = localStorage.getItem("score");

if (persistedScore) {
  score = JSON.parse(persistedScore);
} else {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

const moveList = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
  THERMO_NUCLEAR_WARHEAD: "Thermo-nuclear Warhead",
};

const resultsList = {
  WIN: "You Win!",
  LOOSE: "You Loose!",
  VIOLATION: "You Loose, lmao!",
  TIE: "Tie!",
};

let result = "";

const scoreText = document.getElementById("score");
scoreText.innerText = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

function getComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 4) {
    computerMove = moveList.ROCK;
  } else if (randomNumber >= 1 / 4 && randomNumber < 2 / 4) {
    computerMove = moveList.PAPER;
  } else if (randomNumber >= 2 / 4 && randomNumber < 3 / 4) {
    computerMove = moveList.SCISSORS;
  } else {
    computerMove = moveList.THERMO_NUCLEAR_WARHEAD;
  }

  return computerMove;
}

function trackScore() {
  if (result === resultsList.WIN) {
    score.wins += 1;
  } else if (result === resultsList.TIE) {
    score.ties += 1;
  } else {
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
}

function getResult(playerMove) {
  const computerMove = getComputerMove();

  if (playerMove === moveList.ROCK) {
    if (computerMove === moveList.ROCK) {
      result = resultsList.TIE;
    } else if (computerMove === moveList.PAPER) {
      result = resultsList.LOOSE;
    } else if (computerMove === moveList.SCISSORS) {
      result = resultsList.WIN;
    } else {
      result = resultsList.VIOLATION;
    }
  } else if (playerMove === moveList.PAPER) {
    if (computerMove === moveList.ROCK) {
      result = resultsList.WIN;
    } else if (computerMove === moveList.PAPER) {
      result = resultsList.TIE;
    } else if (computerMove === moveList.SCISSORS) {
      result = resultsList.LOOSE;
    } else {
      result = resultsList.VIOLATION;
    }
  } else {
    if (computerMove === moveList.ROCK) {
      result = resultsList.LOOSE;
    } else if (computerMove === moveList.PAPER) {
      result = resultsList.WIN;
    } else if (computerMove === moveList.SCISSORS) {
      result = resultsList.TIE;
    } else {
      result = resultsList.VIOLATION;
    }
  }

  trackScore();

  return computerMove;
}

function getAlert(playerMove, computerMove) {
  scoreText.innerText = `You picked ${playerMove}, computer picked ${computerMove},${result} Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

  return score;
}

function play(playerMove) {
  const computerMove = getResult(playerMove);
  getAlert(playerMove, computerMove);
}
// Rock button
const rockButton = document.getElementById(moveList.ROCK);
rockButton.addEventListener("click", () => {
  play(moveList.ROCK);
}); // this is an arrow function, it's same as the function on event listener below

// Paper button
const paperButton = document.getElementById(moveList.PAPER);
paperButton.addEventListener("click", function () {
  play(moveList.PAPER);
});

// Scissors button
const scissorsButton = document.getElementById(moveList.SCISSORS);
scissorsButton.addEventListener("click", function () {
  play(moveList.SCISSORS);
});

// Reset button
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  localStorage.removeItem("score");

  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  scoreText.innerText = "Score has been reset!";
});
