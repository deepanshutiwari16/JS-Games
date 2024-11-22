let teamBotScore = 0;
let yourTeamScore = 0;

function toss() {
  const HEAD = 1;
  const TAIL = 2;
  let didYouWin = 0;

  confirm("Are you excited for the TOSS");

  if (confirm("Do you want head")) {
    didYouWin = Math.ceil(Math.random() * 2) === HEAD;
  } else {
    didYouWin = Math.ceil(Math.random() * 2) === TAIL;
  }

  if (didYouWin) {
    console.log("Oh! You won the toss");

    if (confirm("Do You Want Batting?")) {
      console.log("You will bat first");

      return "youBat";
    } else {
      console.log("You will bowl first");

      return "youBowl";
    }
  }

  const aiDecision = Math.ceil(Math.random() * 2);

  if (aiDecision === 1) {
    console.log("Bot won the toss, will bat first");
    return "botBat";
  }

  console.log("BOT won the toss, will bowl first");
  return "botBowl";

}

function wait(times) {
  times = times * 500000000;
  let index = 1;
  while (index !== times) {
    times--;
  }
}

function ballResult(bowltype, shotType) {
  if (bowltype === shotType) {
    switch (bowltype) {
      case 1:
        return 1;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 4;
    }
  }
  return 0;
}

function getWicket(bowlType, shotType) {
  switch (bowlType) {
    case 1 :
    case 4 :  
      return shotType === 2 ? 1 : 0;
    case 2 :
    case 3 :
      return shotType === 1 ? 1 : 0;
  }
}

function isLBW(shotType, bowlType) {
  if (shotType === 3 && bowlType === 4) {
    console.log("howzzthat????");
    wait(9);

    const umpireDecision = Math.ceil(Math.random() * 2);

    if (umpireDecision === 2) {
      console.log("umpire signals OUT!!!!");
      return true;
    }

    if (umpireDecision === 1) {
      console.log("umpire gives not out!!!");
      if (confirm("Do you want review?..")) {
        console.log("decision pending....");
        wait(6);
        return false;
      }
    }
  }
  return;
}

function getTheBowlType(bowlType) {
  switch (bowlType) {
    case 1:
      return "YORKER";
    case 2:
      return "BOUNCER";
    case 3:
      return "OUTSWING";
    case 4:
      return "INSWING";
  }
}

function getShotType(shotType) {
  switch (shotType) {
    case 1:
      return "DEFENCE";
    case 2:
      return "PULL";
    case 3:
      return "COVER DRIVE";
    case 4:
      return "FLICK";
  }
}

function doBowlingFirst() {
  let wicket = 0;
  let over = 0;

  while (over < 1 && wicket !== 5) {
    for (let ball = 1; ball <= 6; ball++) {
      console.log("THE BOWLING OPTIONS ARE FOLLOWING ⤵️");
      console.log(" 🎾 1 for YORKER \n 🎾 2 for BOUNCER \n 🎾 3 for OUTSWING \n 🎾 4 for INSWING");

      const bowlType = +prompt("Choose one of them to attack the Batsman");

      console.log("you are going to bowl a " + getTheBowlType(bowlType));
      console.log("Batsman is ready to hit....");

      wait(6);

      const shotType = Math.ceil(Math.random() * 4);

      console.log("BOT plays a " + getShotType(shotType));

      teamBotScore += ballResult(bowlType, shotType);
      wicket += getWicket(bowlType, shotType);

      if (isLBW(shotType, bowlType)) {
        wicket += 1;
        break;
      }

      console.log("BOT ", teamBotScore, "-", wicket, "(over " + over + "." + ball + ")");

    }

    over++;
  }
  //const result = doChasing(teamBotScore);

  //return result;
}

function startGame() {
  const tossResult = toss();
  let matchResult = "";

  switch (tossResult) {
    case "botBat":
    case "youBowl":
      matchResult = doBowlingFirst();
      break;

    case "botBowl":
    case "youBat":
      //matchResult = doBattingFirst();
      break;
  }
}

startGame();
