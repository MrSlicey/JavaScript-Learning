/*document.getElementById("rock").onclick = function () {
  let userChoice = 1;
  let botChoice = Math.floor(Math.random() * 3 + 1);

  if (userChoice === botChoice) {
    document.getElementById("winLog").textContent = "You tied!";
  } else if (botChoice === 2) {
    document.getElementById("winLog").textContent =
      "The bot chose PAPER! You LOSE!";
  } else if (botChoice === 3) {
    document.getElementById("winLog").textContent =
      "The bot chose SCISSORS! You WIN!";
  }
  console.log(botChoice);
};
document.getElementById("paper").onclick = function () {
  let userChoice = 2;
  let botChoice = Math.floor(Math.random() * 3 + 1);

  if (userChoice === botChoice) {
    document.getElementById("winLog").textContent = "You tied!";
  } else if (botChoice === 1) {
    document.getElementById("winLog").textContent =
      "The bot chose ROCK! You WIN!";
  } else if (botChoice === 3) {
    document.getElementById("winLog").textContent =
      "The bot chose SCISSORS! You LOSE!";
  }
  console.log(botChoice);
};
document.getElementById("scissors").onclick = function () {
  let userChoice = 3;
  let botChoice = Math.floor(Math.random() * 3 + 1);

  if (userChoice === botChoice) {
    document.getElementById("winLog").textContent =
      "You and the bot had the same choice! You tied!";
  } else if (botChoice === 1) {
    document.getElementById("winLog").textContent =
      "The bot chose ROCK! You LOSE!";
  } else if (botChoice === 2) {
    document.getElementById("winLog").textContent =
      "The bot chose PAPER! You WIN!";
  }
  console.log(botChoice);
};
*/

let rock = 1;
let paper = 2;
let scissors = 3;

document.getElementById("scissors").onclick = function(){
    playRPS(scissors);
}
document.getElementById("paper").onclick = function(){
    playRPS(paper);
}
document.getElementById("rock").onclick = function(){
    playRPS(rock);
}


function playRPS(userChoice) {
  let botChoice = Math.floor(Math.random()*3 + 1)
    switch (true) { 
  case userChoice === botChoice: 
    document.getElementById("winLog").textContent =
      ("You and the bot had the same choice! You tied!");
  break;
  case userChoice === rock && botChoice === paper: 
    document.getElementById("winLog").textContent =
      ("The bot chose PAPER! You LOSE!");
  break;
  case userChoice === rock && botChoice === scissors: 
    document.getElementById("winLog").textContent =
      ("The bot chose SCISSORS! You WI!");
  break;
  case userChoice === paper && botChoice === rock: 
    document.getElementById("winLog").textContent =
      ("The bot chose ROCK! You WIN!");
  break;
  case userChoice === paper && botChoice === scissors: 
    document.getElementById("winLog").textContent =
      ("The bot chose SCISSORS! You LOSE!");
  break;
  case userChoice === scissors && botChoice === rock: 
    document.getElementById("winLog").textContent =
      ("The bot chose ROCK! You LOSE!");
  break;
  case userChoice === scissors && botChoice === paper: 
    document.getElementById("winLog").textContent =
      ("The bot chose PAPER! You WIN!");
  break;
}
console.log("The Bot Chose:", botChoice, "The Player Chose:", userChoice)
}
