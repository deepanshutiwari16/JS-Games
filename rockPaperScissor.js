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

function topOfHeading() {
  return "┏" + repeat('', headingSize) + "┓";
}

function bottomOfHeading() {
  return "┗" + repeat('', headingSize) + "┛";
}

function createHeading() {
  const headingTop = topOfHeading();
  const heading = "\n┃" + "        Rock🪨 Paper📃 Scissor✂️  game      " + "┃\n";
  const headingBottom = bottomOfHeading();

  return headingTop + heading + headingBottom;
}

function instruction(player) {
  const welcome = "\n\n " + player + " Welcome to ROCK🪨 PAPER📃 SCISSOR✂️";
  const forROCK = "\n\n Press 1 for ROCK 🪨";
  const forPaper = "\n Press 2 for PAPER 📃";
  const forScissor = "\n Press 3 for SCISSOR ✂️";

  return createHeading() + welcome + forROCK + forPaper + forScissor;
}

function computerChoice() {
  return Math.ceil(Math.random() * 3);
}

function compareChoices(playerInput, computerInput, player) {
  const playerWin = "\n Hurray 🎉🎉🎉 " + player + " You won the match.🎉🎉\n";
  const computerWin = "\n OOPS😭😭😭 " + player + " You lost the match.🎉🎉\n";

  switch (playerInput) {
    case ROCK:
      return computerInput === PAPER ? computerWin : playerWin;
    case PAPER:
      return computerInput === SCISSOR ? computerWin : playerWin;
    default:
      return computerInput === ROCK ? computerWin : playerWin;
  }
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

function printChoices(playerInput, computerInput) {
  const playerChoice = getSymbol(playerInput);
  const botChoice = getSymbol(computerInput);

  return "\n your choice is " + playerChoice + "\n computer choice is " + botChoice;
}

function giveResult(playerInput, computerInput, player) {
  if (playerInput === computerInput) {
    console.log(printChoices(playerInput, computerInput));
    return "\n Match Tied";
  }
  if (playerInput === 1 || playerInput === 2 || playerInput === 3) {
    console.log(printChoices(playerInput, computerInput));
    return compareChoices(playerInput, computerInput, player);
  }

  return ("\n Enter a valid input. READ INSTRUCTIONS....");
}

function game() {
  console.clear();
  let wantToPlay = confirm("\n Do you want to play rock paper scissor");

  while (wantToPlay) {
    const player = prompt("\n Enter player 🧔 name : ");
    console.log(instruction(player));

    const playerInput = +(prompt("\n " + player + " 🧔 Enter your choice : "));
    const computerInput = computerChoice();
    const result = giveResult(playerInput, computerInput, player);
    console.log(result);
    prompt("\n press enter");
    return game();
  }
}

game();

console.log("\n Come Back To Play \n");
