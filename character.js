class Character {
  constructor(name, hp, dmg, mana, status = "playing", hasPlayed = false) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.hasPlayed = hasPlayed;
  }

  takeDamage(damage) {
    this.hp -= damage;
    alert(
      `${this.name} takes ${damage} damage. \n${this.name} has ${this.hp} left.`
    );
  }

  dealDamage(opponent) {
    alert(`${this.name} deals ${this.dmg} damage to ${opponent.name}.`);
    opponent.takeDamage(this.dmg);

    if (this.didKill(opponent) == true) {
      this.mana += 20;
      opponent.statusLoser();
      alert(
        `${this.name} gains 20 mana for killing ${opponent.name}.`
      );
    }
  }

  specialAttack() {}

  seeSpecialAttack() {}

  isDead() {
    return this.hp <= 0 ? true : false;
  }

  statusLoser() {
    if (this.isDead() == true) {
      this.status = "loser";
      alert(`${this.name} is dead !`);
    }
  }

  statusWinner() {
    if (this.isDead() == false) {
      this.status = "winner";
    }
  }

  didKill(opponent) {
    return opponent.isDead() == true ? true : false;
  }
}
