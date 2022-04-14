class Game {
  constructor(players, turnLeft = 10) {
    this.players = players;
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft -= 1;
  }

  playersAlive() {
    return this.players.filter((player) => player.isDead() == false);
  }

  displayWinners() {
    let winners = players.filter((player) => player.status == "winner");
    return winners.length == 1
      ? alert(`Winner is ${winners[0].name}`)
      : alert(`Survivors are ${winners.map((winner) => winner.name)}`);
  }

  gameOver() {
    alert("Game over !");
    this.playersAlive().map((player) => player.changeStatusToWinner());
    this.displayWinners();
  }

  checkForWin() {
    if (this.turnLeft == 0 || this.playersAlive().length == 1) {
      return true;
    }
  }

  watchStats(players) {
    players.map((player) =>
      alert(
        `Hero : ${player.name} \nClass : ${player.constructor.name} \nHP : ${player.hp} \nMana : ${player.mana} \nDamage : ${player.dmg}`
      )
    );
  }
}
