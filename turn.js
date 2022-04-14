class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft);
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`Round ${this.turnNumber}`);
    this.hasNotPlayed(this.playersAlive());
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, you're up !`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerChoice = prompt(
      `${player.name}, what do you want to do this turn ?\n- [0] Attack another player.\n- [1] Cast special attack.\n- [2] Check your current state. \n- [3] Check other players' current state. \n- [4] See special attack.`
      );

    switch (playerChoice) {
      case "0":
      player.dealDamage(this.chooseTarget(player));
      break;

      case "1":
      if (
        player.constructor.name == "Fighter" ||
        player.constructor.name == "Paladin" ||
        player.constructor.name == "Monk" ||
        player.constructor.name == "Assassin" ||
        player.constructor.name == "Berserker" ||
        player.constructor.name == "Shaman" ||
        player.constructor.name == "Wizard"
        ) {
        player.specialAttack(this.chooseTarget(player));
    } else {
      player.specialAttack();
    }
    break;

    case "2":
    this.watchStatsCurrentPlayer(player);
    this.playerActionsMenu(player);
    break;

    case "3":
    this.watchStatsOtherPlayers(player);
    this.playerActionsMenu(player);
    break;

    case "4":
    player.seeSpecialAttack();
    this.playerActionsMenu(player);
    break;

    default:
    alert("Invalid choice, you badly missed your target and lost your turn !");
  }
  player.hasPlayed = true;
}

chooseTarget(player) {
  let targets = this.playersAlive().filter((target) => target != player);

  let indexes = Array.from(Array(targets.length).keys());

  let action = `${player.name}, who's your target ?`;
  for (let i in targets) {
    action += `\n Enter [${i}] to attack ${targets[i].name}`;
  }
  let playerChoice = prompt(action);

  if (indexes.includes(parseInt(playerChoice))) {
    return targets[parseInt(playerChoice)];
  } else {
    alert("Invalid choice, you sadly lost your turn !");
  }
}

playersAliveAndHaventPlayed() {
  return this.playersAlive().filter((player) => player.hasPlayed == false);
}

turnPlay() {
  while (
    this.playersAliveAndHaventPlayed().length > 0 &&
    this.playersAlive().length > 1
    ) {
    this.playerActionsMenu(
      this.pickPlayerRandomly(this.playersAliveAndHaventPlayed())
      );
}
}

watchStatsOtherPlayers(player) {
  this.watchStats(this.playersAlive().filter((p) => p != player));
}

watchStatsCurrentPlayer(player) {
  this.watchStats(this.playersAlive().filter((p) => p == player));
}

hasNotPlayed(players) {
  players.map((player) => (player.hasPlayed = false));
}

deactivateBuffs(players) {
  players
  .filter((player) => player.constructor.name == "Fighter" || "Shaman" || "Assassin")
  .map((player) => player.resetSpe());
}
}
