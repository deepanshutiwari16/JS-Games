const headingSize = 43;
const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

function repeat(string, times) {
  for (let index = 0; index < times; index++) {
    string = string + "━";
  }

  return string;
}

function header() {
  return "┏" + repeat('', headingSize) + "┓";
}

function footer() {
  return "┗" + repeat('', headingSize) + "┛";
}

function createHeading() {
  const heading = "\n┃" + "        Rock🪨 Paper📃 Scissor✂️  game      " + "┃\n";

  return header() + heading + footer();
}

function userWantsToPlayGame() {
  return confirm("\n Do you want to play rock paper scissor");
}

function showInstructions() {
  const welcome = "\n\n Welcome to ROCK🪨 PAPER📃 SCISSOR✂️";
  const forROCK = "\n\n Press 1 for ROCK 🪨";
  const forPaper = "\n Press 2 for PAPER 📃";
  const forScissor = "\n Press 3 for SCISSOR ✂️";

  console.log(createHeading() + welcome + forROCK + forPaper + forScissor);
}

function getPlayerChoice() {
  return +(prompt("\n 🧔 Enter your choice : "));
}

function getComputerChoice() {
  return Math.ceil(Math.random() * 3);
}

function getSymbol(choice) {
  switch (choice) {
    case 1:
      return "🪨";
    case 2:
      return "📃";
  }
  return "✂️";
}

function displayCoices(playerInput, computerInput) {
  const playerChoiceSymbol = getSymbol(playerInput);
  const computerChoiceSymbol = getSymbol(computerInput);

  console.log("\n your choice is " + playerChoiceSymbol + "\n computer choice is " + computerChoiceSymbol);
}

function isDraw(playerInput, computerInput) {
  return playerInput === computerInput;
}

function drawMsg() {
  console.log("\n Match tied");
}

function isPlayerWon(playerInput, computerInput) {
  return playerInput === ROCK && computerInput === SCISSOR || playerInput === PAPER && computerInput === ROCK || playerInput === SCISSOR && computerInput === PAPER;
}

function playerWinMsg() {
  console.log("\n Hurray 🎉🎉🎉 You won the match.🎉🎉\n");
}

function computerWinMsg() {
  console.log("\n OOPS😭😭😭 You lost the match.🎉🎉\n");
}

function inputNotValidMsg() {
  console.log("\n Input is not valid. read Instruction");
}

function game() {
  const playerInput = getPlayerChoice();
  const computerInput = getComputerChoice();

  if (isNaN(playerInput)) {
    return inputNotValidMsg();
  }

  displayCoices(playerInput, computerInput);

  if (isDraw(playerInput, computerInput)) {
    return drawMsg();
  }

  if (isPlayerWon(playerInput, computerInput)) {
    return playerWinMsg();
  }

  return computerWinMsg();
}

function startGame() {
  while (userWantsToPlayGame()) {
    console.clear();
    showInstructions();

    game();
  }

  console.log("\n Come Back To Play \n");
}

startGame();
