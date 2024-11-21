const start = 10;
const end = 30;
let balls = 6;

function giveTarget(start, end) {
  return Math.floor(Math.random() * (start - end) + end);
}

function getFormat() {
  return "======================================";
}

function message(player, target, balls) {
  const welcomeSegment = "\nwelcome " + player;
  const description = "\nyou have to chase " + target + " runs in " + balls + " balls \n";

  return getFormat() + welcomeSegment + description + getFormat();
}

function confirmation() {
  return confirm("\ndo you want to continue the game ?");
}

function scoreCard(targetLeft, balls) {
  const needToWin = "need to win = " + targetLeft + " in " + balls + "  balls";

  return needToWin;
}

function getRun(run) {
  switch (run) {
    case 0: return "\nDot ball 😿";
    case 1: return "\nyou took a single 🏃";
    case 2: return "\nyou took double 🏃";
    case 3: return "\nyou took triple 🏃";
    case 4: return "\nyou hit a boundary 4️⃣";
    case 5: return "\nyou took five runs 🏃";
    case 6: return "\nyou hit a six 6️⃣";
    case 7: return "\nthat's a no ball 🎉";
  }
}

const player = prompt("\nEnter your name", "player");
const target = giveTarget(start, end);
let targetLeft = target;

console.log(message(player, target, balls));

let total = 0;
while (balls > 0 && total < target && confirmation()) {
  let run = Math.floor(Math.random() * 7);

  total = run + total;
  balls = run === 7 ? balls : balls - 1;
  targetLeft = targetLeft - run;

  console.log(getRun(run));
  console.log(scoreCard(targetLeft, balls));
}

const win = "\nhurray !! you won 🏆...";
const lose = "\nBetter luck next time 😭....";

console.log(total >= target ? win : lose);
