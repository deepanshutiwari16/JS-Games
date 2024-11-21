const boxRXC = 7;
let attemptsRemaining = 10;
let currentPosition = 49;
const exit = 1;
const BOX_SIZE = 30;
const SPACE = " ";

const safePath1 = "49 48 41 34 27 20 19 18 25 32 31 30 23 16 15 8 1";
const safePath2 = "49 48 47 40 33 26 25 24 31 38 37 36 29 22 15 16 17 10 3 2 1";
const safePath3 = "49 48 41 34 35 28 21 20 19 26 25 32 39 38 37 30 23 16 15 8 1";
const safePath4 = "49 42 35 34 33 26 19 18 17 24 31 30 29 22 15 8 1";

function generatePath() {
  const number = Math.random();

  if (number < 0.25) {
    return safePath1;
  }
  if (number < 0.5) {
    return safePath2;
  }
  if (number < 0.75) {
    return safePath3;
  }

  return safePath4;
}

function matchAtPosition(string, subString, stringIndex) {
  for (let substrIndex = 0; substrIndex < subString.length; substrIndex++) {
    if (string[stringIndex + substrIndex] !== subString[substrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  subString += "";

  if (subString === '') {
    return false;
  }

  for (let index = 0; index <= string.length - subString.length; index++) {
    if (matchAtPosition(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function getBombMSG() {
  const bombWarning = "\n You Stepped on Mine 💣!!! ";
  const attemptInfo = " Remaining Attempts : " + attemptsRemaining;

  return bombWarning + attemptInfo;
}

function movingInstruction(params) {
  const up = "Move ⬆️ : W ";
  const down = " Down ⬇️ : S ";
  const left = " Left ⬅️ : A ";
  const right = " Rigth ➡️ : D ";

  return "\n " + up + down + left + right;
}

function createBox() {
  let boxIndex = 0;
  let box = "";

  for (let row = 0; row < boxRXC; row++) {
    box += "\n" + startingSpaces();
    for (let column = 0; column < boxRXC; column++) {
      boxIndex++;
      if (boxIndex !== currentPosition) {
        box += "⬜";
      }
      if (boxIndex === currentPosition) {
        box += "🟩";
      }
      if (!isSubstring(path, currentPosition)) {
        currentPosition = 49;
        attemptsRemaining--;
        console.log(getBombMSG());
        continue;
      }
    }
  }

  return console.log(box);
}

function getUserInput() {
  return prompt("\n Enter Direction : ");
}

function gameInfo() {
  const game = "\n Welcome to Mine Field game 💣";
  const way = "\n There is only one way. Others are Mines 💣";
  const finish = "\n You have to reach top left ";
  const position = "\n Your position is 🟩";

  return game + way + finish + position;
}

function getWarningMSG() {
  const warning = "\n Incorrect Instruction !!! ";
  
  return warning;
}

function controller(userInput) {
  if (userInput === 'w' || userInput === 'W') {
    return currentPosition > boxRXC ? currentPosition - boxRXC : currentPosition;
  }
  if (userInput === 's' || userInput === 'S') {
    const down = currentPosition < (boxRXC * boxRXC) - 6;
    return down ? currentPosition + boxRXC : currentPosition;
  }
  if (userInput === 'a' || userInput === 'A') {
    const left = currentPosition % boxRXC === 1;
    return left ? currentPosition : currentPosition - 1;
  }
  if (userInput === 'd' || userInput === 'D') {
    const right = currentPosition % boxRXC === 0;
    return right ? currentPosition : currentPosition + 1;
  }

  console.log(getWarningMSG());
  prompt("\n please enter a valid instruction...");

  return currentPosition;
}

function header(params) {
  let boxHead = "┏";    
  for (let index = 0; index < BOX_SIZE; index++) {
    boxHead = boxHead + "━";
  }

  return boxHead + "┓";
}

function footer() {
  let boxFoot = "┗";

  for (let index = 0; index < BOX_SIZE; index++) {
    boxFoot = boxFoot + "━";
  }

  return boxFoot + "┛";
}

function startingSpaces() {
  let spaceFromStart = SPACE;

  for (let index = 0; index < 20; index++) {
    spaceFromStart += SPACE;
  }

  return spaceFromStart;
}

function createHeading() {
  
  const headingTop = startingSpaces() + header();
  const heading = "\n" + startingSpaces() + "┃" +"      💣 MINE FIELD 💣        " + "┃\n";
  const headingBottom = startingSpaces() + footer();

  return headingTop + heading + headingBottom;
}

function startMinefield(path, name) {
  console.clear();

  if (attemptsRemaining < 1) {
    return "\n" + name + " you 💀 are Dead ⚰️ !! Better Luck In Next Life! ☮️\n";
  }

  createBox(path);
  console.log(movingInstruction());

  if (currentPosition === exit) {
    return "\n 🎉🎉 Congratulations 🤩 !! " + name + " you Won 🎉🎉\n";
  }

  const userInput = getUserInput();
  currentPosition = controller(userInput);

  return startMinefield(path, name);
}

console.log(createHeading());
prompt("\n press enter to continue");

console.log(gameInfo());
const playerName = prompt("\n please enter your name :");
const path = generatePath();
console.log(startMinefield(path, playerName));
