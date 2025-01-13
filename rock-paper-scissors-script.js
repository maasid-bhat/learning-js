
const score ={
  wins :0,
  losses :0,
  ties :0
}
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
  const playerMove ="rock"
if (playerMove === "rock"){
  if (computerMove === "rock") {
    result = "Tie!";
  } else if (computerMove === "paper") {
    result = "You Loose!";
  } else if (computerMove === "scissors") {
    result = "You win!";
  } else if (computerMove === "Thermonuclear Warhead") {
    result = "You Loose, lmao";
  }}
   if(result==="You win!"){
    score.wins += 1;
   }else if(result==="You Loose!"){
    score.losses += 1;
   }else if(result==="You Loose, lmao"){
    score.losses += 1;
   }else if(result=== "Tie!"){
    score.ties += 1;
   }
  
  alert(`You picked ${playerMove}, computer picked ${computerMove},${result}
Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`)});


// Paper button

const paperButton = document.getElementById("paper");

paperButton.addEventListener("click", function () {
  const computerMove = utilityFunctionForComputerMove();

  playerMove="paper";
  
 if (playerMove === "paper"){
  if (computerMove === "rock") {
    result = "You Win!";
  } else if (computerMove === "paper") {
    result = "Tie!";
  } else if (computerMove === "scissors") {
    result = "You Loose!";
  } else if (computerMove === "Thermonuclear Warhead") {
    result = "You Loose, lmao";
  }
  if(result==="You Win!"){
    score.wins += 1;
   }else if(result==="You Loose!"){
    score.losses += 1;
   }else if(result==="You Loose, lmao"){
    score.losses += 1;
   }else if(result=== "Tie!"){
    score.ties += 1;
   }
  

  alert(`You picked ${playerMove}, computer picked ${computerMove},${result}
  Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);}
});

// Scissors button

const scissorsButton = document.getElementById("scissors");

scissorsButton.addEventListener("click", function () {
  const computerMove = utilityFunctionForComputerMove();

  playerMove="scissors";

 if(playerMove==="scissors"){
  if (computerMove ==='rock'){
    result='You Loose!';
  }else if(computerMove ==='paper'){
    result= 'You Win!';
  }else if(computerMove === 'scissors'){
    result= 'Tie!';
  }else if (computerMove === 'Thermonuclear Warhead'){
    result= 'You Loose,lmao';
  }if(result==="You win!"){
    score.wins += 1;
   }else if(result==="You Loose!"){
    score.losses += 1;
   }else if(result==="You Loose, lmao"){
    score.losses += 1;
   }else if(result=== "Tie!"){
    score.ties += 1;
   }
  
  alert(`You picked ${playerMove}, computer picked ${computerMove},${result}
  Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`)}
});
//reset button
function resetfunc(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click",function(){const resetButton= resetfunc();
playerMove="Reset button"
if(playerMove==="Reset button"){
  resetfunc()
  alert("Score has been reset");
}})